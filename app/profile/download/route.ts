import { NextResponse } from "next/server";
import { getProfileData } from "@/data/profile";
import { buildProfileDownloadHtml } from "@/lib/profile-download";
import { defaultLanguage, isLanguage } from "@/lib/i18n";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLanguage = searchParams.get("lang");
  const language = isLanguage(requestedLanguage)
    ? requestedLanguage
    : defaultLanguage;
  const html = buildProfileDownloadHtml(language);
  const profile = getProfileData(language).profile;
  const safeName = profile.name.toLowerCase().replaceAll(" ", "-");

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${safeName}-profile-${language}.html"`,
      "Cache-Control": "no-store",
    },
  });
}
