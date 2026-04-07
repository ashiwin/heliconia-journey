// Heliconia Lifecycle Infographic by Ashiwin Kumar
// SVG Illustrations

const ILLUSTRATIONS = {
	origins: `<img src="images/origins.jpg" alt="Origins">`,
	germination: `<img src="images/germination.jpg" alt="Germination">`,
	growth: `<img src="images/growth.jpg" alt="Growth">`,
	blooming: `<img src="images/blooming.jpg" alt="Blooming">`,
	pollination: `<img src="images/pollination.jpg" alt="Pollination">`,
	fruiting: `<img src="images/fruiting.jpg" alt="Fruiting">`,
};

// Steps Texts and Data

const STEPS = [
	{
		id: "origins",
		number: "01",
		title: "Origins",
		subtitle: "Born of the Tropics",
		color: "#00C896",
		colorRgb: "0,200,150",
		threeColor: {
			r: 0,
			g: 200 / 255,
			b: 150 / 255,
		},
		description:
			"Heliconias come from the tropical Americas and parts of the Pacific, where warm air and constant moisture shape life on the rainforest floor. They grow beneath the canopy in soft, filtered light, within the belt between the Tropics of Cancer and Capricorn. They belong to the order Zingiberales, making them close relatives of bananas and birds of paradise.",
		stats: [
			{
				value: "194+",
				label: "Known Species",
				icon: "",
				detail: "There are at least 194 recognised species of Heliconia, and botanists are still discovering more. They stretch from the Amazon Basin to islands like Hawaii, covering Central America, South America, and Polynesia.",
			},
			{
				value: "25°N to 25°S",
				label: "Tropical Belt Range",
				icon: "",
				detail: "Heliconias live strictly within the tropics. They need steady warmth between 18°C to 35°C and high humidity all year. Even a short frost can destroy the plant above ground.",
			},
			{
				value: "0 to 2,000 m",
				label: "Altitude Range",
				icon: "",
				detail: "Most species stay close to sea level, below 500 m. Some mountain species have adapted to cooler cloud forests, reaching heights of up to 2,000 m.",
			},
		],
		highlight:
			'The name "Heliconia" comes from Mount Helicon in Greek mythology, said to be the home of the Muses. Linnaeus chose the name because these plants looked beautiful enough for the gods themselves.',
	},
	{
		id: "germination",
		number: "02",
		title: "Germination",
		subtitle: "The Slow Awakening",
		color: "#00BFFF",
		colorRgb: "0,191,255",
		threeColor: {
			r: 0,
			g: 191 / 255,
			b: 1,
		},
		description:
			"Each Heliconia seed is locked inside a hard, stone-like shell. In nature, this shell is usually broken down after passing through a bird. Only then can the seed begin to grow. When conditions are right, a small shoot called a prophyll slowly pushes upward toward the light.",
		stats: [
			{
				value: "3 to 6 months",
				label: "Germination Period",
				icon: "",
				detail: "Heliconia seeds are slow to wake up. Even in ideal conditions, they can take 3 to 6 months to germinate because of their extremely tough outer shell.",
			},
			{
				value: "25°C to 30°C",
				label: "Ideal Soil Temperature",
				icon: "",
				detail: "Warmth makes a big difference. Seeds kept between 25°C to 30°C in a humid environment sprout much faster than those left in cooler conditions.",
			},
			{
				value: "85%",
				label: "Humidity Required",
				icon: "",
				detail: "Young Heliconias need very moist air to survive. In the wild, the rainforest provides this naturally. In cultivation, growers often use enclosed trays or misting systems.",
			},
		],
		highlight:
			"Heliconia seeds are some of the toughest in the plant world. Their outer shell can sit dry for over five years and still come to life when moisture finally returns.",
	},
	{
		id: "growth",
		number: "03",
		title: "Growth",
		subtitle: "The Rapid Ascent",
		color: "#5AE600",
		colorRgb: "90,230,0",
		threeColor: {
			r: 90 / 255,
			g: 230 / 255,
			b: 0,
		},
		description:
			"Heliconias grow from an underground stem called a rhizome. From this, tall shoots rise and form what looks like a trunk, though it is actually layers of tightly wrapped leaves. In the right conditions, growth is fast and dramatic, with new leaves appearing regularly.",
		stats: [
			{
				value: "0.5 m to 6 m",
				label: "Mature Plant Height",
				icon: "",
				detail: "Some Heliconias stay small at around 0.5 m, while others can grow over 6 m tall. The tallest species tower above other plants on the rainforest floor.",
			},
			{
				value: "1 per week",
				label: "New Leaf Rate",
				icon: "",
				detail: "A healthy plant can produce a new leaf roughly every week, especially in warm and humid conditions.",
			},
			{
				value: "10 to 30",
				label: "Rhizome Offsets per Year",
				icon: "",
				detail: "Each year, a mature plant sends out 10 to 30 new shoots from its rhizome, gradually spreading outward and forming dense clumps.",
			},
		],
		highlight:
			"What looks like a tree trunk is actually not a trunk at all. It is a pseudostem, made entirely from overlapping leaf bases, while the real stem grows underground.",
	},
	{
		id: "blooming",
		number: "04",
		title: "Blooming",
		subtitle: "Architecture in Colour",
		color: "#FF3355",
		colorRgb: "255,51,85",
		threeColor: {
			r: 1,
			g: 51 / 255,
			b: 85 / 255,
		},
		description:
			"When a Heliconia flowers, it produces a striking spike made of colourful, boat-shaped bracts. These are not petals, but modified leaves. The real flowers are small tubes hidden inside, waiting for the right visitor.",
		stats: [
			{
				value: "5 to 35",
				label: "Bracts per Spike",
				icon: "",
				detail: "Each flowering spike can carry between 5 and 35 bracts, with several small flowers tucked inside each one.",
			},
			{
				value: "2 to 8 weeks",
				label: "Display Duration",
				icon: "",
				detail: "The bracts open one after another over 2 to 8 weeks, keeping the plant in bloom for a long period.",
			},
			{
				value: "30° to 90°",
				label: "Bract Angle Range",
				icon: "",
				detail: "Some bracts point downward, while others point upward. This angle decides which animals can reach the hidden flowers.",
			},
		],
		highlight:
			"The bright colours of Heliconia are not just for show. They also reflect ultraviolet light, which birds can see clearly, making the flowers stand out like glowing targets.",
	},
	{
		id: "pollination",
		number: "05",
		title: "Pollination",
		subtitle: "The Hummingbird Contract",
		color: "#FF9500",
		colorRgb: "255,149,0",
		threeColor: {
			r: 1,
			g: 149 / 255,
			b: 0,
		},
		description:
			"Heliconias and hummingbirds have shaped each other over millions of years. Each plant produces flowers that match the shape and length of a particular bird's beak, creating a close partnership.",
		stats: [
			{
				value: "35+",
				label: "Hummingbird Species",
				icon: "",
				detail: "More than 35 hummingbird species visit Heliconias. Some relationships are so specific that a plant may rely on just one type of bird.",
			},
			{
				value: "5 µL to 18 µL",
				label: "Nectar per Flower",
				icon: "",
				detail: "Each flower produces a small amount of nectar every day, but together they provide an important energy source for visiting birds.",
			},
			{
				value: "0%",
				label: "Self-Pollination",
				icon: "",
				detail: "Heliconias cannot fertilise themselves. They depend on birds to carry pollen from one plant to another, ensuring healthy genetic diversity.",
			},
		],
		highlight:
			"Some hummingbirds have curved beaks that perfectly match certain Heliconia flowers, showing how closely their evolution is linked.",
	},
	{
		id: "fruiting",
		number: "06",
		title: "Fruiting",
		subtitle: "Blue Jewels, New Beginnings",
		color: "#7C6FFF",
		colorRgb: "124,111,255",
		threeColor: {
			r: 124 / 255,
			g: 111 / 255,
			b: 1,
		},
		description:
			"After pollination, the flowers transform into bright blue fruits that stand out in the forest. Birds are drawn to these colours and eat the fruit, carrying the seeds away to new locations.",
		stats: [
			{
				value: "6 to 10 weeks",
				label: "Fruit Maturation",
				icon: "",
				detail: "It takes about 6 to 10 weeks for the fruit to fully ripen and turn its vivid blue colour.",
			},
			{
				value: "1 cm to 3 cm",
				label: "Drupe Diameter",
				icon: "",
				detail: "Each fruit is about 1 to 3 cm wide and contains a few hard seeds inside.",
			},
			{
				value: "95%",
				label: "Bird-Dispersed Seeds",
				icon: "",
				detail: "Most Heliconia seeds, around 95%, are spread by birds rather than falling to the ground nearby.",
			},
		],
		highlight:
			"The bright blue colour of Heliconia fruit is not from pigment, but from microscopic structures that reflect light, similar to the shimmer on butterfly wings.",
	},
];

