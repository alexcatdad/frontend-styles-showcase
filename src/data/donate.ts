import type { Locale } from "./i18n";

export interface DonationTier {
	id: string;
	name: string;
	amount: number;
	frequency: "one-time" | "monthly";
	description: string;
	perks: string[];
	highlighted: boolean;
}

const enMonthly: DonationTier[] = [
	{
		id: "kibble",
		name: "Kibble Friend",
		amount: 10,
		frequency: "monthly",
		description: "Cover a cat's food for a month",
		perks: ["Monthly email update", "Name on our donor wall"],
		highlighted: false,
	},
	{
		id: "catnip",
		name: "Catnip Champion",
		amount: 25,
		frequency: "monthly",
		description: "Food, toys, and enrichment for one cat",
		perks: [
			"Everything in Kibble Friend",
			"Quarterly photo of a sponsored cat",
			"10% off sanctuary merch",
		],
		highlighted: false,
	},
	{
		id: "guardian",
		name: "Cat Guardian",
		amount: 50,
		frequency: "monthly",
		description: "Full care for one sanctuary resident",
		perks: [
			"Everything in Catnip Champion",
			"Choose a cat to sponsor by name",
			"Monthly video updates of your cat",
			"Invitation to private sanctuary tours",
		],
		highlighted: true,
	},
	{
		id: "hero",
		name: "Sanctuary Hero",
		amount: 100,
		frequency: "monthly",
		description: "Help fund veterinary care and operations",
		perks: [
			"Everything in Cat Guardian",
			"Annual thank-you gift",
			"Recognition at events",
			"Input on sanctuary naming decisions",
		],
		highlighted: false,
	},
];

const enOneTime: DonationTier[] = [
	{
		id: "treat",
		name: "Cat Treat",
		amount: 25,
		frequency: "one-time",
		description: "Buy treats and toys for the cats",
		perks: ["Thank-you email with photos"],
		highlighted: false,
	},
	{
		id: "checkup",
		name: "Vet Checkup",
		amount: 75,
		frequency: "one-time",
		description: "Fund a routine veterinary exam",
		perks: ["Thank-you email", "Name on donor wall for the month"],
		highlighted: false,
	},
	{
		id: "spay-neuter",
		name: "Spay/Neuter",
		amount: 150,
		frequency: "one-time",
		description: "Fund a spay or neuter surgery",
		perks: [
			"Thank-you email",
			"Certificate of impact",
			"Name on donor wall for the quarter",
		],
		highlighted: true,
	},
	{
		id: "rescue",
		name: "Full Rescue",
		amount: 500,
		frequency: "one-time",
		description: "Cover the full cost of rescuing and rehabilitating one cat",
		perks: [
			"Everything above",
			"Name the next rescue cat",
			"Framed photo of the cat you helped save",
		],
		highlighted: false,
	},
];

const roMonthly: DonationTier[] = [
	{
		id: "kibble",
		name: "Prieten Boabe",
		amount: 10,
		frequency: "monthly",
		description: "Acoperă hrana unei pisici pentru o lună",
		perks: [
			"Actualizare lunară prin email",
			"Numele tău pe peretele donatorilor",
		],
		highlighted: false,
	},
	{
		id: "catnip",
		name: "Campion Iarba Mâței",
		amount: 25,
		frequency: "monthly",
		description: "Hrană, jucării și activități pentru o pisică",
		perks: [
			"Tot ce include Prieten Boabe",
			"Foto trimestrială a pisicii sponsorizate",
			"10% reducere la produsele sanctuarului",
		],
		highlighted: false,
	},
	{
		id: "guardian",
		name: "Gardian Felin",
		amount: 50,
		frequency: "monthly",
		description: "Îngrijire completă pentru un rezident al sanctuarului",
		perks: [
			"Tot ce include Campion Iarba Mâței",
			"Alege o pisică pe care să o sponsorizezi",
			"Actualizări video lunare cu pisica ta",
			"Invitație la tururi private ale sanctuarului",
		],
		highlighted: true,
	},
	{
		id: "hero",
		name: "Erou al Sanctuarului",
		amount: 100,
		frequency: "monthly",
		description: "Ajută la finanțarea îngrijirii veterinare și a operațiunilor",
		perks: [
			"Tot ce include Gardian Felin",
			"Cadou anual de mulțumire",
			"Recunoaștere la evenimente",
			"Participare la deciziile de numire din sanctuar",
		],
		highlighted: false,
	},
];

const roOneTime: DonationTier[] = [
	{
		id: "treat",
		name: "Gustare Felină",
		amount: 25,
		frequency: "one-time",
		description: "Cumpără gustări și jucării pentru pisici",
		perks: ["Email de mulțumire cu fotografii"],
		highlighted: false,
	},
	{
		id: "checkup",
		name: "Control Veterinar",
		amount: 75,
		frequency: "one-time",
		description: "Finanțează un examen veterinar de rutină",
		perks: [
			"Email de mulțumire",
			"Numele pe peretele donatorilor pentru o lună",
		],
		highlighted: false,
	},
	{
		id: "spay-neuter",
		name: "Sterilizare",
		amount: 150,
		frequency: "one-time",
		description: "Finanțează o operație de sterilizare",
		perks: [
			"Email de mulțumire",
			"Certificat de impact",
			"Numele pe peretele donatorilor pentru un trimestru",
		],
		highlighted: true,
	},
	{
		id: "rescue",
		name: "Salvare Completă",
		amount: 500,
		frequency: "one-time",
		description:
			"Acoperă costul complet al salvării și recuperării unei pisici",
		perks: [
			"Toate cele de mai sus",
			"Numește următoarea pisică salvată",
			"Fotografie înrămată cu pisica pe care ai ajutat-o",
		],
		highlighted: false,
	},
];

export const tiers: Record<Locale, DonationTier[]> = {
	en: enMonthly,
	ro: roMonthly,
};

export const oneTimeTiers: Record<Locale, DonationTier[]> = {
	en: enOneTime,
	ro: roOneTime,
};
