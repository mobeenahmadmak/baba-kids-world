# Baba & Kids World V4

## Quick test
Open **Baba-Kids-World-V4-PLAY.html** in Chrome. The standalone file works without a ZIP or server. The PWA installation/offline service worker requires HTTPS hosting.

## Publish separately
1. Create a **new** GitHub repository. Do not reuse any existing NAYLAM or portfolio repository.
2. Upload `index.html`, `manifest.webmanifest`, `icon.svg`, and `sw.js` from this folder to the repository root.
3. In repository Settings > Pages, deploy from the main branch root. Wait for the new Pages URL.
4. Open the new URL in Android Chrome and choose Add to Home screen / Install if available.

## Features
Includes the V3 learning app and Arfa's Mathematics Academy, daily challenges, local progress, backup/restore, and a V4 local parent PIN for Parent Area and Baba's Question Bank. Math explanations are displayed after answering.

## Important limitations
- Parent PIN is a **casual-access barrier only**, not secure authentication. It is stored as a lightweight hash locally, not cryptographic protection. Do not use it for sensitive information.
- Data is stored per browser/device; use export/import to transfer progress. Clearing browser storage can delete it.
- Public GitHub Pages means do not include private family photos, voice messages, credentials, or personal details.
- A local HTML file does not install as a PWA; publish on HTTPS to test installation and offline caching.
- No existing repositories, Cloudflare services, or dashboards were modified.