// Component CSS

function getCSS() {
	return `
    /* Reset */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    button { font-family: inherit; cursor: pointer; }

    /* Host */
    :host {
      display: block;
      width: 100%;
      height: 100%;

      /* SF Pro system font stack */
      --hj-font: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
                 'Helvetica Neue', 'Segoe UI', sans-serif;

      /* Base palette, tropical daylight */
      --hj-bg: #F2FAF4;
      --hj-surface: #E6F4EA;
      --hj-border: rgba(11,40,22,0.10);
      --hj-text: #0B1C10;
      --hj-muted: #4A7060;

      /* Step-specific (updated by JS) */
      --hj-step: #00A87A;
      --hj-step-bg: rgba(0,168,122,0.10);
      --hj-step-glow: rgba(0,168,122,0.22);
    }

    /* Root grid */
    .hj-root {
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--hj-bg);
      color: var(--hj-text);
      font-family: var(--hj-font);
      overflow: hidden;
      display: grid;
      grid-template-columns: 208px 1fr 360px;
      grid-template-rows: 1fr 56px;
    }

    /* THREE.js canvas */
    .hj-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }

    /* Animated colour blob */
    .hj-blob {
      position: absolute;
      width: 520px;
      height: 520px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--hj-step-glow) 0%, transparent 68%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events:none;
      z-index: 0;
      animation: blobPulse 6s ease-in-out infinite;
      transition: background 0.65s;
    }

    @keyframes blobPulse {
      0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.45; }
      50% { transform: translate(-50%,-50%) scale(1.18); opacity: 0.7; }
    }

    /* SIDEBAR */
    .hj-sidebar {
      position: relative;
      z-index: 10;
      grid-column: 1;
      grid-row: 1;
      display: flex;
      flex-direction: column;
      padding: 32px 20px;
      border-right: 1px solid var(--hj-border);
      background: rgba(242,250,244,0.82);
      backdrop-filter: blur(28px);
    }

    /* Brand wordmark */
    .hj-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 30px;
    }

    .hj-brand-icon {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      background: var(--hj-step-bg);
      border: 1px solid rgba(11,40,22,0.10);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
      transition: background 0.55s;
    }

    .hj-brand-text {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: var(--hj-text);
      opacity: 0.7;
      line-height: 1.2;
    }

    .hj-brand-text span {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--hj-muted);
      letter-spacing: 0.05em;
    }

    /* Progress bar */
    .hj-progress {
      margin-bottom: 24px;
    }

    .hj-progress-track {
      height: 2px;
      background: rgba(11,40,22,0.08);
      border-radius: 99px;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .hj-progress-fill {
      height: 100%;
      background: var(--hj-step);
      border-radius: 99px;
      transition: width 0.5s cubic-bezier(.4,0,.2,1), background 0.55s;
    }

    .hj-progress-text {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--hj-muted);
      letter-spacing: 0.06em;
    }

    /* Sidebar sub-label */
    .hj-sidebar-sub {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--hj-muted);
      margin-bottom: 8px;
    }

    /* Step nav buttons */
    .hj-step-nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
    }

    .hj-nav-btn {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 8px 10px;
      border: none;
      background: transparent;
      color: var(--hj-muted);
      font-family: var(--hj-font);
      font-size: 0.9rem;
      font-weight: 400;
      border-radius: 8px;
      text-align: left;
      transition: all 0.18s;
      position: relative;
    }

    .hj-nav-btn:hover {
      background: rgba(11,40,22,0.05);
      color: var(--hj-text);
    }

    .hj-nav-btn.active {
      background: var(--hj-step-bg);
      color: var(--hj-step);
    }

    .hj-nav-btn.active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2.5px;
      height: 52%;
      background: var(--hj-step);
      border-radius: 99px;
    }

    .hj-nav-num {
      font-size: 0.8rem;
      font-weight: 700;
      opacity: 0.38;
      min-width: 16px;
      letter-spacing: 0.04em;
    }

    .hj-nav-btn.active .hj-nav-num {
      opacity: 0.9;
    }

    /* MAIN PANEL */
    .hj-main {
      position: relative;
      z-index: 10;
      grid-column: 2;
      grid-row: 1;
      display: flex;
      flex-direction: column;
       /*  justify-content: center; */
      padding: 52px 56px;
      overflow: hidden;
    }

    /* Giant background number */
    .hj-bg-num {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 260px;
      font-weight: 800;
      letter-spacing: -0.05em;
      color: var(--hj-step);
      opacity: 0.055;
      pointer-events: none;
      user-select: none;
      line-height: 1;
      z-index: 0;
      transition: color 0.55s;
    }

    /* Step content */
    .hj-step-content {
      position: relative;
      z-index: 1;
      max-width: 540px;
    }

    .hj-illustration {
      margin-bottom: 22px;
    }

    .hj-illustration svg,
    .hj-illustration img {
      width: 300px;
      height: 150px;
      object-fit: cover;
      border-radius: 12px;
      mix-blend-mode: multiply;
    }

    /* Step number chip */
    .hj-step-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px 3px 3px;
      background: var(--hj-step-bg);
      border: 1px solid rgba(11,40,22,0.10);
      border-radius: 99px;
      margin-bottom: 14px;
      transition: background 0.55s;
    }

    .hj-chip-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--hj-step);
      transition: background 0.55s;
      flex-shrink: 0;
    }

    .hj-chip-label {
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--hj-step);
      transition: color 0.55s;
    }

    .hj-step-title {
      font-size: clamp(2.5rem, 3.5vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.0;
      color: var(--hj-text);
      margin-bottom: 18px;
    }

    .hj-step-desc {
      font-size: 0.95rem;
      line-height: 1.75;
      color: rgba(11,28,16,0.6);
      font-weight: 400;
      max-width: 500px;
    }

    /* INFO PANEL */
    .hj-info {
      position: relative;
      z-index: 10;
      grid-column: 3;
      grid-row: 1;
      display: flex;
      flex-direction: column;
      padding: 32px 28px;
      border-left: 1px solid var(--hj-border);
      background: rgba(242,250,244,0.65);
      backdrop-filter: blur(28px);
      gap: 18px;
      overflow-y: auto;
      scrollbar-width: none;
    }

    .hj-info::-webkit-scrollbar {
      width: 0;
    }

    .hj-section-label {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--hj-muted);
    }

    /* Stat cards */
    .hj-stats {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .hj-stat {
      background: rgba(255,255,255,0.65);
      border: 1px solid var(--hj-border);
      border-radius: 10px;
      padding: 13px 15px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s cubic-bezier(.4,0,.2,1);
      outline: none;
    }

    .hj-stat:hover,
    .hj-stat:focus-visible {
      background: var(--hj-step-bg);
      transform: translateX(5px);
      z-index: 10;
    }

    .hj-stat-row {
      display: flex;
      align-items: baseline;
      gap: 7px;
      margin-bottom: 2px;
    }

    .hj-stat-val {
      font-size: 1.65rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--hj-step);
      line-height: 1;
      transition: color 0.55s;
    }

    .hj-stat-icon {
      font-size: 0.85rem; opacity: 0.55;
    }

    .hj-stat-lbl {
      font-size: 0.74rem;
      color: var(--hj-muted);
      font-weight: 400;
    }

    /* Tooltip, displays below the stat card */
    .hj-tooltip {
      position: absolute;
      top: calc(100% + 9px);
      left: 0;
      right: 0;
      background: #0D2018;
      border: 1px solid rgba(0,0,0,0.18);
      border-radius: 9px;
      padding: 10px 12px;
      font-size: 0.74rem;
      line-height: 1.55;
      color: #E8F5EE;
      z-index: 60;
      opacity: 0;
      transform: translateY(-7px);
      pointer-events: none;
      transition: all 0.18s cubic-bezier(.4,0,.2,1);
      box-shadow: 0 10px 32px rgba(0,0,0,0.55);
    }

    /* Arrow points upward */
    .hj-tooltip::after {
      content: '';
      position: absolute;
      top: -5px;
      left: 16px;
      width: 8px;
      height: 8px;
      background: #0D2018;
      border-left: 1px solid rgba(0,0,0,0.18);
      border-top: 1px solid rgba(0,0,0,0.18);
      transform: rotate(45deg);
    }

    .hj-stat:hover .hj-tooltip,
    .hj-stat:focus-visible .hj-tooltip {
      opacity: 1;
      transform: translateY(0);
    }

    /* Field Note (expandable) */
    .hj-field-note {
      position: relative;
      z-index: 0;
      background: var(--hj-step-bg);
      border: 1px solid rgba(11,40,22,0.10);
      border-radius: 10px;
      padding: 14px;
      cursor: pointer;
      user-select: none;
      transition: background 0.4s;
      outline: none;
    }

    .hj-field-note:focus-visible {
      outline: 2px solid var(--hj-step);
      outline-offset: 2px;
    }

    .hj-fn-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .hj-fn-tag {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--hj-step);
      transition: color 0.55s;
    }

    .hj-fn-toggle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background: rgba(11,40,22,0.07);
      color: var(--hj-muted);
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content:center;
      cursor: pointer;
      transition: all 0.22s;
      flex-shrink: 0;
      font-family: var(--hj-font);
    }

    .hj-field-note.open .hj-fn-toggle {
      background: var(--hj-step);
      color: var(--hj-bg);
      transform: rotate(45deg);
    }

    .hj-fn-body {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.35s cubic-bezier(.4,0,.2,1);
    }

    .hj-field-note.open .hj-fn-body {
      max-height: 200px;
    }

    .hj-fn-text {
      padding-top: 11px;
      font-size: 0.78rem;
      line-height: 1.65;
      color: rgba(11,28,16,0.68);
      /* font-style: italic;  */
      font-weight: 400;
    }

    /* Step badge (bottom of info panel) */
    .hj-step-badge {
      margin-top: auto;
      display: flex;
      align-items: baseline;
      gap: 5px;
    }

    .hj-badge-num {
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--hj-step);
      line-height: 1;
      transition: color 0.55s;
    }

    .hj-badge-of {
      font-size: 0.68rem;
      color: var(--hj-muted);
      font-weight: 500;
      padding-bottom: 3px;
    }

    /* BOTTOM NAV BAR */
    .hj-nav-bar {
      position: relative;
      z-index: 10;
      grid-column: 1 / 4;
      grid-row: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      border-top: 1px solid var(--hj-border);
      background: rgba(242,250,244,0.92);
      backdrop-filter: blur(20px);
    }

    /* Dots */
    .hj-dots {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .hj-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(11,40,22,0.15);
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(.4,0,.2,1);
      padding: 0;
    }

    .hj-dot.active {
      background: var(--hj-step);
      width: 20px;
      border-radius: 99px;
    }

    .hj-dot:hover:not(.active) {
      background: rgba(11,40,22,0.3);
    }

    /* Arrow buttons */
    .hj-arrow {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: rgba(11,40,22,0.05);
      border: 1px solid var(--hj-border);
      border-radius: 7px;
      color: var(--hj-text);
      font-family: var(--hj-font);
      font-size: 0.76rem;
      font-weight: 500;
      transition: all 0.18s;
    }

    .hj-arrow:hover:not(:disabled) {
      background: var(--hj-step-bg);
      border-color: rgba(11,40,22,0.18);
      color: var(--hj-step);
    }

    .hj-arrow:disabled {
      opacity: 0.25; cursor: not-allowed;
    }

    /* GSAP TARGETS */
    .hj-step-content,
    .hj-stats,
    .hj-field-note {
      will-change: transform, opacity;
    }

    /* TABLET VIEWPOINT */
    @media (min-width: 601px) and (max-width: 1024px) {
      .hj-root {
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr auto 52px;
      }

      .hj-sidebar {
        grid-column: 1;
        grid-row: 1;
        flex-direction: row;
        align-items: center;
        padding: 0 14px;
        gap: 10px;
        border-right: none;
        border-bottom: 1px solid var(--hj-border);
      }

      .hj-brand {
        margin-bottom: 0;
      }
      .hj-brand-text span {
        display: none;
      }
      .hj-sidebar-sub,
      .hj-step-nav {
        display: none;
      }

      .hj-progress {
        flex: 1;
        margin-bottom: 0;
      }

      .hj-main {
        grid-column: 1;
        grid-row: 2;
        padding: 22px 20px 10px;
        justify-content: flex-start;
      }

      .hj-bg-num {
        font-size: 130px; opacity: 0.05;
      }
      .hj-step-title {
        font-size: 2rem;
      }
      .hj-step-desc {
        font-size: 0.86rem;
      }
      .hj-illustration svg {
        width: 56px; height: 56px;
      }
      .hj-illustration {
        margin-bottom: 14px;
      }

      .hj-info {
        grid-column: 1;
        grid-row: 3;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 12px 14px;
        gap: 9px;
        border-left: none;
        border-top: 1px solid var(--hj-border);
      }

      .hj-section-label,
      .hj-step-badge {
        display: none;
      }

      .hj-stats {
        flex-direction: row;
        gap: 9px;
        flex-shrink: 0;
      }

      .hj-stat {
        min-width: 114px;
        flex-shrink:0;
      }

      .hj-tooltip {
        display: none;
      }
      .hj-field-note {
        display: none;
      }

      .hj-nav-bar {
        grid-column: 1;
        grid-row: 4;
      }
    }

    /* MOBILE VIEWPOINT */
    @media (max-width: 1024px) {
      .hj-root {
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr auto 52px;
      }

      .hj-sidebar {
        grid-column: 1;
        grid-row: 1;
        flex-direction: row;
        align-items: center;
        padding: 0 14px;
        gap: 10px;
        border-right: none;
        border-bottom: 1px solid var(--hj-border);
      }

      .hj-brand {
        margin-bottom: 0;
      }
      .hj-brand-text span {
        display: none;
      }
      .hj-sidebar-sub,
      .hj-step-nav {
        display: none;
      }

      .hj-progress {
        flex: 1;
        margin-bottom: 0;
      }

      .hj-main {
        grid-column: 1;
        grid-row: 2;
        padding: 22px 20px 10px;
        justify-content: flex-start;
      }

      .hj-bg-num {
        font-size: 130px; opacity: 0.05;
      }
      .hj-step-title {
        font-size: 2rem;
      }
      .hj-step-desc {
        font-size: 0.86rem;
      }
      .hj-illustration svg {
        width: 56px; height: 56px;
      }
      .hj-illustration {
        margin-bottom: 14px;
      }

      .hj-info {
        grid-column: 1;
        grid-row: 3;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 12px 14px;
        gap: 9px;
        border-left: none;
        border-top: 1px solid var(--hj-border);
      }

      .hj-section-label,
      .hj-step-badge {
        display: none;
      }

      .hj-stats {
        flex-direction: row;
        gap: 9px;
        flex-shrink: 0;
      }

      .hj-stat {
        min-width: 114px;
        flex-shrink: 0;
      }

      .hj-tooltip {
        display: none;
      }
      .hj-field-note {
        display: none;
      }

      .hj-nav-bar {
        grid-column:1;
        grid-row:   4;
      }
    }
  `;
}

