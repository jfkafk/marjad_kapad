<script lang="ts">
	interface InviteReason {
		id: number;
		title: string;
		description: string;
		icon: string;
		benefits: string[];
	}

	interface Venue {
		id: number;
		name: string;
		description: string;
		duration: string;
		suitable: string[];
		icon: string;
	}

	const reasons: InviteReason[] = [
		{
			id: 1,
			title: "Tutvustame veeohutust",
			description: "Ja jah, Tohoh. Tutvustame veeohutust. Teeme saltosid ja muid trikke. Hiiglama vahva!",
			icon: "🛟",
			benefits: ["Vot Jah", "Nii Oh", "On", "Lood on Segased"]
		},
		{
			id: 2,
			title: "Mingi hea idee",
			description: "Ja jah, Tohoh. Tutvustame veeohutust. Teeme saltosid ja muid trikke. Hiiglama vahva!",
			icon: "💡",
			benefits: ["Vot Jah", "Nii Oh", "On", "Lood on Segased"]
		},
		{
			id: 3,
			title: "Saab näha vetelpäästekoeri",
			description: "Ja jah, Tohoh. Tutvustame veeohutust. Teeme saltosid ja muid trikke. Hiiglama vahva!",
			icon: "🐶",
			benefits: ["Vot Jah", "Nii Oh", "On", "Lood on Segased"]
		}
	];

	const venues: Venue[] = [
		{
			id: 1,
			name: "Paitamise demo",
			description: "Lepime kokku aja ja koha. Saate kaasatata koeri oma üritusele",
			duration: "kuni 8h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "🐶"
		},
		{
			id: 2,
			name: "Demo vees",
			description: "Näitame kuidas koerad vett päästavad ning tutvustame tegevust",
			duration: "kuni 3h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "💧"
		},
		{
			id: 3,
			name: "Mingi loenguvorm?",
			description: "Tapame teid powerpoint'iga!",
			duration: "kuni 3h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "📖"
		},
		{
			id: 4,
			name: "Oleme avatud ideedele.",
			description: "Sul on üritus, kuhu meid kutsuda?",
			duration: "kuni 8h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "❤️"
		},
		{
			id: 5,
			name: "see asi mis pidi olema aga ei mäleta",
			description: "see asi mis pidi olema aga ei mäleta",
			duration: "kuni 8h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "❤️"
		},
		{
			id: 5,
			name: "see asi mis pidi olema aga ei mäleta",
			description: "see asi mis pidi olema aga ei mäleta",
			duration: "kuni 8h",
			suitable: ["Jooga", "Aktiivsed harjutused", "Meditsioon", "Looduslähedased tegevused"],
			icon: "❤️"
		}
	];
</script>

<div class="main-container">
	<div class="content-wrapper">
		<!-- Header Section -->
		<div class="header-section">
			<div class="header-centre">
				Kutsu Käpad Külla!
			</div>
		</div>

		<!-- Introduction -->
		<div class="text-center mb-16">
			<p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
				Kutsu meid tutvustama Märgade-Käppade tegemisi, ning saame üheskoos ohutumaks!
			</p>
		</div>

		<!-- Why Section -->
		<div class="mb-20">
			<h3 class="text-3xl font-bold text-center text-gray-800 mb-12">
				Miks meid kutsuda?
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each reasons as reason (reason)}
					<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
						<div class="text-center mb-6">
							<div class="text-5xl mb-4">{reason.icon}</div>
							<h4 class="text-xl font-bold text-gray-800 mb-3">{reason.title}</h4>
							<p class="text-gray-600 leading-relaxed">{reason.description}</p>
						</div>

						<div class="space-y-3">
							<h5 class="font-semibold text-gray-800 text-sm uppercase tracking-wide">Eelised:</h5>
							{#each reason.benefits as benefit (benefit)}
								<div class="flex items-center text-sm text-gray-600">
									<svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									{benefit}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Where Section -->
		<div class="mb-20">
			<h3 class="text-3xl font-bold text-center text-gray-800 mb-4">
				Millised on võimalused?
			</h3>
			<p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
				Kohandame oma programmi vastavalt teie vajadustele ja võimalustele. Oleme paindlikud!
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
				{#each venues as venue (venue)}
					<div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 border border-blue-200">
						<div class="text-center mb-4">
							<div class="text-3xl mb-3">{venue.icon}</div>
							<h4 class="text-lg font-bold text-gray-800 mb-2">{venue.name}</h4>
							<p class="text-sm text-gray-600 mb-3">{venue.description}</p>
							<div class="text-xs text-blue-600 font-semibold bg-white px-2 py-1 rounded-full inline-block">
								{venue.duration}
							</div>
						</div>

						<div class="space-y-2">
							<h5 class="text-xs font-semibold text-gray-700 uppercase tracking-wide">Sobib hästi:</h5>
							{#each venue.suitable as activity (activity)}
								<div class="text-xs text-gray-600 flex items-center">
									<div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
									{activity}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
    .main-container {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 3rem 0;
        min-height: 100vh;
    }

    .main-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    .content-wrapper {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
    }

    .header-section {
        margin-bottom: 3rem;
    }

    .header-centre {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 10;
        margin-bottom: 2rem;
        line-height: 1.1;
    }

    @media (max-width: 768px) {
        .header-centre {
            font-size: 2rem;
        }
    }
</style>