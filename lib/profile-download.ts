import type { Language } from "@/lib/i18n";
import { getProfileData, getProfilePageCopy } from "@/data/profile";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderList(items: readonly string[]) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

export function buildProfileDownloadHtml(language: Language) {
  const profileData = getProfileData(language);
  const pageCopy = getProfilePageCopy(language);
  const {
    profile,
    experience,
    skillGroups,
    certifications,
    education,
    languages,
    achievements,
  } = profileData;

  const experienceHtml = experience
    .map(
      (job) => `
        <article class="panel">
          <div class="job-header">
            <div>
              <h3>${escapeHtml(job.role)}</h3>
              <p class="company">${escapeHtml(job.company)}</p>
            </div>
            <div class="job-meta">
              <p>${escapeHtml(job.period)}</p>
              <p>${escapeHtml(job.location)}</p>
              <span class="pill">${escapeHtml(job.type)}</span>
            </div>
          </div>
          <ul>${renderList(job.bullets)}</ul>
        </article>
      `
    )
    .join("");

  const skillsHtml = skillGroups
    .map(
      (group) => `
        <article class="panel">
          <h3>${escapeHtml(group.category)}</h3>
          <p>${escapeHtml(group.skills.join(" | "))}</p>
        </article>
      `
    )
    .join("");

  const certificationsHtml = certifications
    .map(
      (cert) => `
        <li>
          <strong>${escapeHtml(cert.name)}</strong><br />
          <span>${escapeHtml(cert.issuer)} - ${escapeHtml(cert.year)}</span>
        </li>
      `
    )
    .join("");

  const educationHtml = education
    .map(
      (item) => `
        <li>
          <strong>${escapeHtml(item.degree)}</strong><br />
          <span>${escapeHtml(item.institution)}, ${escapeHtml(item.country)} - ${escapeHtml(item.period)}</span>
        </li>
      `
    )
    .join("");

  const languagesHtml = languages
    .map(
      (item) => `
        <li>
          <strong>${escapeHtml(item.language)}</strong>: ${escapeHtml(item.level)}
        </li>
      `
    )
    .join("");

  const achievementsHtml = achievements
    .map(
      (item) => `
        <li>
          <strong>${escapeHtml(item.title)}</strong><br />
          <span>${escapeHtml(item.description)}</span>
        </li>
      `
    )
    .join("");

  return `<!doctype html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(profile.name)} - ${escapeHtml(profile.title)}</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f7f9fc;
        --text: #111827;
        --muted: #5b6474;
        --border: #d8dfeb;
        --accent: #2c5cff;
        --panel: #ffffff;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--text);
        font-family: Inter, Arial, sans-serif;
        line-height: 1.55;
      }

      main {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 24px 56px;
      }

      header {
        background: linear-gradient(135deg, rgba(44, 92, 255, 0.08), rgba(26, 181, 160, 0.08));
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 28px;
        margin-bottom: 28px;
      }

      h1,
      h2,
      h3,
      p {
        margin: 0;
      }

      h1 {
        font-size: 2.1rem;
        margin-bottom: 8px;
      }

      h2 {
        font-size: 1.4rem;
        margin-bottom: 14px;
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 6px;
      }

      .eyebrow {
        color: var(--accent);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin: 18px 0 0;
        color: var(--muted);
        font-size: 0.95rem;
      }

      section {
        margin-top: 26px;
      }

      .panel {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 18px 20px;
        margin-bottom: 14px;
      }

      .job-header {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 12px;
      }

      .job-meta {
        color: var(--muted);
        text-align: right;
        font-size: 0.9rem;
      }

      .company {
        color: var(--accent);
        font-weight: 600;
      }

      .pill {
        display: inline-block;
        margin-top: 6px;
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 4px 10px;
      }

      ul {
        margin: 0;
        padding-left: 20px;
      }

      li + li {
        margin-top: 8px;
      }

      .three-col {
        display: grid;
        gap: 18px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (max-width: 800px) {
        .job-header,
        .three-col {
          display: grid;
          grid-template-columns: 1fr;
        }

        .job-meta {
          text-align: left;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <p class="eyebrow">${escapeHtml(profile.title)}</p>
        <h1>${escapeHtml(profile.name)}</h1>
        <p>${escapeHtml(profile.summary)}</p>
        <div class="meta">
          <span>${escapeHtml(profile.location)}</span>
          <span>${escapeHtml(profile.email)}</span>
          <span>${escapeHtml(profile.phone)}</span>
          <span>${escapeHtml(profile.linkedin)}</span>
        </div>
      </header>

      <section>
        <h2>${escapeHtml(pageCopy.experienceTitle)}</h2>
        ${experienceHtml}
      </section>

      <section>
        <h2>${escapeHtml(pageCopy.skillsTitle)}</h2>
        ${skillsHtml}
      </section>

      <section class="three-col">
        <div class="panel">
          <h2>${escapeHtml(pageCopy.certificationsTitle)}</h2>
          <ul>${certificationsHtml}</ul>
        </div>
        <div class="panel">
          <h2>${escapeHtml(pageCopy.educationTitle)}</h2>
          <ul>${educationHtml}</ul>
        </div>
        <div class="panel">
          <h2>${escapeHtml(pageCopy.languagesTitle)}</h2>
          <ul>${languagesHtml}</ul>
        </div>
      </section>

      <section>
        <h2>${escapeHtml(pageCopy.achievementsTitle)}</h2>
        <ul>${achievementsHtml}</ul>
      </section>
    </main>
  </body>
</html>`;
}
