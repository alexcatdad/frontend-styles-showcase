import { chromium } from "playwright";

const styles = [
	"minimalism",
	"flat",
	"brutalism",
	"neumorphism",
	"glassmorphism",
	"editorial",
	"swiss",
	"bauhaus",
	"retro-80s",
	"retro-90s",
	"y2k",
	"skeuomorphism",
	"vaporwave",
	"dark-first",
	"data-dense",
	"anti-design",
	"maximalism",
	"grunge",
	"punk",
];

const PORT = process.env.PORT || "4321";
const BASE = `http://localhost:${PORT}`;

async function main() {
	const browser = await chromium.launch();
	const context = await browser.newContext({
		viewport: { width: 1280, height: 800 },
		deviceScaleFactor: 2,
	});

	for (const style of styles) {
		const page = await context.newPage();
		const url = `${BASE}/en/${style}/`;
		console.log(`Capturing ${style}...`);
		await page.goto(url, { waitUntil: "networkidle" });
		await page.screenshot({
			path: `public/previews/${style}.png`,
			clip: { x: 0, y: 0, width: 1280, height: 800 },
		});
		await page.close();
	}

	await browser.close();
	console.log(`Done — ${styles.length} screenshots captured.`);
}

main();
