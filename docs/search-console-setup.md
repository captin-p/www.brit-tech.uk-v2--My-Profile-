# Google Search Console Setup

Use this after the latest version is deployed to `https://brit-tech.uk`.

## What Is Already Ready

- `https://brit-tech.uk/sitemap.xml`
- `https://brit-tech.uk/robots.txt`
- Canonical URLs on the main pages
- Page-level SEO titles and descriptions
- Open Graph and Twitter preview image
- JSON-LD structured data for the profile, business, services, and portfolio

## Setup Steps

1. Open Google Search Console:
   `https://search.google.com/search-console`

2. Add a new property.
   Use **Domain** property for the strongest setup:
   `brit-tech.uk`

3. Verify ownership.
   Google will provide a DNS TXT record. Add that TXT record wherever the domain DNS is managed.

4. Wait for verification to pass.
   DNS can take a few minutes, but sometimes longer.

5. Submit the sitemap.
   In Search Console, go to **Sitemaps** and submit:
   `https://brit-tech.uk/sitemap.xml`

6. Request indexing for the main pages:
   - `https://brit-tech.uk`
   - `https://brit-tech.uk/profile`
   - `https://brit-tech.uk/services`
   - `https://brit-tech.uk/graphics`
   - `https://brit-tech.uk/contact`

## Alternative Verification

If DNS verification is not available, use the **URL prefix** property:
`https://brit-tech.uk`

Google may provide an HTML meta tag. If you choose that method, copy only the verification code and add it to the `verification.google` field in `app/layout.tsx` metadata.

Example:

```ts
verification: {
  google: "paste-google-verification-code-here",
},
```
