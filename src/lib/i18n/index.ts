import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

const defaultLocale = 'et';

register('et', () =>
	Promise.resolve({
		nav: {
			home: 'Lõuna-Eesti Märjad Käpad',
			about: 'Märgadest Käppadest',
			join: 'Tule Osale',
			join_training: 'Tule Trenni!',
			join_spectator: 'Tule Vaatama!',
			invite: 'Kutsu Meid Külla!',
			gallery: 'Galerii',
			contact: 'Kontakt',
			support: 'Koostöö',
			store: 'Käpapood',
			waterwork: 'Veepäästest',
			member: 'Liikmele',
			history: 'Ajalugu',
			us: 'Meist',
			trainers: 'Treenerid',
			dogs: 'Koerad',
			whatDo: 'Tegemisted',
			whatTrain: 'Treeningud',
			locations: 'Kus harjutame',
			why: 'Miks',
			traditions: 'Traditsioonid siis ajaloost eraldi?',
			news: 'Uudised?',
			levels: 'Tasemed',
			rules: 'Reglement',
			rescueDogs: 'Veepäästekoerad'
		},
		footer: {
			contacts: {
				person1_name: 'Valvi Väli',
				person1_title: 'Peatreener',
				person2_name: 'Toomas Tamm',
				person2_title: 'Treener',
				person3_name: 'Angela Leiaru',
				person3_title: 'Treener'
			},
			social: {
				facebook: 'Jälgi meid Facebookis'
			},
			copyright: '© {year} OÜ. Kõik õigused hetkel veel kaitsmata.',
			creator: 'jfkafk'
		},
		landing: {
			big_text: 'Lõuna-Eesti vee&shy;pääste&shy;koerte grupp Märjad Käpad',
			small_text:
				'Lõuna-Eesti vetelpäästekoerte ühendus, mis tegeleb koerte treenimise, ennetustegevuse ja kogukondliku tööga',
			sections: {
				left_title: 'Ametlik Päästeliidu liige!',
				left_description: 'Siia saab midagi kirjutada, kui tahad saab ka lähemalt vaadata!',
				left_button: 'Meie Toetajad',
				right_title: 'Kes ei uju see upub!',
				right_description:
					'Kokad, kondiitrid keevitajad. Leemekulbiliigutajad. Teeme trenni, teeme demo, ülitoreülivahva',
				right_button: 'Tutvu meiega'
			},
			stats: {
				title: 'Märjad Käpad Numbrites',
				dogs: 'Elupäästvat Neljajalgset!',
				members: 'Liiget!',
				events: 'Tehtud Ennetusüritust!',
				joy: 'Rõõmu Aitamisest!',
				description: 'Tule liitu Märgade Käppadega, ning aita päästa elusid!'
			},
			news: {
				header: 'Artiklid Märgadest Käppadest',
				subheader: 'Meie tegemised meedias ja olulised sündmused',
				read_more: 'Loe edasi'
			}
		},
		common: {
			loading: 'Laen...',
			error: 'Viga',
			close: 'Sulge'
		},
		about: {
			history: {
				header: "Kust Me Tuleme?",
				long1:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long2:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long3:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long4:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long5:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long6:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long7:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long8:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long9:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				title1: 'Elva VTÜ',
				title2: 'Elva VTÜ esimene traktor',
				title3: 'Elva VTÜ esimene traktorist',
				title4: 'Elva VTÜ yeah!',
				title5: 'Elva VTÜ yeah! teist korda',
				title6: 'Karl',
				title7: 'Elva VTÜ yeah! kolmas tulemine',
				title8: 'Märjad-Käpad',
				title9: 'Eesti võttis kasutusele euro'
			},
			dogs: {
				title: 'Kes on me Märjad-Käpad?',
				text1: 'Koer1',
				text2: 'Koer2',
				text3: 'Koer3',
				text4: 'Koer4',
				text5: 'Koer5',
				text6: 'Koer6',
				text7: 'Koer7',
				text8: 'Koer8',
				text9: 'Koer9',
				text10: 'Koer10',
				text11: 'Koer11',
				text12: 'Koer12',
				text13: 'Koer13',
				text14: 'Koer14',
				text15: 'Koer15'
			},
			us: {
				mainTitle: "Kes me oleme?",
				cards: {
					card1: {
						title: "Sõbrad",
						description: "Professionaalne koerte koolitamine ja käitumise parandamine. Meie kogenud treenerid aitavad teil luua tugeva side oma neljakäpalise sõbraga ning õpetada talle vajalikke käske ja käitumismustreid.",
						features: {
							feature1: "Individuaalne lähenemine",
							feature2: "Kogenud treenerid",
							feature3: "Tulemused garanteeritud"
						}
					},
					card2: {
						title: "Vabas Õhus Liikujad",
						description: "Täielik koerte hooldus ja iluteenused. Meie spetsialistid pakuvad teie lemmikulle parimat hooldust - alates pesemisest kuni küüniste lõikamiseni. Teie koer tuleb meie juurest värskena ja ilusana.",
						features: {
							feature1: "Kvaliteetsed tooted",
							feature2: "Sõbralik personal",
							feature3: "Mugav asukoht"
						}
					},
					card3: {
						title: "Õppurid",
						description: "Tervislikud ja hästi sotsiaalsustatud kutsikad otstavad uut kodu. Meie kutsikad kasvavad armastuses ja hooles, saavad parima veterinaarse järelevalve ning on valmis saama teie pere lahutamatuks osaks.",
						features: {
							feature1: "Tervislikud kutsikad",
							feature2: "Kõik vajalikud dokumendid",
							feature3: "Eluaegne tugi"
						}
					},
					card4: {
						title: "Vabatahtlikud",
						description: "Kvalifitseeritud veterinaarabi teie lemmikutele. Meie kliinikud pakuvad täispikka meditsiinilist abi - alates regulaarsetest kontrollidest kuni keeruliste operatsioonideni. Teie lemmiku tervis on meie prioriteet.",
						features: {
							feature1: "24/7 hädaabi",
							feature2: "Kaasaegne tehnika",
							feature3: "Kogenud arstid"
						}
					},
					card5: {
						title: "Elupäästjad",
						description: "Turvaline ja mugav koerte hotell teie puudumisel. Kui olete reisil või tööl, pakume teie lemmikule armastusrikast hooldust ja tähelepanu. Suured väljakud, mängukaaslased ja professionaalne personal.",
						features: {
							feature1: "Päev- ja ööpension",
							feature2: "Mänguväljakud",
							feature3: "Individuaalne tähelepanu"
						}
					}
				}
			},
			gallery: {
				title: "Mida me teeme?",
				mediaTypes: {
					video: "Video",
					image: "Foto"
				},
				items: {
					item1: {
						title: "Mingi video millestki",
						description: "Ja suvaline pikk tekst kah siia mida siin näha on. Kui midagi pole näha siis miskit on ikka näha."
					},
					item2: {
						title: "Mingi pilt millestki",
						description: "Ja suvaline pikk tekst kah siia mida siin näha on. Kui midagi pole näha siis miskit on ikka näha."
					},
					item3: {
						title: "Mingi video millestki",
						description: "Ja suvaline pikk tekst kah siia mida siin näha on. Kui midagi pole näha siis miskit on ikka näha."
					},
					item4: {
						title: "Mingi pilt millestki",
						description: "Ja suvaline pikk tekst kah siia mida siin näha on. Kui midagi pole näha siis miskit on ikka näha."
					},
					item5: {
						title: "Mingi video millestki",
						description: "Ja suvaline pikk tekst kah siia mida siin näha on. Kui midagi pole näha siis miskit on ikka näha."
					}
				}
			},
			training: {
				title: "Kuidas me treenime?",
				tabs: {
					principles: "Põhimõtted",
					seasons: "Hooajad"
				},
				principles: {
					sectionTitle: "Meie Treeningu Põhimõtted",
					sectionSubtitle: "Usume, et iga koer võib õppida ja areneda, kui kasutada õigeid meetodeid ja lähenemist. Meie filosoofia põhineb positiivsuse, kannatlikkuse ja individuaalse lähenemise kolmel sambaal.",
					items: {
						positive: {
							title: "Positiivne Treening",
							description: "Kasutame ainult positiivseid meetodeid ja preemiasüsteemi. Iga edusamm saab tunnustatud.",
							details: "Meie lähenemisviis põhineb usalduse ja lugupidamise ehitamisel koera ja omaniku vahel."
						},
						water: {
							title: "Veepõhine Treening",
							description: "Märtsist oktoobrini toimub põhiline treening vees. Sügav- ja madalvees harjutused.",
							details: "Veesport tugevdab kõiki lihasgrupppe ja on liigestele sõbralik alternatiiv maatreeninguile."
						},
						yearRound: {
							title: "Aastaringne Vormisolek",
							description: "Talvel hoiame vormi kuivatreeningute ja siseruumide kasutamisega.",
							details: "Füüsiline aktiivsus on oluline terve aasta vältel - kohandame meetodeid vastavalt hooajale."
						},
						individual: {
							title: "Individuaalne Lähenemine",
							description: "Iga koer on erinev. Kohandame treeninguid vastavalt iseloomule ja võimetele.",
							details: "Arvestame koera vanust, füüsilist seisundit, iseloomu ja eelnevat kogemust."
						},
						gradual: {
							title: "Järkjärguline Areng",
							description: "Ehitame oskused üles sammsammu haaval. Ei torma ega sunnita.",
							details: "Iga uus oskus tugineb eelnevalt omandatud teadmistele ja kogemusele."
						},
						fun: {
							title: "Lõbus Õppimine",
							description: "Treening peab olema rõõmus ja kaasahaarav nii koerale kui omanikule.",
							details: "Mänguline lähenemisviis aitab säilitada motivatsiooni ja huvi õppimise vastu."
						}
					},
					benefits: {
						title: "A miks nii täitsa?",
						list: [
							"Stress-free",
							"Vegan",
							"Tugevam side omaniku ja koera vahel",
							"Igas olukorras harjunud",
							"Lõbus ja kaasahaarav protsess",
							"pla-pla-pla..."
						]
					}
				},
				seasons: {
					sectionTitle: "Hooajaline Treeningu Kalender",
					sectionSubtitle: "Meie treening järgib looduslike hooaegade rütmi. Märtsist oktoobrini toimub põhiline treening vees, kuid hoiame oma neljajalgseid sõpru vormi kogu aasta vältel.",
					spring: {
						season: "Kevad",
						months: "Märts - Mai",
						description: "Kevadel alustame ettevaatlikult veetreeninguga, kui temperatuur lubab.",
						activities: [
							"Veesessiooni alustamine",
							"Ujumistehnika taastamine",
							"Temperatuuriga harjumine",
							"Põhilised veeskillid"
						]
					},
					summer: {
						season: "Suvi",
						months: "Juuni - August",
						description: "Suvel toimub kõige intensiivsem veesport koos täieliku tehnikaarendusega.",
						activities: [
							"Intensiivsed ujumissessioonid",
							"Sügavavee treening",
							"Tehnilised harjutused",
							"Vastupidavuse ehitamine"
						]
					},
					autumn: {
						season: "Sügis",
						months: "September - Oktoober",
						description: "Sügis on ideaalne aeg võistlusteks ja saavutuste hindamiseks.",
						activities: [
							"Vormi säilitamine",
							"Tehniliste oskuste lihvimine",
							"Võistluste ettevalmistus",
							"Hooaja kokkuvõte"
						]
					},
					winter: {
						season: "Talv",
						months: "November - Veebruar",
						description: "Talvel keskendume vormi hoidmisele ja järgmise hooaja ettevalmistamisele.",
						activities: [
							"Sisekonna treening",
							"Jõutreening ja stretching",
							"Tehnikaalane ettevalmistus",
							"Teoreetiline õpe"
						]
					},
					yearRoundTitle: "Aastaringne Vormisolek",
					yearRoundDescription: "Kuigi veehooaeg kestab märtsist oktoobrini, jätkame treeninguid terve aasta vältel. Talveperioodil kasutame sisekeskkondi ja alternatiivseid meetodeid.",
					periods: {
						water: {
							title: "Veehooaeg",
							time: "Märts - Oktoober",
							description: "Intensiivne veesport ja ujumisharjutused"
						},
						indoor: {
							title: "Siseperiood",
							time: "November - Veebruar",
							description: "Sisehal, jõusaal, kuivtreening"
						},
						individual: {
							title: "Individuaalne",
							time: "Aastaringselt",
							description: "Personaalne treening ja nõustamine"
						}
					},
					intensityTitle: "Treeningu Intensiivsus Aasta Lõikes",
					intensityLabels: ["Talv", "Kevad", "Suvi", "Sügis", "Hilissügis", "Talv"]
				}
			},
			motivation: {
				title: "Miks me seda teeme?",
				subtitle: "See värk ei ole mingi niisama värk. See on päris värk. Teeme eksameid. Teeme seda teist ja kolmandat nende placeholderite kirjutamine on maru keeruline, keerulisem kui terve selle muu värgi tegemine.",
				cards: {
					card1: {
						title: "Et päästa elusid",
						subtitle: "Nii on nagu elu käib.",
						description: "Avot midagi läilat siia ka. Pean veel kirjutama, siia saab päris palju kirjutada. Vajan teie abi, et kirjutada midagi siia."
					},
					card2: {
						title: "Tervise Nimel",
						subtitle: "Füüsiline ja vaimne heaolu",
						description: "Veesport on liigestele sõbralik ja pakub terviklikku treeningu. Terve koer on õnnelik koer - see on meie eesmärk."
					},
					card3: {
						title: "Kogukonna Pärast",
						subtitle: "Koos me oleme tugevamad",
						description: "Loome kogukonna, kus inimesed ja koerad saavad koos õppida, mängida ja kasvada. Igaüks leiab siin oma koha."
					},
					card4: {
						title: "Tuleviku Nimel",
						subtitle: "Paremad homsed päevad",
						description: "Iga treenitud koer on samm parema tuleviku poole. Me investeerime aega täna, et homme oleks õnnelikum."
					},
					card5: {
						title: "Jällegi minig hea põhjus",
						subtitle: "See on meie elukutse",
						description: "Me ei tee seda ainult töö pärast - see on meie kirg. Iga edukas treening, iga õnnelik koer täidab meie südame rõõmuga."
					},
					card6: {
						title: "Neid kaste võiks olla 3 v 6.",
						subtitle: "Iga koer saab paremaks",
						description: "Mingi muu arvu kastidega saame ka hakkama, aga nimodi on kõige parem. Genereerige tekste nüüd!."
					}
				},
				callToAction: {
					title: "Jällegi liitu ja liitu.",
					description: "Ja vot nii ongi. Midagi tuleks siia ka kribada. On ideid kellelgi? Tahaks nagu hullult teksti genereerida aga ei viitsi igale poole seda lorem-ipsumit ka toppida.",
					features: [
						"Professionaalne lähenemisviis",
						"Südamega tehtud töö",
						"Pühendumus igale koerale"
					]
				},
				stats: {
					dogs: "Treenitud koera",
					experience: "Aastat kogemust",
					satisfaction: "Rahulolev omanikud",
					dedication: "Soov päästa elusid"
				}
			},
			locations: {
				title: 'Kus me treenime?',
				subheader1: 'Viljandimaal- Raudna ja Paala järv',
				subheader2: 'Tartumaal- Arbi ja Nõo paisjärv',
				text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.'
			},
			weDo: {

			},
			whyDo: {

			},
			weTrain: {

			}
		}
	})
);
register('en', () =>
	Promise.resolve({
		nav: {
			home: 'South Estonian Wet Paws',
			about: 'About Wet Paws',
			join: 'Come Join',
			join_training: 'Come Train!',
			join_spectator: 'Come Watch!',
			invite: 'Invite Us Over!',
			gallery: 'Gallery',
			contact: 'Contact',
			support: 'Cooperation',
			store: 'Paw Shop',
			waterwork: 'About Water Rescue',
			member: 'For Members'
		},
		footer: {
			contacts: {
				person1_name: 'Valvi Väli',
				person1_title: 'Head Trainer',
				person2_name: 'Toomas Tamm',
				person2_title: 'Trainer',
				person3_name: 'Angela Leiaru',
				person3_title: 'Trainer'
			},
			social: {
				facebook: 'Follow us on Facebook'
			},
			copyright: '© {year} OÜ. All rights currently unprotected.',
			creator: 'jfkafk'
		},
		landing: {
			big_text: 'South Estonian water&shy;rescue&shy;dog group Wet Paws',
			small_text:
				'South Estonian water rescue dog association that deals with dog training, prevention activities and community work',
			sections: {
				left_title: 'Official member of Päästeliit!',
				left_description: 'You can write something here, if you want you can also take a closer look!',
				left_button: 'Our Supporters',
				right_title: 'Those who don\'t swim will drown!',
				right_description:
					'Cooks, confectioners welders. Soup ladle movers. We train, we do demos, super cool super awesome',
				right_button: 'Get to Know Us'
			},
			stats: {
				title: 'Wet Paws in Numbers',
				dogs: 'Life-saving Four-legged Friends!',
				members: 'Members!',
				events: 'Prevention Events Held!',
				joy: 'Joy from Helping!',
				description: 'Come join Wet Paws and help save lives!'
			},
			news: {
				header: 'Articles About Wet Paws',
				subheader: 'Our activities in the media and important events',
				read_more: 'Read more'
			}
		},
		common: {
			loading: 'Loading...',
			error: 'Error',
			close: 'Close'
		},
		about: {
			history: {
				header: "What's Our Story?",
				long1:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long2:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long3:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long4:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long5:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long6:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long7:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long8:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				long9:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				title1: 'Elva VTÜ',
				title2: 'Elva VTÜ first tractor',
				title3: 'Elva VTÜ first from the tractor',
				title4: 'Elva VTÜ yeah!',
				title5: 'Elva VTÜ yeah! second time',
				title6: 'Karl',
				title7: 'Elva VTÜ yeah! third coming',
				title8: 'Wet-Paws',
				title9: 'Estonia adopted the euro'
			},
			dogs: {
				title: 'Who are our Wet-Paws?',
				text1: 'Dog1',
				text2: 'Dog2',
				text3: 'Dog3',
				text4: 'Dog4',
				text5: 'Dog5',
				text6: 'Dog6',
				text7: 'Dog7',
				text8: 'Dog8',
				text9: 'Dog9',
				text10: 'Dog10',
				text11: 'Dog11',
				text12: 'Dog12',
				text13: 'Dog13',
				text14: 'Dog14',
				text15: 'Dog15'
			},
			us: {
				mainTitle: "Who are we?",
				cards: {
					card1: {
						title: "Friends",
						description: "Professional dog training and behavior improvement. Our experienced trainers help you create a strong bond with your four-legged friend and teach them necessary commands and behavior patterns.",
						features: {
							feature1: "Individual approach",
							feature2: "Experienced trainers",
							feature3: "Results guaranteed"
						}
					},
					card2: {
						title: "Outdoor Enthusiasts",
						description: "Complete dog grooming and beauty services. Our specialists provide the best care for your pet - from washing to nail trimming. Your dog will leave us fresh and beautiful.",
						features: {
							feature1: "Quality products",
							feature2: "Friendly staff",
							feature3: "Convenient location"
						}
					},
					card3: {
						title: "Students",
						description: "Healthy and well-socialized puppies are looking for new homes. Our puppies grow up in love and care, receive the best veterinary supervision and are ready to become an integral part of your family.",
						features: {
							feature1: "Healthy puppies",
							feature2: "All necessary documents",
							feature3: "Lifetime support"
						}
					},
					card4: {
						title: "Volunteers",
						description: "Qualified veterinary care for your pets. Our clinics provide comprehensive medical care - from regular check-ups to complex operations. Your pet's health is our priority.",
						features: {
							feature1: "24/7 emergency care",
							feature2: "Modern equipment",
							feature3: "Experienced doctors"
						}
					},
					card5: {
						title: "Lifesavers",
						description: "Safe and comfortable dog hotel during your absence. When you are traveling or at work, we provide your pet with loving care and attention. Large yards, playmates and professional staff.",
						features: {
							feature1: "Day and night boarding",
							feature2: "Play areas",
							feature3: "Individual attention"
						}
					}
				}
			},
			gallery: {
				title: "What do we do?",
				mediaTypes: {
					video: "Video",
					image: "Photo"
				},
				items: {
					item1: {
						title: "Some video about something",
						description: "And some random long text here about what can be seen here. If nothing can be seen then something can still be seen."
					},
					item2: {
						title: "Some picture about something",
						description: "And some random long text here about what can be seen here. If nothing can be seen then something can still be seen."
					},
					item3: {
						title: "Some video about something",
						description: "And some random long text here about what can be seen here. If nothing can be seen then something can still be seen."
					},
					item4: {
						title: "Some picture about something",
						description: "And some random long text here about what can be seen here. If nothing can be seen then something can still be seen."
					},
					item5: {
						title: "Some video about something",
						description: "And some random long text here about what can be seen here. If nothing can be seen then something can still be seen."
					}
				}
			},
			training: {
				title: "How do we train?",
				tabs: {
					principles: "Principles",
					seasons: "Seasons"
				},
				principles: {
					sectionTitle: "Our Training Principles",
					sectionSubtitle: "We believe that every dog can learn and develop when using the right methods and approach. Our philosophy is based on three pillars: positivity, patience, and individual approach.",
					items: {
						positive: {
							title: "Positive Training",
							description: "We use only positive methods and reward systems. Every step forward gets recognized.",
							details: "Our approach is based on building trust and respect between dog and owner."
						},
						water: {
							title: "Water-based Training",
							description: "From March to October, the main training takes place in water. Deep and shallow water exercises.",
							details: "Water sports strengthen all muscle groups and are a joint-friendly alternative to land training."
						},
						yearRound: {
							title: "Year-round Fitness",
							description: "In winter we maintain fitness with dry training and indoor facilities.",
							details: "Physical activity is important throughout the year - we adapt methods according to the season."
						},
						individual: {
							title: "Individual Approach",
							description: "Every dog is different. We adapt training according to personality and abilities.",
							details: "We consider the dog's age, physical condition, character and previous experience."
						},
						gradual: {
							title: "Gradual Development",
							description: "We build skills step by step. We don't rush or force.",
							details: "Each new skill builds on previously acquired knowledge and experience."
						},
						fun: {
							title: "Fun Learning",
							description: "Training must be joyful and engaging for both dog and owner.",
							details: "A playful approach helps maintain motivation and interest in learning."
						}
					},
					benefits: {
						title: "But why exactly like this?",
						list: [
							"Stress-free",
							"Vegan",
							"Stronger bond between owner and dog",
							"Accustomed to any situation",
							"Fun and engaging process",
							"pla-pla-pla..."
						]
					}
				},
				seasons: {
					sectionTitle: "Seasonal Training Calendar",
					sectionSubtitle: "Our training follows the rhythm of natural seasons. From March to October the main training takes place in water, but we keep our four-legged friends in shape throughout the year.",
					spring: {
						season: "Spring",
						months: "March - May",
						description: "In spring we carefully start water training when temperature allows.",
						activities: [
							"Starting water sessions",
							"Restoring swimming technique",
							"Getting used to temperature",
							"Basic water skills"
						]
					},
					summer: {
						season: "Summer",
						months: "June - August",
						description: "In summer the most intensive water sports take place with complete technique development.",
						activities: [
							"Intensive swimming sessions",
							"Deep water training",
							"Technical exercises",
							"Building endurance"
						]
					},
					autumn: {
						season: "Autumn",
						months: "September - October",
						description: "Autumn is ideal time for competitions and evaluating achievements.",
						activities: [
							"Maintaining fitness",
							"Polishing technical skills",
							"Competition preparation",
							"Season summary"
						]
					},
					winter: {
						season: "Winter",
						months: "November - February",
						description: "In winter we focus on maintaining fitness and preparing for the next season.",
						activities: [
							"Indoor training",
							"Strength training and stretching",
							"Technical preparation",
							"Theoretical learning"
						]
					},
					yearRoundTitle: "Year-round Fitness",
					yearRoundDescription: "Although the water season lasts from March to October, we continue training throughout the year. During winter period we use indoor environments and alternative methods.",
					periods: {
						water: {
							title: "Water Season",
							time: "March - October",
							description: "Intensive water sports and swimming exercises"
						},
						indoor: {
							title: "Indoor Period",
							time: "November - February",
							description: "Indoor hall, gym, dry training"
						},
						individual: {
							title: "Individual",
							time: "Year-round",
							description: "Personal training and consultation"
						}
					},
					intensityTitle: "Training Intensity Throughout the Year",
					intensityLabels: ["Winter", "Spring", "Summer", "Autumn", "Late Autumn", "Winter"]
				}
			},
			motivation: {
				title: "Why do we do this?",
				subtitle: "This thing is not just some random thing. This is a real thing. We take exams. We do this and that and third, writing these placeholders is super difficult, more difficult than doing all this other stuff.",
				cards: {
					card1: {
						title: "To save lives",
						subtitle: "That's how life goes.",
						description: "Need to write something neat here too. I still need to write, you can write quite a lot here. I need your help to write something here."
					},
					card2: {
						title: "For Health",
						subtitle: "Physical and mental wellbeing",
						description: "Water sports are joint-friendly and provide comprehensive training. A healthy dog is a happy dog - that's our goal."
					},
					card3: {
						title: "For the Community",
						subtitle: "Together we are stronger",
						description: "We create a community where people and dogs can learn, play and grow together. Everyone finds their place here."
					},
					card4: {
						title: "For the Future",
						subtitle: "Better tomorrows",
						description: "Every trained dog is a step towards a better future. We invest time today so tomorrow will be happier."
					},
					card5: {
						title: "Again some good reason",
						subtitle: "This is our calling",
						description: "We don't do this just for work - this is our passion. Every successful training, every happy dog fills our hearts with joy."
					},
					card6: {
						title: "There could be 3 or 6 of these boxes.",
						subtitle: "Every dog gets better",
						description: "We can also handle some other number of boxes, but this way is the best. Generate texts now!."
					}
				},
				callToAction: {
					title: "Again join and join.",
					description: "And that's how it is. Should write something here too. Does anyone have ideas? Would love to generate text like crazy but don't want to stuff lorem ipsum everywhere either.",
					features: [
						"Professional approach",
						"Work done with heart",
						"Dedication to every dog"
					]
				},
				stats: {
					dogs: "Trained dogs",
					experience: "Years of experience",
					satisfaction: "Satisfied owners",
					dedication: "Desire to save lives"
				}
			},
			locations: {
				title: 'Where do we train?',
				subheader1: 'In Viljandimaa - Raudna and Paala lakes',
				subheader2: 'In Tartumaa - Arbi and Nõo mill pond',
				text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.',
				text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
					'et dolore magna aliqua.'
			},
			weDo: {},
			whyDo: {},
			weTrain: {}
		}
	})
);

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