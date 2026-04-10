import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n/config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;
  
  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Exclude static files, API routes, and special Next.js paths
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.startsWith('/images') ||
      pathname.startsWith('/fonts') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    const locale = getLocale(request);

    // If the locale is the default locale (es), we don't want to redirect to /es
    // Instead, we internally rewrite to /es so the user sees the root URL
    if (locale === i18n.defaultLocale) {
      const targetPath = pathname === '/' ? `/${i18n.defaultLocale}` : `/${i18n.defaultLocale}${pathname}`;
      return NextResponse.rewrite(
        new URL(`${targetPath}${request.nextUrl.search}`, request.url)
      );
    }

    // For other locales, redirect to the localized path
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }

  // If the pathname has the default locale (/es/...), redirect to remove it
  if (pathname.startsWith(`/${i18n.defaultLocale}/`) || pathname === `/${i18n.defaultLocale}`) {
    const newPath = pathname.replace(new RegExp(`^/${i18n.defaultLocale}`), '') || '/';
    return NextResponse.redirect(
      new URL(`${newPath}${request.nextUrl.search}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
