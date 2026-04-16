"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Download,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData, getProfilePageCopy } from "@/data/profile";
import { getShowcaseData } from "@/data/showcase";

export default function ProfileHeader() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const copy = getProfilePageCopy(language);
  const contact = getShowcaseData(language).contact;

  return (
    <section className="pt-32 pb-16 px-6 border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">BK</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {profile.title}
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-bright mb-2">
              {profile.name}
            </h1>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
              <MapPin size={14} className="text-primary" />
              {profile.location}
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={15} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={15} />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={15} />
                {copy.linkedInLabel}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={15} />
                {copy.gitHubLabel}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={14} />
                {contact.whatsappLabel}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={14} />
                {copy.contactButton}
              </a>
              <a
                href={`/profile/download?lang=${language}`}
                download={`bright-konadu-profile-${language}.html`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                aria-label={copy.downloadAriaLabel}
              >
                <Download size={14} />
                {copy.downloadButton}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
