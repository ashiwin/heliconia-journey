# Heliconia Journey: Interactive Infographic

An interactive infographic web component exploring the six lifecycle stages of the Heliconia flower family, from tropical origins to seed dispersal. This infographic is built as a standalone embeddable asset.

## Running the Project

No build step or package manager required. It is that easy!

Proceed by following these instructions:

1. Clone the repository.
2. Ensure the following files are in the project root:

```
index.html
heliconia-journey.js
three.min.js
gsap.min.js
images/
  origins.jpg
  germination.jpg
  growth.jpg
  blooming.jpg
  pollination.jpg
  fruiting.jpg
```

3. Serve the project from a local server. This is required for ES module loading:

```bash
# Node.js (if npx is available) (my preferred method)
npx serve -l 3000

# Python (if you prefer the alternative)
python3 -m http.server 3000
```

4. Open `http://localhost:3000` in your browser.

**Important:** Opening `index.html` directly as a `file://` URL will not work because the JS is loaded as a module (`type="module"`).

## Features Implemented

### Interactive Elements

**Tooltips**\
Hover over any stat card in the info panel to reveal a detailed explanation.

**Expand/Collapse**\
The Field Note section toggles open and closed with an animated height transition.

**Step Navigation**\
Six interaction surfaces: sidebar buttons, bottom dot indicators, Prev/Next arrows, keyboard arrow keys, and touch swipe on mobile.

### Dynamic Visuals & Animations

**GSAP transitions**\
Content slides and fades directionally when moving between stages, with staggered stat card reveals.

**Intro animation**\
Sidebar, main panel, info panel, and nav bar each animate in on first load.

**Colour theming**\
Every stage carries its own accent colour; CSS custom properties update instantly across all UI elements on step change.

**Ambient blob**\
A radial gradient orb pulses behind the main content, colour-matched to the active stage.

**Background numeral**\
A large ghosted step number sits behind the content as a compositional element.

### Three.js Particle System

- 350 floating particles drift upward and wrap, creating a living background layer.
- On each stage transition, a burst effect fires and particles accelerate briefly before settling.
- Particle colour lerps smoothly toward the active stage's accent colour using `THREE.Color.lerp` each frame.
- Rendered to a `<canvas>` that sits behind all UI layers with `pointer-events: none`.

### Responsive Design

Caters to both desktop, tablet and mobile views.

### Web Component

The entire infographic is encapsulated as `<heliconia-journey>` using the native Web Components API with Shadow DOM. It can be dropped into any webpage with a single tag:

```html
<script src="heliconia-journey.js" type="module"></script>
<heliconia-journey></heliconia-journey>
```

All styles are scoped inside the shadow root and will not leak into or be affected by the host page's CSS.

### Accessibility

- Keyboard navigation via `ArrowLeft` / `ArrowRight` (and `Up` / `Down`)
- `aria-live="polite"` on the main content area announces stage changes to screen readers
- `role="progressbar"` with `aria-valuenow` on the progress indicator
- `aria-pressed` on sidebar nav buttons; `aria-selected` on dot indicators
- `aria-expanded` on the Field Note toggle
- All interactive elements are focusable with visible focus states

## Assumptions & Limitations

**Images must be placed relative to index.html**\
The six stage illustrations (`origins.jpg`, `germination.jpg`, etc.) must be included in the `images` folder relative to `index.html`. The component renders without them if the files are absent and only the `<img>` element will be broken.

**Three.js and GSAP are loaded as local files** (`three.min.js`, `gsap.min.js`) **rather than from a CDN**\
This is to allow offline use. The files must be present relative to `index.html`.

**No build tooling**\
The project is intentionally vanilla. There is no bundler, no TypeScript, and no npm dependencies. This keeps the source portable and the file structure transparent.

**The tablet breakpoint shares the same layout rules as mobile**\
Both trigger at `max-width: 1024px`. This is intentional as the 3-column desktop layout does not compress well between 768px and 1024px.

**The infographic is designed for modern evergreen browsers.**\
No polyfills are included for Web Components or CSS custom properties.

Thank you.

_Prepared by Ashiwin Kumar_
