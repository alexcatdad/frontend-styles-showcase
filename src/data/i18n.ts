export type Locale = "en" | "ro";

export const locales: Locale[] = ["en", "ro"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
	en: "English",
	ro: "Română",
};

export const ui: Record<Locale, UIStrings> = {
	en: {
		nav: {
			home: "Home",
			cats: "Cats",
			blog: "Blog",
			donate: "Donate",
			login: "Login",
		},
		home: {
			meetCats: "Meet Our Cats",
			donate: "Donate",
			mission: "Our Mission",
			aboutUs: "About Us",
		},
		cats: {
			title: "Meet Our Cats",
			subtitle:
				"Each of our residents has a unique personality. Find your perfect match.",
			backToAll: "Back to all cats",
			adopt: "Adopt",
			otherCats: "Other Cats You Might Like",
			breed: "Breed",
			age: "Age",
			gender: "Gender",
			color: "Color",
			arrived: "Arrived",
			status: "Status",
		},
		blog: {
			title: "Sanctuary Stories",
			subtitle: "News, tips, and tales from Whisker Haven.",
			backToBlog: "Back to blog",
			by: "By",
			moreStories: "More Stories",
		},
		donate: {
			title: "Support Whisker Haven",
			subtitle:
				"Every donation helps us rescue, rehabilitate, and rehome cats in need.",
			monthly: "Monthly Support",
			oneTime: "One-Time Gifts",
			mostPopular: "Most Popular",
			greatestImpact: "Greatest Impact",
			choose: "Choose",
			give: "Give",
			perMonth: "/month",
		},
		auth: {
			title: "Welcome Back",
			subtitle: "Sign in to manage your adoption applications and donations.",
			email: "Email",
			password: "Password",
			rememberMe: "Remember me",
			forgotPassword: "Forgot password?",
			signIn: "Sign In",
			continueWith: "Or continue with",
			noAccount: "Don't have an account?",
			signUp: "Sign up",
		},
		notFound: {
			title: "404",
			heading: "This cat wandered off",
			description:
				"The page you're looking for has gone on an adventure. Let's get you back on track.",
			backHome: "Back to Home",
			meetCats: "Meet Our Cats",
		},
		footer: {
			style: "Style",
		},
	},
	ro: {
		nav: {
			home: "Acasă",
			cats: "Pisici",
			blog: "Blog",
			donate: "Donează",
			login: "Autentificare",
		},
		home: {
			meetCats: "Cunoaște Pisicile",
			donate: "Donează",
			mission: "Misiunea Noastră",
			aboutUs: "Despre Noi",
		},
		cats: {
			title: "Cunoaște Pisicile Noastre",
			subtitle:
				"Fiecare dintre rezidenții noștri are o personalitate unică. Găsește-ți perechea perfectă.",
			backToAll: "Înapoi la toate pisicile",
			adopt: "Adoptă",
			otherCats: "Alte Pisici Care Ți-ar Putea Plăcea",
			breed: "Rasă",
			age: "Vârstă",
			gender: "Gen",
			color: "Culoare",
			arrived: "Sosit",
			status: "Status",
		},
		blog: {
			title: "Povești din Sanctuar",
			subtitle: "Noutăți, sfaturi și povești de la Whisker Haven.",
			backToBlog: "Înapoi la blog",
			by: "De",
			moreStories: "Mai Multe Povești",
		},
		donate: {
			title: "Sprijină Whisker Haven",
			subtitle:
				"Fiecare donație ne ajută să salvăm, să recuperăm și să găsim case pentru pisicile aflate în nevoie.",
			monthly: "Sprijin Lunar",
			oneTime: "Donații Unice",
			mostPopular: "Cel Mai Popular",
			greatestImpact: "Cel Mai Mare Impact",
			choose: "Alege",
			give: "Donează",
			perMonth: "/lună",
		},
		auth: {
			title: "Bine ai Revenit",
			subtitle:
				"Autentifică-te pentru a gestiona cererile de adopție și donațiile.",
			email: "Email",
			password: "Parolă",
			rememberMe: "Ține-mă minte",
			forgotPassword: "Ai uitat parola?",
			signIn: "Autentificare",
			continueWith: "Sau continuă cu",
			noAccount: "Nu ai cont?",
			signUp: "Înregistrează-te",
		},
		notFound: {
			title: "404",
			heading: "Această pisică a plecat la plimbare",
			description:
				"Pagina pe care o cauți a plecat într-o aventură. Hai să te readucem pe drumul cel bun.",
			backHome: "Înapoi Acasă",
			meetCats: "Cunoaște Pisicile",
		},
		footer: {
			style: "Stil",
		},
	},
};

interface UIStrings {
	nav: {
		home: string;
		cats: string;
		blog: string;
		donate: string;
		login: string;
	};
	home: {
		meetCats: string;
		donate: string;
		mission: string;
		aboutUs: string;
	};
	cats: {
		title: string;
		subtitle: string;
		backToAll: string;
		adopt: string;
		otherCats: string;
		breed: string;
		age: string;
		gender: string;
		color: string;
		arrived: string;
		status: string;
	};
	blog: {
		title: string;
		subtitle: string;
		backToBlog: string;
		by: string;
		moreStories: string;
	};
	donate: {
		title: string;
		subtitle: string;
		monthly: string;
		oneTime: string;
		mostPopular: string;
		greatestImpact: string;
		choose: string;
		give: string;
		perMonth: string;
	};
	auth: {
		title: string;
		subtitle: string;
		email: string;
		password: string;
		rememberMe: string;
		forgotPassword: string;
		signIn: string;
		continueWith: string;
		noAccount: string;
		signUp: string;
	};
	notFound: {
		title: string;
		heading: string;
		description: string;
		backHome: string;
		meetCats: string;
	};
	footer: {
		style: string;
	};
}
