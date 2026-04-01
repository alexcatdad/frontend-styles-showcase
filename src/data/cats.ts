import type { Locale } from "./i18n";

export interface Cat {
	id: string;
	name: string;
	breed: string;
	age: string;
	gender: string;
	color: string;
	personality: string[];
	description: string;
	status: string;
	arrivalDate: string;
	image: string;
	thumbnail: string;
}

const en: Cat[] = [
	{
		id: "luna",
		name: "Luna",
		breed: "Russian Blue",
		age: "3 years",
		gender: "Female",
		color: "Silver-grey",
		personality: ["Gentle", "Curious", "Lap cat"],
		description:
			"Luna is a graceful silver-grey beauty who loves nothing more than curling up in a warm lap with a good purr. She's gentle with children and gets along well with other cats.",
		status: "Available",
		arrivalDate: "2025-11-15",
	},
	{
		id: "mochi",
		name: "Mochi",
		breed: "Scottish Fold",
		age: "2 years",
		gender: "Male",
		color: "Cream tabby",
		personality: ["Playful", "Vocal", "Adventurous"],
		description:
			"Mochi is a round-faced charmer with folded ears and an opinion about everything. He'll follow you around the house chatting and loves interactive toys.",
		status: "Available",
		arrivalDate: "2025-12-03",
	},
	{
		id: "shadow",
		name: "Shadow",
		breed: "Domestic Shorthair",
		age: "5 years",
		gender: "Male",
		color: "Black",
		personality: ["Independent", "Calm", "Night owl"],
		description:
			"Shadow is a sleek black cat with golden eyes who's mastered the art of appearing out of nowhere. He's independent but shows affection on his own terms — usually at 3 AM.",
		status: "Available",
		arrivalDate: "2025-09-20",
	},
	{
		id: "biscuit",
		name: "Biscuit",
		breed: "Orange Tabby",
		age: "1 year",
		gender: "Male",
		color: "Orange",
		personality: ["Friendly", "Clumsy", "Food-motivated"],
		description:
			"Biscuit lives up to his name — he's warm, soft, and always ready for treats. This goofy orange boy trips over his own paws and has never met a stranger.",
		status: "Pending",
		arrivalDate: "2026-01-10",
	},
	{
		id: "cleo",
		name: "Cleo",
		breed: "Siamese",
		age: "4 years",
		gender: "Female",
		color: "Seal point",
		personality: ["Regal", "Intelligent", "Talkative"],
		description:
			"Cleo carries herself like the queen she is. This striking Siamese has piercing blue eyes and will hold entire conversations with you. She prefers to be the only cat in the household.",
		status: "Available",
		arrivalDate: "2025-10-08",
	},
	{
		id: "nugget",
		name: "Nugget",
		breed: "Munchkin",
		age: "2 years",
		gender: "Female",
		color: "Golden",
		personality: ["Energetic", "Affectionate", "Mischievous"],
		description:
			"Don't let her short legs fool you — Nugget can get into anything. This tiny golden dynamo will steal your heart and probably your socks.",
		status: "Available",
		arrivalDate: "2026-02-14",
	},
	{
		id: "zen",
		name: "Zen",
		breed: "Ragdoll",
		age: "6 years",
		gender: "Male",
		color: "Blue bicolor",
		personality: ["Relaxed", "Gentle", "Patient"],
		description:
			"True to his name and breed, Zen goes completely limp when picked up. He's the most laid-back cat you'll ever meet — perfect for a quiet household.",
		status: "Available",
		arrivalDate: "2025-08-22",
	},
	{
		id: "pixel",
		name: "Pixel",
		breed: "Bengal",
		age: "1 year",
		gender: "Female",
		color: "Spotted brown",
		personality: ["Athletic", "Smart", "Demanding"],
		description:
			"Pixel is a miniature leopard with the energy to match. She needs an experienced cat owner who can keep up with her acrobatics and puzzle-solving abilities.",
		status: "Available",
		arrivalDate: "2026-03-01",
	},
];

