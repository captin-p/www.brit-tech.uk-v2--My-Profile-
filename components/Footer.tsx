"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getShowcaseData } from "@/data/showcase";
import { getSiteCopy } from "@/data/site-copy";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const siteCopy = getSiteCopy(language);
  const contact = getShowcaseData(language).contact;

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-text-bright font-semibold text-xl tracking-tight"
            >
              Brit<span className="text-primary">Tech</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {siteCopy.footer.description}
            </p>
          </div>

          <nav aria-label={siteCopy.footer.navigation}>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-4">
              {siteCopy.footer.navigation}
            </p>
            <ul className="flex flex-col gap-2">
              {siteCopy.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-4">
              {siteCopy.footer.getInTouch}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle
                    size={15}
                    style={{ color: "var(--color-emerald)" }}
                  />
                  {contact.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={15} style={{ color: "var(--color-sea-blue)" }} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={15} style={{ color: "var(--color-orange)" }} />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={15} style={{ color: "var(--color-violet)" }} />
                  {siteCopy.footer.linkedInProfile}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={15} style={{ color: "var(--color-emerald)" }} />
                  {siteCopy.footer.githubProfile}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-subtle">
            &copy; {currentYear} {profile.name}. {siteCopy.footer.rights}
          </p>
          <p className="text-xs text-text-subtle">brit-tech.uk - {profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
