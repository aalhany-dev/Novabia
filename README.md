# Novabia — Official Game Website

**Production:** https://novabia.dev/  
**Repository:** https://github.com/aalhany-dev/Novabia  
**Purpose:** Public-facing home for **Novabia: Legend Evolution**, its world, characters, companion systems, gameplay evidence, playtesting, community feedback, contact and legal information.

The game is **in development**. The available build is a **playable development prototype**, not a finished launch product. Novabia is **pre-revenue**; do not present planned content or commercial hypotheses as completed achievements.

## Site ownership and domain responsibilities

| Host | Repository | Responsibility |
| --- | --- | --- |
| `novabia.dev` | `aalhany-dev/Novabia` | Consumer-facing game website, narrative, origins, companions, screenshots, policies and feedback links |
| `play.novabia.dev` | `aalhany-dev/Play-Novabia` | Published Godot browser/PWA build; test actual gameplay |
| `eip.novabia.dev` | `aalhany-dev/EIP-Novabia` | Investor portal: investment narrative, financial scenarios, evidence, risks and production planning |

The separate `calendar.novabia.dev` link is not a substitute for the game's roadmap or for its official website.

**Primary player-facing contact:** `support@novabia.dev`.  
**Investor contact:** `invest.in@novabia.dev` (handled by the EIP portal).

## Canonical public pages and QR destinations

These paths are actual HTML files served by GitHub Pages—not JavaScript-only fragment tabs.

| Topic | URL | Source |
| --- | --- | --- |
| Home | https://novabia.dev/ | `index.html` |
| World | https://novabia.dev/world/ | `world/index.html` |
| Three origins | https://novabia.dev/origins/ | `origins/index.html` |
| Gameplay | https://novabia.dev/gameplay/ | `gameplay/index.html` |
| Companions & evolution | https://novabia.dev/companions/ | `companions/index.html` |
| Sound | https://novabia.dev/sound/ | `sound/index.html` |
| Playtesting instructions | https://novabia.dev/playtest/ | `playtest/index.html` |
| Player feedback | https://novabia.dev/feedback/ | `feedback/index.html` |
| Follow & contact | https://novabia.dev/follow/ | `follow/index.html` |
| Privacy EN / AR | https://novabia.dev/privacy/ · https://novabia.dev/privacy-ar/ | `privacy/index.html` · `privacy-ar/index.html` |
| Terms EN / AR | https://novabia.dev/terms/ · https://novabia.dev/terms-ar/ | `terms/index.html` · `terms-ar/index.html` |

**Print/QR rule:** Use clean, trailing-slash URLs. For example, print `https://novabia.dev/origins/`, not `https://novabia.dev/#origins`. The older `#world`, `#origins`, `#gameplay`, `#companions`, `#sound`, `#playtest`, `#feedback`, and `#follow` links are supported for legacy QR codes and external links: `script.js` redirects them to the matching canonical paths. `#home` continues to show the homepage.

## File responsibilities

- `index.html`: Homepage and game identity, cross-page navigation, canonical metadata, VideoGame/WebSite JSON-LD.
- `<topic>/index.html`: Independent searchable HTML for each topic; edit the owning page here. **Do not duplicate these sections in the homepage.**
- `styles.css`: Shared fantasy theme, layout and responsive rules.
- `seo-pages.css`: Shared styling for dedicated topic pages (headings, breadcrumbs, related links).
- `script.js`: Shared navigation/mobile menu, legacy hash redirects, feedback/social links, image lightbox, reveal effects. Do not restore the old hash-tab router.
- `assets/`: Original approved Novabia imagery, origin icons, screenshots, audio and other public assets.
- `legal.css` and the four legal directories: English/Arabic privacy and terms; maintain correct canonicals and `hreflang` alternate pairs.
- `robots.txt`: Crawl rules and the canonical-domain sitemap location.
- `sitemap.xml`: The canonical public URLs on **this host only**.
- `CNAME`: GitHub Pages custom domain configuration.

### Visual-asset terminology: important

**Origin UI symbols are not necessarily province emblems or reward items.** In the origins displays:
- Elemental: `assets/icon-water.png` — **not** `emblem-elemental.png`.
- Kinetic: `assets/icon-fist.png` — **not** `icon-medal.png`.
- Landscape: `assets/icon-landscape.png`.
- `icon-medal.png` represents the Honor Medal reward, not the Kinetic origin identity.
- `emblem-elemental.png` appears in the original token/coin showcase; do not substitute it for the Elemental water icon.

Preserve the established character designs, province geography, companion branches and development-stage distinctions. Image alternatives should be descriptive and accurate.

## SEO, Search Console and indexing

Google Search Console **Domain Property: `novabia.dev`** can cover the apex host and its subdomains.

Maintain separate sitemap files for each host:
- https://novabia.dev/sitemap.xml
- https://eip.novabia.dev/sitemap.xml
- https://play.novabia.dev/sitemap.xml

Submit the relevant sitemaps from Search Console. Do not put `play` or `eip` URLs into the main site's `sitemap.xml`. The apex sitemap covers the homepage, eight topic pages and four legal URLs.

For every new public topic page:
1. Create `topic/index.html`; set a unique meaningful `<title>` and description.
2. Include a self-referencing `rel="canonical"` with the final HTTPS URL, useful on-page headings and crawlable internal `<a href="/topic/">` links.
3. Keep Open Graph metadata truthful and use a verified Novabia image.
4. Update homepage navigation, related-topic links, and `sitemap.xml`.
5. Ensure `styles.css`, `seo-pages.css` and shared scripts work on direct visits and mobile.
6. Test via a direct URL, refresh, an old `#topic` link, and search engine URL inspection.
7. Avoid fabricated reviews, release dates, results, player metrics, sales or rich-result guarantees.

Do not include fragment-only locations in the sitemap. A sitemap suggests URLs for crawling; it does not guarantee indexing or ranking. Keep Google Search Console verification metadata intact.

## Deployment and release responsibilities

GitHub Pages serves the `main` branch using the `CNAME` record. Changes merged into `main` deploy automatically after Pages processing.

Before changing routing, shared scripts, legal wording or major artwork:
- Preserve a backup branch.
- Verify that each `/topic/` URL renders directly with its own content and that menu/footer links point to real paths.
- Verify images, cross-domain links, accessibility labels and mobile layout.
- Ensure `play.novabia.dev` is not described as a finished game.
- Keep contact information consistent: `support@novabia.dev` for visitors, `invest.in@novabia.dev` for investor inquiries.

**Historical backup:** `backup/pre-clean-urls-2026-10-30` preserves the version before the standalone-page migration. Earlier SEO backup: `backup/pre-search-console-seo-2026-10-30`.

## External services and data boundaries

- Feedback/playtest questionnaire may be hosted on a Google Form. Maintain the correct live link and legal disclosures.
- Social links: Instagram `@playnovabia` and Facebook `PlayNovabia`.
- Privacy and terms are public in English/Arabic, and should be reviewed when collection or processing changes.
- Investor figures, speculative future products and funding terms belong primarily on `eip.novabia.dev`, not in the consumer game description.

© 2026 Novabia. All rights reserved.