// Component HTML

function getHTML(steps) {
	return `
    <div class="hj-root">
      <canvas class="hj-canvas" id="hj-canvas" aria-hidden="true"></canvas>

      <!-- SIDEBAR -->
      <aside class="hj-sidebar" role="navigation" aria-label="Lifecycle stages">
        <div class="hj-brand">
          <!-- <div class="hj-brand-icon" id="hj-brand-icon"></div> -->
          <div class="hj-brand-text">
            Heliconia
            <span>Lifecycle: 6 Stages</span>
          </div>
        </div>

        <div class="hj-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${steps.length}" aria-valuenow="1">
          <div class="hj-progress-track">
            <div class="hj-progress-fill" id="hj-progress-fill"></div>
          </div>
          <p class="hj-progress-text" id="hj-progress-text">Stage 1 of ${steps.length}</p>
        </div>

        <p class="hj-sidebar-sub">Stages</p>

        <nav class="hj-step-nav" id="hj-step-nav">
          ${steps
				.map(
					(s, i) => `
            <button
              class="hj-nav-btn${i === 0 ? " active" : ""}"
              data-step="${i}"
              aria-label="Go to ${s.title}"
              aria-pressed="${i === 0}"
            >
              <span class="hj-nav-num">${s.number}</span>
              <span>${s.title}</span>
            </button>
          `,
				)
				.join("")}
        </nav>
      </aside>

      <!-- MAIN -->
      <main class="hj-main" aria-live="polite" aria-atomic="true">
        <div class="hj-blob" id="hj-blob" aria-hidden="true"></div>
        <div class="hj-bg-num" id="hj-bg-num" aria-hidden="true">01</div>

        <div class="hj-step-content" id="hj-step-content">
          <div class="hj-illustration" id="hj-illustration" aria-hidden="true"></div>
          <div class="hj-step-chip" id="hj-step-chip">
            <div class="hj-chip-dot" id="hj-chip-dot"></div>
            <span class="hj-chip-label" id="hj-chip-label"></span>
          </div>
          <h2 class="hj-step-title" id="hj-step-title"></h2>
          <p  class="hj-step-desc"  id="hj-step-desc"></p>
        </div>
      </main>

      <!-- INFO PANEL -->
      <aside class="hj-info" aria-label="Stage details">
        <p class="hj-section-label">Key Facts</p>

        <div class="hj-stats" id="hj-stats" role="list"></div>

        <div
          class="hj-field-note"
          id="hj-fn"
          role="button"
          tabindex="0"
          aria-expanded="false"
          aria-label="Expand Field Note"
        >
          <div class="hj-fn-header">
            <span class="hj-fn-tag">Field Note</span>
            <button class="hj-fn-toggle" id="hj-fn-toggle" tabindex="-1" aria-label="Toggle">+</button>
          </div>
          <div class="hj-fn-body" id="hj-fn-body">
            <p class="hj-fn-text" id="hj-fn-text"></p>
          </div>
        </div>

        <div class="hj-step-badge" aria-hidden="true">
          <span class="hj-badge-num" id="hj-badge-num">01</span>
          <span class="hj-badge-of">/ ${String(steps.length).padStart(2, "0")}</span>
        </div>
      </aside>

      <!-- NAV BAR -->
      <nav class="hj-nav-bar" aria-label="Stage navigation">
        <button class="hj-arrow" id="hj-prev" aria-label="Previous stage" disabled>← Prev</button>

        <div class="hj-dots" id="hj-dots" role="tablist">
          ${steps
				.map(
					(s, i) => `
            <button
              class="hj-dot${i === 0 ? " active" : ""}"
              data-step="${i}"
              role="tab"
              aria-selected="${i === 0}"
              aria-label="${s.title}"
            ></button>
          `,
				)
				.join("")}
        </div>

        <button class="hj-arrow" id="hj-next" aria-label="Next stage">Next →</button>
      </nav>
    </div>
  `;
}

