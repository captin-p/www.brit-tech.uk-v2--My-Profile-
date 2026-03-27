"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { languageOptions } from "@/lib/i18n";

const toggleCopy = {
  en: {
    label: "Language",
    ariaPrefix: "Switch language to",
  },
  fr: {
    label: "Langue",
    ariaPrefix: "Changer la langue vers",
  },
} as const;

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = toggleCopy[language];

  return (
    <div className="inline-flex items-center gap-2">
      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Globe size={13} />
        {copy.label}
      </span>
      <div className="inline-flex items-center rounded-md border border-border bg-background p-1">
        {languageOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={cn(
              "rounded-sm px-2.5 py-1 text-xs font-semibold transition-colors",
              language === option.value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-pressed={language === option.value}
            aria-label={`${copy.ariaPrefix} ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
