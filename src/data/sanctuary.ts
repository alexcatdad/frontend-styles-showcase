import type { Locale } from "./i18n";

interface SanctuaryData {
	name: string;
	tagline: string;
	mission: string;
	about: string[];
	stats: { label: string; value: string }[];
	contact: { email: string; phone: string; address: string };
	heroImage: string;
}

const _base = import.meta.env.BASE_URL.replace(/\/$/, "");

const _sanctuary: Record<Locale, SanctuaryData> = {
	en: {
		name: "Whisker Haven",
		tagline: "Every cat deserves a loving home",
		heroImage: "/images/hero/hero-1.jpg",
		mission:
			"Whisker Haven is a no-kill cat sanctuary dedicated to rescuing, rehabilitating, and rehoming cats in need. Since 2019, we've found forever homes for over 2,000 cats.",
		about: [
			"Founded by a group of passionate animal lovers, Whisker Haven started as a small foster network and grew into a full-service sanctuary. We take in cats from all backgrounds — strays, surrenders, and rescues from overcrowded shelters.",
			"Our team of veterinarians, behaviorists, and volunteers work together to ensure every cat receives the medical care, socialization, and love they need to thrive.",
			"We believe in transparent operations and community involvement. Every donation goes directly to cat care — food, medical treatment, spay/neuter programs, and facility improvements.",
		],
		stats: [
			{ label: "Cats Adopted", value: "2,147" },
			{ label: "Current Residents", value: "83" },
			{ label: "Volunteers", value: "120+" },
			{ label: "Years Active", value: "7" },
		],
		contact: {
			email: "hello@whiskerhaven.org",
			phone: "(555) CAT-LOVE",
			address: "742 Purrington Lane, Catsville, CA 90210",
		},
	},
	ro: {
		name: "Whisker Haven",
		tagline: "Fiecare pisică merită o casă iubitoare",
		heroImage: "/images/hero/hero-1.jpg",
		mission:
			"Whisker Haven este un sanctuar fără eutanasiere dedicat salvării, recuperării și găsirii de case pentru pisicile aflate în nevoie. Din 2019, am găsit case permanente pentru peste 2.000 de pisici.",
		about: [
			"Fondat de un grup de iubitori pasionați de animale, Whisker Haven a început ca o mică rețea de plasament temporar și a crescut într-un sanctuar complet. Primim pisici din toate mediile — pisici de stradă, predări și salvări din adăposturi supraaglomerate.",
			"Echipa noastră de veterinari, specialiști în comportament și voluntari lucrează împreună pentru a se asigura că fiecare pisică primește îngrijirea medicală, socializarea și dragostea de care are nevoie pentru a prospera.",
			"Credem în operațiuni transparente și implicarea comunității. Fiecare donație merge direct către îngrijirea pisicilor — hrană, tratament medical, programe de sterilizare și îmbunătățiri ale facilităților.",
		],
		stats: [
			{ label: "Pisici Adoptate", value: "2.147" },
			{ label: "Rezidenți Actuali", value: "83" },
			{ label: "Voluntari", value: "120+" },
			{ label: "Ani de Activitate", value: "7" },
		],
		contact: {
			email: "hello@whiskerhaven.org",
			phone: "(555) CAT-LOVE",
			address: "742 Purrington Lane, Catsville, CA 90210",
		},
	},
};

export const sanctuary: Record<Locale, SanctuaryData> = Object.fromEntries(
	Object.entries(_sanctuary).map(([k, v]) => [
		k,
		{ ...v, heroImage: `${_base}${v.heroImage}` },
	]),
) as Record<Locale, SanctuaryData>;
