"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getShowcaseData } from "@/data/showcase";
import type { Language } from "@/lib/i18n";

const contactCopy = {
  en: {
    label: "Contact",
    title: "Tell me what you need built, fixed, installed, or designed.",
    subtitle:
      "Share a few details and I will open a prepared email you can review and send. WhatsApp is available for faster project conversations.",
    formTitle: "Project Enquiry",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    serviceLabel: "Service",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell me about the site, users, timeline, equipment, design need, or problem you want solved.",
    submitLabel: "Prepare Email",
    requiredMessage: "Please complete your name, email, service, and message.",
    successMessage:
      "Your email app should open with the message prepared. Review it, then send.",
    contactDetails: "Direct contact",
    whatsappHelp: "Fastest for urgent project questions.",
    options: [
      "Network installation",
      "CCTV installation",
      "Website design",
      "Graphic design",
      "IT support",
      "Systems administration",
      "Other project",
    ],
  },
  fr: {
    label: "Contact",
    title: "Dites-moi ce qu'il faut construire, corriger, installer ou designer.",
    subtitle:
      "Partagez quelques details et je prepare un email que vous pourrez verifier puis envoyer. WhatsApp reste disponible pour les demandes rapides.",
    formTitle: "Demande de projet",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "vous@example.com",
    serviceLabel: "Service",
    messageLabel: "Message",
    messagePlaceholder:
      "Expliquez le site, les utilisateurs, le delai, le materiel, le besoin design ou le probleme a resoudre.",
    submitLabel: "Preparer l'email",
    requiredMessage:
      "Merci de completer votre nom, email, service et message.",
    successMessage:
      "Votre application email devrait s'ouvrir avec le message prepare. Verifiez-le, puis envoyez.",
    contactDetails: "Contact direct",
    whatsappHelp: "Le plus rapide pour les questions urgentes.",
    options: [
      "Installation reseau",
      "Installation CCTV",
      "Creation de site web",
      "Design graphique",
      "Support IT",
      "Administration systeme",
      "Autre projet",
    ],
  },
} satisfies Record<
  Language,
  {
    label: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    requiredMessage: string;
    successMessage: string;
    contactDetails: string;
    whatsappHelp: string;
    options: string[];
  }
>;

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialForm: FormValues = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactPageContent() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const showcase = getShowcaseData(language);
  const copy = contactCopy[language];
  const [form, setForm] = useState<FormValues>({
    ...initialForm,
    service: copy.options[0],
  });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const contactItems = useMemo(
    () => [
      {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail,
      },
      {
        label: showcase.contact.whatsappLabel,
        value: profile.phone,
        href: showcase.contact.whatsappUrl,
        icon: MessageCircle,
      },
      {
        label: "Phone",
        value: profile.phone,
        href: `tel:${profile.phone.replace(/\s/g, "")}`,
        icon: Phone,
      },
      {
        label: "LinkedIn",
        value: "bright-konadu",
        href: profile.linkedin,
        icon: Linkedin,
      },
      {
        label: "GitHub",
        value: "captin-p",
        href: profile.github,
        icon: Github,
      },
    ],
    [profile, showcase.contact.whatsappLabel, showcase.contact.whatsappUrl]
  );

  const updateField = (field: keyof FormValues, value: string) => {
    setStatus("idle");
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const subject = `Project enquiry: ${form.service}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  };

  return (
    <section className="pt-32 pb-20 px-6 border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {copy.label}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-text-bright leading-tight text-balance mb-5">
              {copy.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {copy.subtitle}
            </p>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={16} className="text-primary" />
                <p className="text-sm font-semibold text-text-bright">
                  {profile.location}
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-4">
                {copy.contactDetails}
              </p>
              <div className="flex flex-col gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon size={15} className="shrink-0" />
                      <span className="font-medium text-foreground">
                        {item.label}:
                      </span>
                      <span>{item.value}</span>
                    </a>
                  );
                })}
              </div>
              <p className="text-xs text-text-subtle mt-5">
                {copy.whatsappHelp}
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-text-bright mb-6">
              {copy.formTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-sm font-medium text-text-bright">
                {copy.nameLabel}
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder={copy.namePlaceholder}
                  className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-text-bright">
                {copy.emailLabel}
                <input
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={copy.emailPlaceholder}
                  type="email"
                  className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-bright mb-4">
              {copy.serviceLabel}
              <select
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                {copy.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-text-bright">
              {copy.messageLabel}
              <textarea
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={copy.messagePlaceholder}
                rows={7}
                className="rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary resize-y"
              />
            </label>

            {status !== "idle" && (
              <p
                className={`mt-4 text-sm ${
                  status === "error" ? "text-destructive" : "text-primary"
                }`}
              >
                {status === "error" ? copy.requiredMessage : copy.successMessage}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={15} />
              {copy.submitLabel}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
