import type { Locale } from "./i18n";

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	tags: string[];
	content: string[];
}

const en: BlogPost[] = [
	{
		slug: "spring-adoption-event",
		title: "Spring Adoption Event: 20 Cats Found Homes!",
		excerpt:
			"Our biggest adoption event yet brought the community together for a day of purrs, play, and perfect matches.",
		author: "Sarah Chen",
		date: "2026-03-15",
		tags: ["Events", "Adoption", "Community"],
		content: [
			"Last Saturday, Whisker Haven hosted our annual Spring Adoption Event, and the results exceeded every expectation. Twenty cats — from kittens to seniors — found their forever homes in a single day.",
			"The event featured meet-and-greet stations where potential adopters could spend quality time with cats in a relaxed setting. Our behavioral team was on hand to help match personalities and lifestyles with the right feline companion.",
			'"We had families driving in from three counties away," said volunteer coordinator Maria Santos. "Word is getting out that Whisker Haven takes a thoughtful approach to adoption."',
			"Among the highlights: Grandpa Whiskers, a 12-year-old tabby who'd been with us for eight months, finally found a retired couple who fell in love with his gentle demeanor. And the three kittens from the Maple Street rescue — Maple, Syrup, and Pancake — were adopted together by a family with two kids.",
			"If you missed this event, don't worry. We have cats available for adoption year-round, and our next community event is scheduled for June.",
		],
	},
	{
		slug: "cat-nutrition-guide",
		title: "What We've Learned About Cat Nutrition in 7 Years",
		excerpt:
			"Our veterinary team shares insights on feeding cats right — from kitten to senior, from picky eater to food vacuum.",
		author: "Dr. James Park",
		date: "2026-02-28",
		tags: ["Health", "Nutrition", "Tips"],
		content: [
			"After caring for over 2,000 cats, our veterinary team has developed strong opinions about feline nutrition. Here's what seven years of sanctuary experience has taught us.",
			"First: wet food matters more than most people think. Cats are notoriously poor water drinkers, and chronic dehydration contributes to kidney disease — the leading cause of death in older cats. A diet that includes wet food helps maintain hydration naturally.",
			"Second: the protein source matters. Cats are obligate carnivores, and they thrive on animal-based proteins. We've seen noticeable coat, energy, and digestive improvements when switching cats from grain-heavy to protein-forward diets.",
			"Third: every cat is different. Mochi inhales anything you put in front of him. Cleo will only eat pâté-style food served at room temperature on a flat plate. Shadow prefers to eat alone, at night, in complete silence. Learning your cat's preferences isn't spoiling them — it's ensuring they actually eat enough.",
			"Our recommendation: consult with your vet, read ingredient labels, and pay attention to your cat's response. The best food is the one your cat will consistently eat that meets their nutritional needs.",
		],
	},
	{
		slug: "volunteer-spotlight-maria",
		title: "Volunteer Spotlight: Maria Santos",
		excerpt:
			"From weekend helper to volunteer coordinator — how one person's dedication transformed our sanctuary.",
		author: "Whisker Haven Team",
		date: "2026-02-10",
		tags: ["Volunteers", "Community", "People"],
		content: [
			'When Maria Santos first walked into Whisker Haven three years ago, she planned to volunteer for a few weekends. "I just wanted to pet some cats," she laughs. Today, she coordinates over 120 volunteers and has become the backbone of our operations.',
			"Maria restructured our volunteer program from the ground up. She created training modules, shift scheduling systems, and a mentorship program that pairs new volunteers with experienced ones. The result: volunteer retention increased by 60%.",
			'"The secret is making people feel useful, not just busy," Maria explains. "Everyone has different strengths. Some people are great at socializing shy cats. Others excel at cleaning and maintenance. Some are born event planners. I try to match tasks to talents."',
			"Beyond logistics, Maria has a gift for building community. She started monthly volunteer appreciation dinners, a group chat that's equal parts cat photos and mutual support, and an annual awards ceremony that's become surprisingly competitive.",
			'"I stayed because of the cats, but also because of the people," she says. "When you work alongside others who care this deeply about something, it changes you."',
		],
	},
	{
		slug: "understanding-cat-body-language",
		title: "Reading Your Cat: A Guide to Feline Body Language",
		excerpt:
			"Slow blinks, tail positions, ear angles — your cat is constantly communicating. Here's how to listen.",
		author: "Dr. James Park",
		date: "2026-01-20",
		tags: ["Education", "Behavior", "Tips"],
		content: [
			"Cats are often called mysterious, but they're actually quite expressive — if you know what to look for. After years of observing hundreds of cats at the sanctuary, our team has compiled this guide to feline body language.",
			'The slow blink is often called a "cat kiss." When a cat looks at you and slowly closes and opens their eyes, they\'re expressing trust and affection. Try slow-blinking back — many cats will respond in kind.',
			"Tail position is one of the most reliable indicators of mood. A tail held high with a slight curve at the tip means a confident, happy cat. A puffed-up tail signals fear or agitation. A tail wrapped around another cat (or your leg) is a sign of friendship.",
			'Ears are equally telling. Forward-facing ears indicate interest and alertness. Ears flattened sideways ("airplane ears") suggest anxiety or irritation. Ears pinned flat against the head mean the cat is frightened or aggressive — give them space.',
			"The belly trap: a cat rolling over to show their belly is expressing trust, but it's NOT necessarily an invitation to touch. Many cats will grab and kick if you reach for the belly. Read the rest of their body language before committing to that belly rub.",
			"Remember: every cat is an individual. These are general guidelines, but the best way to understand your specific cat is to spend time observing them and learning their personal communication style.",
		],
	},
];

