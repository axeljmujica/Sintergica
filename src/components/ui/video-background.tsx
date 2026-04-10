import React from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: 'dark' | 'light' | 'brand' | 'none';
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoBackground({
  src,
  poster,
  overlay = 'dark',
  className,
  autoPlay = true,
  loop = true,
  muted = true,
}: VideoBackgroundProps) {
  const overlayClasses = {
    dark: 'bg-black/60 dark:bg-black/80',
    light: 'bg-white/60 dark:bg-white/10',
    brand: 'bg-brand-mid/80 mix-blend-multiply',
    none: '',
  };

  return (
    <div className={cn('absolute inset-0 w-full h-full overflow-hidden -z-10', className)}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="object-cover w-full h-full"
        aria-hidden="true"
      />
      {overlay !== 'none' && (
    import React from 'react';
import { cn } from '@/libasimport { cn } from '@/lib}
    </div>
  );
}