const ro: Cat[] = [
	{
		id: "luna",
		name: "Luna",
		breed: "Albastru Rusesc",
		age: "3 ani",
		gender: "Femelă",
		color: "Gri-argintiu",
		personality: ["Blândă", "Curioasă", "Pisică de poală"],
		description:
			"Luna este o frumusețe gri-argintie grațioasă care adoră să se ghemulească într-o poală caldă cu un tors plăcut. Este blândă cu copiii și se înțelege bine cu alte pisici.",
		status: "Disponibilă",
		arrivalDate: "2025-11-15",
	},
	{
		id: "mochi",
		name: "Mochi",
		breed: "Scottish Fold",
		age: "2 ani",
		gender: "Mascul",
		color: "Tabby crem",
		personality: ["Jucăuș", "Vocal", "Aventuros"],
		description:
			"Mochi este un fermecător cu fața rotundă, urechi pliate și o opinie despre orice. Te va urma prin casă vorbind și adoră jucăriile interactive.",
		status: "Disponibil",
		arrivalDate: "2025-12-03",
	},
	{
		id: "shadow",
		name: "Shadow",
		breed: "Domestic cu păr scurt",
		age: "5 ani",
		gender: "Mascul",
		color: "Negru",
		personality: ["Independent", "Calm", "Nocturn"],
		description:
			"Shadow este o pisică neagră elegantă cu ochi aurii care a perfecționat arta de a apărea de nicăieri. Este independent dar își arată afecțiunea în propriii termeni — de obicei la 3 dimineața.",
		status: "Disponibil",
		arrivalDate: "2025-09-20",
	},
	{
		id: "biscuit",
		name: "Biscuit",
		breed: "Tabby Portocaliu",
		age: "1 an",
		gender: "Mascul",
		color: "Portocaliu",
		personality: ["Prietenos", "Stângaci", "Motivat de mâncare"],
		description:
			"Biscuit își face cinste numelui — este cald, moale și mereu pregătit pentru gustări. Acest băiețel portocaliu amuzant se împiedică de propriile lăbuțe și nu a întâlnit niciodată un străin.",
		status: "În așteptare",
		arrivalDate: "2026-01-10",
	},
	{
		id: "cleo",
		name: "Cleo",
		breed: "Siameză",
		age: "4 ani",
		gender: "Femelă",
		color: "Seal point",
		personality: ["Regală", "Inteligentă", "Vorbăreață"],
		description:
			"Cleo se poartă ca regina care este. Această siameză impresionantă are ochi albaștri pătrunzători și va purta conversații întregi cu tine. Preferă să fie singura pisică din gospodărie.",
		status: "Disponibilă",
		arrivalDate: "2025-10-08",
	},
	{
		id: "nugget",
		name: "Nugget",
		breed: "Munchkin",
		age: "2 ani",
		gender: "Femelă",
		color: "Auriu",
		personality: ["Energică", "Afectuoasă", "Obraznică"],
		description:
			"Nu te lăsa păcălit de picioarele ei scurte — Nugget poate ajunge oriunde. Această mică dinamită aurie îți va fura inima și probabil și șosetele.",
		status: "Disponibilă",
		arrivalDate: "2026-02-14",
	},
	{
		id: "zen",
		name: "Zen",
		breed: "Ragdoll",
		age: "6 ani",
		gender: "Mascul",
		color: "Bicolor albastru",
		personality: ["Relaxat", "Blând", "Răbdător"],
		description:
			"Fidel numelui și rasei sale, Zen devine complet moale când este ridicat. Este cea mai relaxată pisică pe care o vei întâlni vreodată — perfectă pentru o gospodărie liniștită.",
		status: "Disponibil",
		arrivalDate: "2025-08-22",
	},
	{
		id: "pixel",
		name: "Pixel",
		breed: "Bengal",
		age: "1 an",
		gender: "Femelă",
		color: "Maro cu pete",
		personality: ["Atletică", "Deșteaptă", "Pretențioasă"],
		description:
			"Pixel este un leopard în miniatură cu energia pe măsură. Are nevoie de un stăpân experimentat care să țină pasul cu acrobațiile și abilitățile ei de rezolvare a puzzle-urilor.",
		status: "Disponibilă",
		arrivalDate: "2026-03-01",
	},
];

/** Images are locale-independent — map by cat ID */
const catImages: Record<string, { image: string; thumbnail: string }> = {
	luna: {
		image: "/images/cats/cat-1.jpg",
		thumbnail: "/images/cats/thumb-1.jpg",
	},
	mochi: {
		image: "/images/cats/cat-2.jpg",
		thumbnail: "/images/cats/thumb-2.jpg",
	},
	shadow: {
		image: "/images/cats/cat-3.jpg",
		thumbnail: "/images/cats/thumb-3.jpg",
	},
	biscuit: {
		image: "/images/cats/cat-4.jpg",
		thumbnail: "/images/cats/thumb-4.jpg",
	},
	cleo: {
		image: "/images/cats/cat-5.jpg",
		thumbnail: "/images/cats/thumb-5.jpg",
	},
	nugget: {
		image: "/images/cats/cat-6.jpg",
		thumbnail: "/images/cats/thumb-6.jpg",
	},
	zen: {
		image: "/images/cats/cat-7.jpg",
		thumbnail: "/images/cats/thumb-7.jpg",
	},
	pixel: {
		image: "/images/cats/cat-8.jpg",
		thumbnail: "/images/cats/thumb-8.jpg",
	},
};

function withImages(list: Omit<Cat, "image" | "thumbnail">[]): Cat[] {
	return list.map((c) => ({
		...c,
		...catImages[c.id],
	})) as Cat[];
}

export const cats: Record<Locale, Cat[]> = {
	en: withImages(en),
	ro: withImages(ro),
};

export const catIds = en.map((c) => c.id);

export function getCat(lang: Locale, id: string): Cat | undefined {
	return cats[lang].find((c) => c.id === id);
}