const ro: BlogPost[] = [
	{
		slug: "spring-adoption-event",
		title:
			"Evenimentul de Adopție de Primăvară: 20 de Pisici și-au Găsit Case!",
		excerpt:
			"Cel mai mare eveniment de adopție de până acum a adus comunitatea împreună pentru o zi de torsuri, joacă și potriviri perfecte.",
		author: "Sarah Chen",
		date: "2026-03-15",
		tags: ["Evenimente", "Adopție", "Comunitate"],
		content: [
			"Sâmbăta trecută, Whisker Haven a găzduit Evenimentul Anual de Adopție de Primăvară, iar rezultatele au depășit toate așteptările. Douăzeci de pisici — de la pui până la seniori — și-au găsit casele permanente într-o singură zi.",
			"Evenimentul a inclus stații de cunoaștere unde potențialii adoptatori puteau petrece timp de calitate cu pisicile într-un cadru relaxat. Echipa noastră de comportament a fost prezentă pentru a ajuta la potrivirea personalităților și stilurilor de viață cu companionul felin potrivit.",
			`„Am avut familii care au condus din trei județe distanță," a spus coordonatoarea voluntarilor Maria Santos. „Se răspândește vestea că Whisker Haven are o abordare atentă a adopției."`,
			"Printre momentele speciale: Bunicul Mustăți, un tabby de 12 ani care fusese cu noi de opt luni, a găsit în sfârșit un cuplu de pensionari care s-au îndrăgostit de temperamentul lui blând. Iar cei trei pisoi de la salvarea de pe Strada Arțarului — Arțar, Sirop și Clătită — au fost adoptați împreună de o familie cu doi copii.",
			"Dacă ai ratat acest eveniment, nu-ți face griji. Avem pisici disponibile pentru adopție pe tot parcursul anului, iar următorul eveniment comunitar este programat pentru iunie.",
		],
	},
	{
		slug: "cat-nutrition-guide",
		title: "Ce Am Învățat Despre Nutriția Pisicilor în 7 Ani",
		excerpt:
			"Echipa noastră veterinară împărtășește sfaturi despre hrănirea corectă a pisicilor — de la pui la seniori, de la mofturoși la aspiratoare de mâncare.",
		author: "Dr. James Park",
		date: "2026-02-28",
		tags: ["Sănătate", "Nutriție", "Sfaturi"],
		content: [
			"După ce am avut grijă de peste 2.000 de pisici, echipa noastră veterinară și-a format opinii solide despre nutriția felină. Iată ce ne-au învățat șapte ani de experiență în sanctuar.",
			"În primul rând: mâncarea umedă contează mai mult decât cred majoritatea oamenilor. Pisicile sunt notoriu de slabe la consumul de apă, iar deshidratarea cronică contribuie la bolile renale — principala cauză de deces la pisicile în vârstă. O dietă care include mâncare umedă ajută la menținerea hidratării în mod natural.",
			"În al doilea rând: sursa de proteine contează. Pisicile sunt carnivore obligatorii și prosperă cu proteine de origine animală. Am observat îmbunătățiri notabile ale blănii, energiei și digestiei când am trecut pisicile de la diete bogate în cereale la diete orientate spre proteine.",
			"În al treilea rând: fiecare pisică este diferită. Mochi inhalează orice pui în fața lui. Cleo va mânca doar mâncare tip pate servită la temperatura camerei pe o farfurie plată. Shadow preferă să mănânce singur, noaptea, în liniște completă. A învăța preferințele pisicii tale nu înseamnă să o răsfezi — înseamnă să te asiguri că mănâncă suficient.",
			"Recomandarea noastră: consultă-te cu veterinarul, citește etichetele ingredientelor și fii atent la reacția pisicii tale. Cea mai bună mâncare este cea pe care pisica ta o va mânca constant și care îi satisface nevoile nutriționale.",
		],
	},
	{
		slug: "volunteer-spotlight-maria",
		title: "Voluntarul Lunii: Maria Santos",
		excerpt:
			"De la ajutor de weekend la coordonator de voluntari — cum dedicarea unei persoane a transformat sanctuarul nostru.",
		author: "Echipa Whisker Haven",
		date: "2026-02-10",
		tags: ["Voluntari", "Comunitate", "Oameni"],
		content: [
			`Când Maria Santos a intrat prima dată în Whisker Haven acum trei ani, plănuia să fie voluntar câteva weekenduri. „Voiam doar să mângâi niște pisici," râde ea. Astăzi, coordonează peste 120 de voluntari și a devenit coloana vertebrală a operațiunilor noastre.`,
			"Maria a restructurat programul nostru de voluntariat de la zero. A creat module de instruire, sisteme de programare a turelor și un program de mentorat care asociază voluntarii noi cu cei experimentați. Rezultatul: retenția voluntarilor a crescut cu 60%.",
			`„Secretul este să faci oamenii să se simtă utili, nu doar ocupați," explică Maria. „Fiecare are puncte forte diferite. Unii oameni sunt excelenți la socializarea pisicilor timide. Alții excelează la curățenie și întreținere. Unii sunt organizatori de evenimente înnăscuți. Încerc să potrivesc sarcinile cu talentele."`,
			"Dincolo de logistică, Maria are darul de a construi comunitate. A inițiat cine lunare de apreciere a voluntarilor, un grup de chat care este în egală măsură fotografii cu pisici și sprijin reciproc, și o ceremonie anuală de premiere care a devenit surprinzător de competitivă.",
			`„Am rămas pentru pisici, dar și pentru oameni," spune ea. „Când lucrezi alături de alții cărora le pasă atât de profund de ceva, te schimbă."`,
		],
	},
	{
		slug: "understanding-cat-body-language",
		title: "Citește-ți Pisica: Ghid al Limbajului Corporal Felin",
		excerpt:
			"Clipiri lente, poziții ale cozii, unghiuri ale urechilor — pisica ta comunică constant. Iată cum să asculți.",
		author: "Dr. James Park",
		date: "2026-01-20",
		tags: ["Educație", "Comportament", "Sfaturi"],
		content: [
			"Pisicile sunt adesea numite misterioase, dar sunt de fapt destul de expresive — dacă știi unde să te uiți. După ani de observare a sute de pisici în sanctuar, echipa noastră a compilat acest ghid al limbajului corporal felin.",
			`Clipirea lentă este adesea numită „sărutul pisicii." Când o pisică te privește și își închide și deschide încet ochii, exprimă încredere și afecțiune. Încearcă să clipești lent înapoi — multe pisici vor răspunde la fel.`,
			"Poziția cozii este unul dintre cei mai fiabili indicatori ai dispoziției. O coadă ținută sus cu o ușoară curbă la vârf înseamnă o pisică încrezătoare și fericită. O coadă umflată semnalează frică sau agitație. O coadă înfășurată în jurul altei pisici (sau al piciorului tău) este un semn de prietenie.",
			`Urechile sunt la fel de grăitoare. Urechile orientate înainte indică interes și alertă. Urechile aplatizate lateral („urechi de avion") sugerează anxietate sau iritare. Urechile lipite de cap înseamnă că pisica este speriată sau agresivă — dă-i spațiu.`,
			"Capcana burții: o pisică care se rostogolește pentru a-și arăta burta exprimă încredere, dar NU este neapărat o invitație de a o atinge. Multe pisici vor apuca și lovi dacă încerci să atingi burta. Citește restul limbajului corporal înainte de a te angaja la o mângâiere pe burtă.",
			"Amintește-ți: fiecare pisică este un individ. Acestea sunt orientări generale, dar cel mai bun mod de a înțelege pisica ta specifică este să petreci timp observând-o și învățându-i stilul personal de comunicare.",
		],
	},
];

export const posts: Record<Locale, BlogPost[]> = { en, ro };

export const postSlugs = en.map((p) => p.slug);

export function getPost(lang: Locale, slug: string): BlogPost | undefined {
	return posts[lang].find((p) => p.slug === slug);
}
