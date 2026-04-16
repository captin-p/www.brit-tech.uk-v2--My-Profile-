import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProfileData, getProfilePageCopy } from "@/data/profile";
import { isLanguage, languages, type Language } from "@/lib/i18n";

type DownloadProfilePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: DownloadProfilePageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : "en";
  const profile = getProfileData(language).profile;

  return {
    title: `${profile.name} - ${profile.title}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

function renderSkills(skills: readonly string[]) {
  return skills.join(" | ");
}

export default async function DownloadProfilePage({
  params,
}: DownloadProfilePageProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const language = lang as Language;
  const pageCopy = getProfilePageCopy(language);
  const {
    profile,
    experience,
    skillGroups,
    certifications,
    education,
    languages: spokenLanguages,
    achievements,
  } = getProfileData(language);

  return (
    <main className="bg-[#f7f9fc] text-[#111827] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="rounded-lg border border-[#d8dfeb] bg-white p-7 mb-7">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-28 h-36 rounded-md object-cover border border-[#d8dfeb]"
            />
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                {profile.title}
              </p>
              <h1 className="text-3xl font-bold mb-3">{profile.name}</h1>
              <p className="text-sm leading-relaxed text-[#5b6474]">
                {profile.summary}
              </p>
              <div className="flex flex-wrap gap-4 mt-5 text-sm text-[#5b6474]">
                <span>{profile.location}</span>
                <span>{profile.email}</span>
                <span>{profile.phone}</span>
                <span>{profile.linkedin}</span>
                <span>{profile.github}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-7">
          <h2 className="text-xl font-bold mb-4">{pageCopy.experienceTitle}</h2>
          <div className="flex flex-col gap-4">
            {experience.map((job) => (
              <article
                key={job.id}
                className="rounded-lg border border-[#d8dfeb] bg-white p-5"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold">{job.role}</h3>
                    <p className="text-sm font-semibold text-primary">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-sm text-[#5b6474] md:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                    <p>{job.type}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm text-[#5b6474] leading-relaxed space-y-1">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-7">
          <h2 className="text-xl font-bold mb-4">{pageCopy.skillsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <article
                key={group.category}
                className="rounded-lg border border-[#d8dfeb] bg-white p-5"
              >
                <h3 className="font-bold mb-2">{group.category}</h3>
                <p className="text-sm text-[#5b6474] leading-relaxed">
                  {renderSkills(group.skills)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
          <article className="rounded-lg border border-[#d8dfeb] bg-white p-5">
            <h2 className="text-xl font-bold mb-4">
              {pageCopy.certificationsTitle}
            </h2>
            <ul className="space-y-3 text-sm text-[#5b6474]">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <strong className="text-[#111827]">{cert.name}</strong>
                  <br />
                  {cert.issuer} - {cert.year}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-[#d8dfeb] bg-white p-5">
            <h2 className="text-xl font-bold mb-4">{pageCopy.educationTitle}</h2>
            <ul className="space-y-3 text-sm text-[#5b6474]">
              {education.map((item) => (
                <li key={`${item.degree}-${item.period}`}>
                  <strong className="text-[#111827]">{item.degree}</strong>
                  <br />
                  {item.institution}, {item.country}
                  <br />
                  {item.period}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-[#d8dfeb] bg-white p-5">
            <h2 className="text-xl font-bold mb-4">{pageCopy.languagesTitle}</h2>
            <ul className="space-y-3 text-sm text-[#5b6474]">
              {spokenLanguages.map((item) => (
                <li key={item.language}>
                  <strong className="text-[#111827]">{item.language}</strong>:{" "}
                  {item.level}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            {pageCopy.achievementsTitle}
          </h2>
          <ul className="rounded-lg border border-[#d8dfeb] bg-white p-5 list-disc pl-10 text-sm text-[#5b6474] leading-relaxed space-y-2">
            {achievements.map((item) => (
              <li key={item.title}>
                <strong className="text-[#111827]">{item.title}</strong>
                <br />
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
