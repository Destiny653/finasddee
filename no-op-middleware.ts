import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  // Never prefix locale in the path since routes are not locale-scoped
  localePrefix: "never",
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  // Only apply next-intl locale handling
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Run on all paths except those starting with api, _next or having a file extension
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
