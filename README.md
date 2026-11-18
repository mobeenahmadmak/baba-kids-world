# Baba & Kids World

A free, family-friendly educational Progressive Web App (PWA) for Arfa and Mohid.

**Live app:** https://mobeenahmadmak.github.io/baba-kids-world/

## Android installation

1. Open the live app in Chrome on Android.
2. Use Chrome's menu → **Install app** or **Add to Home screen**.
3. Open the app once while online before using it offline.
4. Keep the existing home-screen installation after future updates. When a new service worker is waiting, choose **Update Now** after finishing the current activity.

The home-screen icon may take time to refresh on some Android launchers. Reinstallation is not needed for normal content updates.

## Preserving progress

- Both profiles and Mathematics Academy progress are stored in the browser's local storage under the existing key `bkw-v1-progress`.
- A daily local recovery snapshot is kept when storage permits; Parent Area offers **Recover earlier local snapshot**.
- Parent Area supports exporting a JSON backup and importing it onto another device.
- **Export a backup before clearing browser data, reinstalling Chrome, or switching devices.** Clearing site storage can erase both the main data and its local snapshot.
- Recovery replaces both profiles and requires confirmation. The parent PIN is only a casual-access barrier, not strong authentication.

## Updates and offline use

The service worker caches the app's essential files. New versions wait for the user to select **Update Now**, then the app reloads. An offline indicator appears when the browser reports no network connection.

**Release procedure:** For every future app release, increment the `CACHE` constant in `sw.js` and commit it alongside the updated app files. Without a cache-version change, a previously cached HTML page may remain in use.

## Automated checks

Run `node tests/smoke.cjs` from the repository root. The GitHub Actions workflow `.github/workflows/baba-kids-checks.yml` also runs these checks on pushes and pull requests. These are source and syntax checks, **not** a substitute for testing on a physical Android device.

## Privacy and scope

No ads, accounts, tracking services, or remote database are included. The GitHub Pages repository is public: do not commit private family photos, recordings, credentials, or sensitive personal information. This app is separate from NAYLAM websites, dashboards, and Cloudflare services.

## Remaining Android work

Dedicated 192×192 and 512×512 PNG app icons and physical-device installation/update testing are still outstanding. The current manifest uses the existing SVG icon.
