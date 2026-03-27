export const languages = ["en", "fr"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export const languageOptions: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "fr";
}