// Web Component

class HeliconiaJourney extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({
			mode: "open",
		});
		this._step = 0;
		this._animating = false;
		this._direction = 1;
		this._touchX = 0;

		// THREE.js parameters
		this._renderer = null;
		this._scene = null;
		this._camera = null;
		this._particles = null;
		this._rafId = null;
		this._pVels = null;
		this._targetCol = null;
		this._currentCol = null;
		this._pCount = 0;
	}

	connectedCallback() {
		const style = document.createElement("style");
		style.textContent = getCSS();
		this.shadowRoot.appendChild(style);

		const tpl = document.createElement("div");
		tpl.innerHTML = getHTML(STEPS);
		this.shadowRoot.appendChild(tpl.firstElementChild);

		this._setupThree();
		this._bindEvents();
		this._applyStep(0, false);
		this._introAnimation();
	}

	disconnectedCallback() {
		if (this._rafId) cancelAnimationFrame(this._rafId);
		if (this._renderer) this._renderer.dispose();
		if (this._ro) this._ro.disconnect();
	}

	// THREE.js codes

	_setupThree() {
		if (typeof THREE === "undefined") return;

		const canvas = this.shadowRoot.getElementById("hj-canvas");
		const W = this.offsetWidth || 1440;
		const H = this.offsetHeight || 900;

		this._renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: false,
		});
		this._renderer.setSize(W, H);
		this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		this._scene = new THREE.Scene();
		this._camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100);
		this._camera.position.z = 6;

		this._buildParticles();

		const tick = () => {
			this._rafId = requestAnimationFrame(tick);
			this._tickParticles();
			this._renderer.render(this._scene, this._camera);
		};
		tick();

		this._ro = new ResizeObserver(() => {
			const w = this.offsetWidth,
				h = this.offsetHeight;
			if (w > 0 && h > 0) {
				this._renderer.setSize(w, h);
				this._camera.aspect = w / h;
				this._camera.updateProjectionMatrix();
			}
		});
		this._ro.observe(this);
	}

	/* PARTICLES */
	_buildParticles() {
		const N = 350;
		const geo = new THREE.BufferGeometry();
		const pos = new Float32Array(N * 3);
		const sz = new Float32Array(N);
		const vels = new Float32Array(N * 3);

		for (let i = 0; i < N; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 18;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

			// Velocity settings
			vels[i * 3] = (Math.random() - 0.5) * 0.004;
			vels[i * 3 + 1] = Math.random() * 0.006 + 0.0012;
			vels[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

			sz[i] = Math.random() * 2.8 + 0.6;
		}

		geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
		geo.setAttribute("size", new THREE.BufferAttribute(sz, 1));

		this._pVels = vels;
		this._pCount = N;

		const c = STEPS[0].threeColor;
		const mat = new THREE.PointsMaterial({
			size: 0.07,
			color: new THREE.Color(c.r, c.g, c.b),
			transparent: true,
			opacity: 0.18,
			sizeAttenuation: true,
		});

		this._particles = new THREE.Points(geo, mat);
		this._scene.add(this._particles);

		this._targetCol = new THREE.Color(c.r, c.g, c.b);
		this._currentCol = new THREE.Color(c.r, c.g, c.b);
	}

	_tickParticles() {
		if (!this._particles) return;

		const pos = this._particles.geometry.attributes.position.array;
		const vel = this._pVels;
		const N = this._pCount;

		for (let i = 0; i < N; i++) {
			pos[i * 3] += vel[i * 3];
			pos[i * 3 + 1] += vel[i * 3 + 1];
			pos[i * 3 + 2] += vel[i * 3 + 2];

			// Wrap vertically
			if (pos[i * 3 + 1] > 6.5) {
				pos[i * 3] = (Math.random() - 0.5) * 18;
				pos[i * 3 + 1] = -6.5;
				pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
			}
		}

		this._particles.geometry.attributes.position.needsUpdate = true;
		this._particles.rotation.y += 0.0002;

		// Smooth colour lerp
		this._currentCol.lerp(this._targetCol, 0.015);
		this._particles.material.color.copy(this._currentCol);

		// Ambient shimmer, random particles briefly brighten
		if (Math.random() < 0.04) {
			const i = Math.floor(Math.random() * this._pCount);
			this._pVels[i * 3 + 1] *= 1.08;
		}
	}

	_burstParticles() {
		if (!this._particles || typeof gsap === "undefined") return;
		const mat = this._particles.material;
		gsap.fromTo(
			mat,
			{
				opacity: 0.42,
			},
			{
				opacity: 0.18,
				duration: 1.4,
				ease: "power2.out",
			},
		);
		for (let i = 0; i < this._pCount; i++) this._pVels[i * 3 + 1] *= 3.5;
		setTimeout(() => {
			for (let i = 0; i < this._pCount; i++) {
				this._pVels[i * 3 + 1] = Math.random() * 0.006 + 0.0012;
			}
		}, 450);
	}

	// Events

	_bindEvents() {
		const root = this.shadowRoot;

		root.getElementById("hj-step-nav").addEventListener("click", (e) => {
			const b = e.target.closest(".hj-nav-btn");
			if (b) this._navigate(parseInt(b.dataset.step));
		});

		root.getElementById("hj-dots").addEventListener("click", (e) => {
			const d = e.target.closest(".hj-dot");
			if (d) this._navigate(parseInt(d.dataset.step));
		});

		root.getElementById("hj-prev").addEventListener("click", () =>
			this._navigate(this._step - 1),
		);
		root.getElementById("hj-next").addEventListener("click", () =>
			this._navigate(this._step + 1),
		);

		// Field note expand
		const fn = root.getElementById("hj-fn");
		const toggle = () => {
			const open = fn.classList.toggle("open");
			fn.setAttribute("aria-expanded", String(open));
		};
		fn.addEventListener("click", toggle);
		fn.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggle();
			}
		});
		root.getElementById("hj-fn-toggle").addEventListener("click", (e) =>
			e.stopPropagation(),
		);

		// Mobile tap for tooltip
		root.getElementById("hj-stats").addEventListener("click", (e) => {
			const card = e.target.closest(".hj-stat");
			if (!card) return;
			const already = card.classList.contains("tapped");
			root.querySelectorAll(".hj-stat.tapped").forEach((c) =>
				c.classList.remove("tapped"),
			);
			if (!already) card.classList.add("tapped");
		});

		// Keyboard
		this.setAttribute("tabindex", "0");
		this.addEventListener("keydown", (e) => {
			if (e.key === "ArrowRight" || e.key === "ArrowDown") {
				e.preventDefault();
				this._navigate(this._step + 1);
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
				e.preventDefault();
				this._navigate(this._step - 1);
			}
		});

		// Touch swipe
		this.addEventListener(
			"touchstart",
			(e) => {
				this._touchX = e.touches[0].clientX;
			},
			{
				passive: true,
			},
		);
		this.addEventListener("touchend", (e) => {
			const dx = e.changedTouches[0].clientX - this._touchX;
			if (Math.abs(dx) > 50)
				this._navigate(dx < 0 ? this._step + 1 : this._step - 1);
		});
	}

	// Navigation settings

	_navigate(index) {
		if (this._animating) return;
		if (index < 0) return;
		if (index >= STEPS.length) return;
		if (index === this._step) return;
		this._direction = index > this._step ? 1 : -1;
		this._step = index;
		this._applyStep(index, true);
	}

	// Applying steps

	_applyStep(index, animate) {
		const step = STEPS[index];
		const root = this.shadowRoot;
		const hjRoot = root.querySelector(".hj-root");

		/* CSS vars */
		hjRoot.style.setProperty("--hj-step", step.color);
		hjRoot.style.setProperty(
			"--hj-step-bg",
			`rgba(${step.colorRgb}, 0.09)`,
		);
		hjRoot.style.setProperty(
			"--hj-step-glow",
			`rgba(${step.colorRgb}, 0.18)`,
		);

		/* Nav UI */
		root.querySelectorAll(".hj-nav-btn").forEach((b, i) => {
			const a = i === index;
			b.classList.toggle("active", a);
			b.setAttribute("aria-pressed", String(a));
		});
		root.querySelectorAll(".hj-dot").forEach((d, i) => {
			const a = i === index;
			d.classList.toggle("active", a);
			d.setAttribute("aria-selected", String(a));
		});

		const pct = ((index + 1) / STEPS.length) * 100;
		root.getElementById("hj-progress-fill").style.width = `${pct}%`;
		root.getElementById("hj-progress-text").textContent =
			`Stage ${index + 1} of ${STEPS.length}`;
		root.querySelector(".hj-progress").setAttribute(
			"aria-valuenow",
			String(index + 1),
		);

		root.getElementById("hj-prev").disabled = index === 0;
		root.getElementById("hj-next").disabled = index === STEPS.length - 1;

		/* THREE colour */
		const c = step.threeColor;
		if (this._targetCol) this._targetCol.setRGB(c.r, c.g, c.b);
		if (animate) this._burstParticles();

		if (!animate || typeof gsap === "undefined") {
			this._injectContent(step);
			return;
		}

		this._animating = true;
		const content = root.getElementById("hj-step-content");
		const stats = root.getElementById("hj-stats");
		const fn = root.getElementById("hj-fn");
		const dir = this._direction;

		gsap.to(content, {
			opacity: 0,
			x: dir * -38,
			duration: 0.28,
			ease: "power2.in",
			onComplete: () => {
				this._injectContent(step);
				gsap.fromTo(
					content,
					{
						opacity: 0,
						x: dir * 42,
					},
					{
						opacity: 1,
						x: 0,
						duration: 0.42,
						ease: "power2.out",
						onComplete: () => {
							this._animating = false;
						},
					},
				);
				gsap.fromTo(
					root.querySelectorAll(".hj-stat"),
					{
						opacity: 0,
						y: 16,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.38,
						stagger: 0.08,
						ease: "power2.out",
						delay: 0.1,
					},
				);
				gsap.fromTo(
					fn,
					{
						opacity: 0,
					},
					{
						opacity: 1,
						duration: 0.42,
						delay: 0.25,
						ease: "power2.out",
					},
				);
			},
		});

		gsap.fromTo(
			stats,
			{
				opacity: 0,
				y: 10,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.4,
				ease: "power2.out",
				delay: 0.12,
			},
		);
	}

	_injectContent(step) {
		const root = this.shadowRoot;

		root.getElementById("hj-bg-num").textContent = step.number;
		root.getElementById("hj-illustration").innerHTML =
			ILLUSTRATIONS[step.id] || "";
		root.getElementById("hj-chip-label").textContent = step.subtitle;
		root.getElementById("hj-step-title").textContent = step.title;
		root.getElementById("hj-step-desc").textContent = step.description;
		root.getElementById("hj-fn-text").textContent = step.highlight;
		root.getElementById("hj-badge-num").textContent = step.number;

		const fn = root.getElementById("hj-fn");
		// Field Note opens by default
		fn.classList.add("open");
		fn.setAttribute("aria-expanded", "true");

		root.getElementById("hj-stats").innerHTML = step.stats
			.map(
				(s) => `
      <div class="hj-stat" tabindex="0" role="listitem" aria-label="${s.value} - ${s.label}">
        <div class="hj-tooltip">${s.detail}</div>
        <div class="hj-stat-row">
          <span class="hj-stat-val">${s.value}</span>
          <span class="hj-stat-icon">${s.icon}</span>
        </div>
        <p class="hj-stat-lbl">${s.label}</p>
      </div>
    `,
			)
			.join("");
	}

	// Introduction animations

	_introAnimation() {
		if (typeof gsap === "undefined") return;

		const root = this.shadowRoot;
		const tl = gsap.timeline({
			delay: 0.08,
		});

		tl.fromTo(
			root.querySelector(".hj-sidebar"),
			{
				opacity: 0,
				x: -18,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.55,
				ease: "power2.out",
			},
			0,
		)
			.fromTo(
				root.querySelector(".hj-main"),
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.65,
					ease: "power2.out",
				},
				0.08,
			)
			.fromTo(
				root.querySelector(".hj-info"),
				{
					opacity: 0,
					x: 18,
				},
				{
					opacity: 1,
					x: 0,
					duration: 0.55,
					ease: "power2.out",
				},
				0.12,
			)
			.fromTo(
				root.querySelector(".hj-nav-bar"),
				{
					opacity: 0,
					y: 8,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.45,
					ease: "power2.out",
				},
				0.22,
			)
			.fromTo(
				root.querySelectorAll(".hj-stat"),
				{
					opacity: 0,
					y: 12,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.38,
					stagger: 0.07,
					ease: "power2.out",
				},
				0.42,
			);
	}
}

customElements.define("heliconia-journey", HeliconiaJourney);
