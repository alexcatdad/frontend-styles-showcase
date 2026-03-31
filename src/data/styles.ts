export interface StyleMeta {
	slug: string;
	name: string;
	category: string;
	description: string;
}

export const styles: StyleMeta[] = [
	{
		slug: "minimalism",
		name: "Minimalism",
		category: "Core Modern",
		description: "Whitespace-heavy, limited color palette, typography focus",
	},
	{
		slug: "flat",
		name: "Flat Design",
		category: "Core Modern",
		description: "Clean lines, bright colors, no gradients or shadows",
	},
	{
		slug: "brutalism",
		name: "Brutalism",
		category: "Core Modern",
		description: "Raw HTML feel, harsh typography, anti-UX patterns",
	},
	{
		slug: "neumorphism",
		name: "Neumorphism",
		category: "Core Modern",
		description: "Soft shadows, extruded UI elements, monochromatic palette",
	},
	{
		slug: "glassmorphism",
		name: "Glassmorphism",
		category: "Core Modern",
		description: "Blur backgrounds, transparency layers, soft borders",
	},
	{
		slug: "editorial",
		name: "Editorial",
		category: "Typography-first",
		description: "Magazine-inspired layouts, strong typographic hierarchy",
	},
	{
		slug: "swiss",
		name: "Swiss International",
		category: "Typography-first",
		description: "Strict grid, sans-serif typography, alignment precision",
	},
	{
		slug: "bauhaus",
		name: "Bauhaus",
		category: "Typography-first",
		description: "Geometric shapes, primary colors, functional aesthetics",
	},
	{
		slug: "retro-80s",
		name: "Retro 80s",
		category: "Nostalgia-driven",
		description: "Neon colors, chrome effects, synthwave vibes",
	},
	{
		slug: "retro-90s",
		name: "Retro 90s",
		category: "Nostalgia-driven",
		description: "Web 1.0 aesthetics, tiled backgrounds, pixel art",
	},
	{
		slug: "y2k",
		name: "Y2K",
		category: "Nostalgia-driven",
		description: "Futuristic chrome, bubble shapes, iridescent gradients",
	},
	{
		slug: "skeuomorphism",
		name: "Skeuomorphism",
		category: "Nostalgia-driven",
		description: "Realistic textures, depth, physical material mimicry",
	},
	{
		slug: "vaporwave",
		name: "Vaporwave",
		category: "Nostalgia-driven",
		description: "Pastel gradients, retro-futurism, glitch aesthetics",
	},
	{
		slug: "dark-first",
		name: "Dark-First Design",
		category: "Emerging",
		description: "Dark backgrounds, high contrast, reduced eye strain",
	},
	{
		slug: "data-dense",
		name: "Data-Dense UI",
		category: "Emerging",
		description: "Information-rich, compact layouts, dashboard-inspired",
	},
	{
		slug: "anti-design",
		name: "Anti-Design",
		category: "Expressive",
		description: "Rule-breaking layouts, clashing colors, deliberate chaos",
	},
	{
		slug: "maximalism",
		name: "Maximalism",
		category: "Expressive",
		description: "Bold patterns, rich textures, layered visual complexity",
	},
	{
		slug: "grunge",
		name: "Grunge",
		category: "Expressive",
		description: "Distressed textures, rough edges, underground aesthetics",
	},
	{
		slug: "punk",
		name: "Punk DIY",
		category: "Expressive",
		description: "Cut-and-paste collage, zine aesthetics, raw energy",
	},
];

export const styleSlugs = styles.map((s) => s.slug);

export function getStyle(slug: string): StyleMeta | undefined {
	return styles.find((s) => s.slug === slug);
}
