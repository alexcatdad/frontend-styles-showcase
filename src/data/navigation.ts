import type { Locale } from "./i18n";
import { ui } from "./i18n";

export interface NavItem {
	label: string;
	href: string;
}

export function getNavigation(lang: Locale, style: string): NavItem[] {
	const t = ui[lang].nav;
	return [
		{ label: t.home, href: `/${lang}/${style}/` },
		{ label: t.cats, href: `/${lang}/${style}/cats` },
		{ label: t.blog, href: `/${lang}/${style}/blog` },
		{ label: t.donate, href: `/${lang}/${style}/donate` },
		{ label: t.login, href: `/${lang}/${style}/auth` },
	];
}
