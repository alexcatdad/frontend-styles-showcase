import type { BlogPost } from "../../data/blog";
import type { Cat } from "../../data/cats";
import type { DonationTier } from "../../data/donate";
import type { NavItem } from "../../data/navigation";
import type { StyleMeta } from "../../data/styles";

/**
 * UI strings from i18n — passed to every component.
 * Import the full type from data/i18n if needed.
 */
type UIStrings =
	ReturnType<typeof import("../../data/i18n")["ui"]["en"]> extends infer T
		? T
		: never;

/** Props shared by ALL style page components */
export interface BasePageProps {
	lang: string;
	style: string;
	nav: NavItem[];
	meta: StyleMeta;
}

export interface HomeProps extends BasePageProps {
	sanctuary: {
		name: string;
		tagline: string;
		mission: string;
		about: string[];
		stats: { label: string; value: string }[];
		contact: { email: string; phone: string; address: string };
	};
	t: {
		nav: Record<string, string>;
		home: Record<string, string>;
		footer: Record<string, string>;
	};
}

export interface CatsListProps extends BasePageProps {
	cats: Cat[];
	t: {
		nav: Record<string, string>;
		cats: Record<string, string>;
	};
}

export interface CatProfileProps extends BasePageProps {
	cat: Cat;
	otherCats: Cat[];
	t: {
		nav: Record<string, string>;
		cats: Record<string, string>;
	};
}

export interface BlogListProps extends BasePageProps {
	posts: BlogPost[];
	t: {
		nav: Record<string, string>;
		blog: Record<string, string>;
	};
}

export interface BlogPostProps extends BasePageProps {
	post: BlogPost;
	otherPosts: BlogPost[];
	t: {
		nav: Record<string, string>;
		blog: Record<string, string>;
	};
}

export interface DonateProps extends BasePageProps {
	monthlyTiers: DonationTier[];
	oneTimeTiers: DonationTier[];
	t: {
		nav: Record<string, string>;
		donate: Record<string, string>;
	};
}

export interface AuthProps extends BasePageProps {
	t: {
		nav: Record<string, string>;
		auth: Record<string, string>;
	};
}

export interface NotFoundProps extends BasePageProps {
	t: {
		nav: Record<string, string>;
		notFound: Record<string, string>;
	};
}
