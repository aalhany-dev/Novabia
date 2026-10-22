# Novabia Main Website — Structure Update

This update applies the requested content corrections to the main `novabia.dev` site:

## Changes made

- **World tab** updated to say **37 different roads** instead of infinite discovery paths.
- **Origins tab** now follows the requested layout: the **province emblem stays at the top** of each origin card, and the **province coins are introduced in a separate bottom row**.
- **Companions tab** rewritten to state that Novabia has:
  - **three generations**
  - **playable and non-playable companions**
  - a **Gen 1 showcase**
- Added Gen 1 showcase cards for:
  - **Hound**
  - **Crab**
  - **Spore**
- Replaced the temporary Spore placeholder with the uploaded **final Spore chart**.
- Added the new asset files `assets/crab-gen1.png` and `assets/spore-gen1.png`.

## Files to replace in your repo

- `index.html`
- `styles.css`
- `script.js` (unchanged but included for convenience)
- `README.md`
- `assets/crab-gen1.png`
- `assets/spore-gen1.png`

## Important

This package assumes your existing repository still contains the rest of the Novabia asset files already used by the site, such as:

- `assets/logo-main.png`
- `assets/map-world.png`
- `assets/hound-line.png`
- character art, screenshots, icons, and audio files

If you upload the final Spore image later, I can swap it in cleanly.

The bottom coin row currently uses the same province icon art as the coin representation. If you later provide separate dedicated coin artwork, I can swap those in quickly.
