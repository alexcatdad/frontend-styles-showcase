import type { Locale } from "./i18n";
import { ui } from "./i18n";

export interface NavItem {
	label: string;
	href: string;
}

/** Base path from Astro config — available at build time via import.meta.env */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prepend the base path to any internal link */
export function href(path: string): string {
	return `${base}${path}`;
}

export function getNavigation(lang: Locale, style: string): NavItem[] {
	const t = ui[lang].nav;
	return [
		{ label: t.home, href: href(`/${lang}/${style}/`) },
		{ label: t.cats, href: href(`/${lang}/${style}/cats`) },
		{ label: t.blog, href: href(`/${lang}/${style}/blog`) },
		{ label: t.donate, href: href(`/${lang}/${style}/donate`) },
		{ label: t.login, href: href(`/${lang}/${style}/auth`) },
	];
}
