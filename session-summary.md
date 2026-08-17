## Objective
Create a dedicated, well-detailed Mobs detail page: on the Mobs view, clicking a mob card opens a page that shows the selected mob's full details.
> open na paginas de mobs ao clicar em mobs crie uma pagina com detalhes do mobs seleceionado bem detalhada

### Context
- Static HTML/CSS/JS Minecraft "hub" at `T:\lucas alves\minecraft` (ES6 + three.js + skinview3d). Mobs live in `MOBS_DATA` (`js/app.js`, 12 mobs). Gallery cards are built in `initMobs`/`render`.
- 3D rendering handled by `js/mob3d.js` (`Mob3D.createViewer(canvas, slug, onError)`), reading geometry from `js/mob3d.data.js` and textures from `js/mob3d.tex.js` (base64).
- Original "fix the bugged wolf" request was investigated and resolved as **not a bug** (wolf geometry `wolf.json`/`MOB3D_MODELS['wolf']` and texture are byte-for-byte identical to official Mojang Bedrock vanilla; layout math reproduces vanilla). Left as-is.

## Relevant files
- `js/app.js` — now exposes `window.MCHub = { MOBS_DATA, findMobById(id) }`; each `.mob-card` has a click handler → `mob.html?id=<mob.id>`.
- `mob.html` (new) — header/nav + detail layout: large 3D canvas, name/category/emoji, biome, threat level, description, drops/loot table, back-to-mobs. Loads same scripts as `index.html`.
- `js/mob-detail.js` (new) — reads `?id=`, resolves the mob via `MCHub.findMobById`, populates detail DOM, and calls `Mob3D.createViewer('#mob-detail-canvas', mob.id, fallback)`.
- `css/style.css` — reused (`.mc-panel`, `.mc-btn`, `.mc-tab`, `.mob-threat`, `.loot-table`, `.loot-slot`).
- `js/mob3d.js`, `js/mob3d.data.js`, `js/mob3d.tex.js` — unchanged.

## Next move
None — implemented in this session. Verify by opening `index.html` (or `mob.html?id=wolf` directly): clicking any mob card in the Mobs tab now navigates to a shareable, well-detailed mob page.
