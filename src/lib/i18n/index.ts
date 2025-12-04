import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

const defaultLocale = 'et';

// Register translation files with the full translations
register('et', () => Promise.resolve({
	"nav": {
		"home": "Lõuna-Eesti Märjad Käpad",
		"about": "Meist",
		"join": "Tule Osale",
		"join_training": "Tule Trenni!",
		"join_spectator": "Tule Vaatama!",
		"invite": "Kutsu Meid Külla!",
		"gallery": "Galerii",
		"contact": "Kontakt",
		"support": "Koostöö",
		"store": "Käpapood",
		"waterwork": "Veepäästest",
		"member": "Liikmele",
		"dogs": "Koerad",
		"trainers": "Treenerid",
		"training": "Treeningud",
		"partners": "Koostööpartnerid"
	},
	"footer": {
		"contacts": {
			"person1_name": "Valvi Väli",
			"person1_title": "Peatreener / K9 instruktor",
			"person2_name": "Toomas Tamm",
			"person2_title": "K9 instruktor",
			"person3_name": "Angela Leiaru",
			"person3_title": "K9 instruktor"
		},
		"social": {
			"facebook": "Jälgi meid Facebookis"
		},
		"copyright": "© {year} OÜ. Kõik õigused hetkel veel kaitsmata.",
		"creator": "jfkafk"
	},
	"landing": {
		"big_text": "Lõuna-Eesti vee&shy;pääste&shy;koerte grupp Märjad Käpad",
		"small_text": "Lõuna-Eesti vetelpäästekoerte ühendus, mis tegeleb koerte treenimise, ennetustegevuse ja kogukondliku tööga",
		"sections": {
			"left_title": "Kõik päästame ä!",
			"left_description": "Siia saab midagi kirjutada, kui tahad saab ka lähemalt vaadata!",
			"left_button": "Vaata lähemalt",
			"right_title": "Kes ei uju see upub!",
			"right_description": "Kokad, kondiitrid keevitajad. Leemekulbiliigutajad. Teeme trenni, teeme demo, ülitoreülivahva",
			"right_button": "Tutvu meiega"
		},
		"stats": {
			"title": "Märjad Käpad Numbrites",
			"dogs": "Elupäästvat Neljajalgset!",
			"members": "Liiget!",
			"events": "Tehtud Ennetusüritust!",
			"joy": "Rõõmu Aitamisest!",
			"description": "Tule liitu Märgade Käppadega, ning aita päästa elusid!"
		},

		"news": {
			"header": "Artiklid Märgadest Käppadest",
			"subheader": "Meie tegemised meedias ja olulised sündmused",
			"read_more": "Loe edasi"
		},
	},
	"common": {
		"loading": "Laen...",
		"error": "Viga",
		"close": "Sulge"
	}
}));

register('en', () => Promise.resolve({
	"nav": {
		"home": "South Estonian Wet Paws",
		"about": "About Us",
		"join": "Join Us",
		"join_training": "Come Train!",
		"join_spectator": "Come Watch!",
		"invite": "Invite Us Over!",
		"gallery": "Gallery",
		"contact": "Contact",
		"support": "Partnership",
		"store": "Paw Shop",
		"waterwork": "About Waterwork",
		"member": "For Members",
		"dogs": "Dogs",
		"trainers": "Trainers",
		"training": "Training",
		"partners": "Partners"
	},
	"footer": {
		"contacts": {
			"person1_name": "Valvi Väli",
			"person1_title": "Head Coach/ K9 instructor",
			"person2_name": "Toomas Tamm",
			"person2_title": "K9 Instructor",
			"person3_name": "Angela Leiaru",
			"person3_title": "K9 Instructor"
		},
		"social": {
			"facebook": "Follow us on Facebook"
		},
		"copyright": "© {year} LLC. All rights currently unprotected.",
		"creator": "jfkafk"
	},
	"landing": {
		"big_text": "South Estonian Water Rescue Dogs Group Wet Paws",
		"small_text": "South Estonia water rescue dogs association, engaged in dog training, prevention activities, and community work",
		"sections": {
			"left_title": "We Save Everyone!",
			"left_description": "Here you can write something, if you want you can also look closer!",
			"left_button": "Look Closer",
			"right_title": "Those Who Don't Swim Will Drown!",
			"right_description": "Cooks, confectioners, welders. Soup ladle movers. We train, we demo, super awesome stuff",
			"right_button": "Get to Know Us"
		},
		"stats": {
			"title": "Wet Paws in Numbers",
			"dogs": "Life-Saving Four-Legged Friends!",
			"members": "Members!",
			"events": "Prevention Events Organized!",
			"joy": "Joy from Helping!",
			"description": "Come join the Wet Paws and help save lives!"
		},

		"news": {
			"header": "Articles about us",
			"subheader": "Our media coverage and important events",
			"read_more": "continue"
		},
	},
	"common": {
		"loading": "Loading...",
		"error": "Error",
		"close": "Close"
	}
}));

// Get initial locale from localStorage or default
const getInitialLocale = () => {
	if (browser) {
		const saved = localStorage.getItem('language');
		if (saved && ['et', 'en'].includes(saved)) {
			return saved;
		}
	}
	return defaultLocale;
};

// Initialize i18n
init({
	fallbackLocale: defaultLocale,
	initialLocale: getInitialLocale(),
});

// Save locale changes to localStorage
if (browser) {
	locale.subscribe(value => {
		if (value) {
			localStorage.setItem('language', value);
		}
	});
}

export { _, locale, isLoading } from 'svelte-i18n';