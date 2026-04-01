// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://alexcatdad.github.io",
	base: "/frontend-styles-showcase",
	server: {
		port: Number(process.env.PORT) || 4321,
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
	},
});
