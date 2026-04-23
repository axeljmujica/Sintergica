import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "public/images";
const MAX_WIDTH = 1920;
const SIZE_THRESHOLD = 300 * 1024; // 300KB
const JPG_Q = 80;
const PNG_Q = 85;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function main() {
  const files = (await walk(ROOT)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f)
  );
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;

  for (const file of files) {
    const { size: before } = await stat(file);
    if (before < SIZE_THRESHOLD) continue;

    const ext = extname(file).toLowerCase();
    const img = sharp(file, { failOn: "none" });
    const meta = await img.metadata();

    let pipeline = img.rotate();
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    let buf;
    if (ext === ".png") {
      const tryPalette = await pipeline
        .clone()
        .png({ quality: PNG_Q, compressionLevel: 9, palette: true, effort: 10 })
        .toBuffer()
        .catch(() => null);
      const tryPlain = await pipeline
        .clone()
        .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
        .toBuffer();
      buf = tryPalette && tryPalette.length < tryPlain.length ? tryPalette : tryPlain;
    } else {
      buf = await pipeline
        .jpeg({ quality: JPG_Q, mozjpeg: true, progressive: true })
        .toBuffer();
    }

    if (buf.length < before) {
      const fs = await import("node:fs/promises");
      await fs.writeFile(file, buf);
      totalBefore += before;
      totalAfter += buf.length;
      processed++;
      console.log(
        `${file}: ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB (-${Math.round((1 - buf.length / before) * 100)}%)`
      );
    } else {
      console.log(`${file}: skip (result larger)`);
    }
  }

  console.log(
    `\nDone. ${processed} files, ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB (saved ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)}MB)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
