<script lang="ts">
	import { _ } from '$lib/i18n';

	let activeSection = 'principles';

	const trainingPrinciples = [
		{
			icon: '🎯',
			title: $_('about.training.principles.items.positive.title'),
			description: $_('about.training.principles.items.positive.description'),
			details: $_('about.training.principles.items.positive.details')
		},
		{
			icon: '🏊‍♀️',
			title: $_('about.training.principles.items.water.title'),
			description: $_('about.training.principles.items.water.description'),
			details: $_('about.training.principles.items.water.details')
		},
		{
			icon: '💪',
			title: $_('about.training.principles.items.yearRound.title'),
			description: $_('about.training.principles.items.yearRound.description'),
			details: $_('about.training.principles.items.yearRound.details')
		},
		{
			icon: '👥',
			title: $_('about.training.principles.items.individual.title'),
			description: $_('about.training.principles.items.individual.description'),
			details: $_('about.training.principles.items.individual.details')
		},
		{
			icon: '📈',
			title: $_('about.training.principles.items.gradual.title'),
			description: $_('about.training.principles.items.gradual.description'),
			details: $_('about.training.principles.items.gradual.details')
		},
		{
			icon: '🏆',
			title: $_('about.training.principles.items.fun.title'),
			description: $_('about.training.principles.items.fun.description'),
			details: $_('about.training.principles.items.fun.details')
		}
	];

	const seasonalSchedule = [
		{
			season: $_('about.training.seasons.spring.season'),
			months: $_('about.training.seasons.spring.months'),
			icon: '🌸',
			color: 'from-green-400 to-blue-500',
			activities: $_('about.training.seasons.spring.activities'),
			description: $_('about.training.seasons.spring.description')
		},
		{
			season: $_('about.training.seasons.summer.season'),
			months: $_('about.training.seasons.summer.months'),
			icon: '☀️',
			color: 'from-yellow-400 to-orange-500',
			activities: $_('about.training.seasons.summer.activities'),
			description: $_('about.training.seasons.summer.description')
		},
		{
			season: $_('about.training.seasons.autumn.season'),
			months: $_('about.training.seasons.autumn.months'),
			icon: '🍂',
			color: 'from-orange-400 to-red-500',
			activities: $_('about.training.seasons.autumn.activities'),
			description: $_('about.training.seasons.autumn.description')
		},
		{
			season: $_('about.training.seasons.winter.season'),
			months: $_('about.training.seasons.winter.months'),
			icon: '❄️',
			color: 'from-blue-400 to-purple-500',
			activities: $_('about.training.seasons.winter.activities'),
			description: $_('about.training.seasons.winter.description')
		}
	];

	function setActiveSection(section: string) {
		activeSection = section;
	}
</script>

<style>
    .header-centre {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #475569, transparent);
        margin: 2rem 0;
        position: relative;
        z-index: 10;
    }

    .principle-card {
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .principle-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .season-card {
        transition: all 0.3s ease;
        backdrop-filter: blur(15px);
    }

    .season-card:hover {
        transform: scale(1.02);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    }

    .tab-button {
        transition: all 0.2s ease;
        backdrop-filter: blur(10px);
    }

    .tab-button.active {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .floating-icon {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }

    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>

<div class="w-full bg-gradient-to-b from-[#764ba2] to-[#ffffff] bg-cover bg-center bg-no-repeat py-8" id="whatTrain">
	<!-- <div class="divider"></div> -->
	<div class="header-centre">
		{$_('about.training.title')}
	</div>

	<!-- Tab Navigation -->
	<div class="flex justify-center mt-12 mb-8 space-x-4 px-4">
		<button
			class="tab-button px-6 py-3 rounded-full border border-white/30 text-white font-semibold {activeSection === 'principles' ? 'active' : ''}"
			on:click={() => setActiveSection('principles')}
		>
			🎯 {$_('about.training.tabs.principles')}
		</button>
		<button
			class="tab-button px-6 py-3 rounded-full border border-white/30 text-white font-semibold {activeSection === 'seasons' ? 'active' : ''}"
			on:click={() => setActiveSection('seasons')}
		>
			📅 {$_('about.training.tabs.seasons')}
		</button>
	</div>

	<div class="max-w-500 mx-auto px-4 sm:px-6 lg:px-8">

		{#if activeSection === 'principles'}
			<!-- Training Principles Section -->
			<div class="mb-12">
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold gradient-text mb">{$_('about.training.principles.sectionTitle')}</h2>
					<p class="text-lg text-slate-700 max-w-3xl mx-auto">
						{$_('about.training.principles.sectionSubtitle')}
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{#each trainingPrinciples as principle}
						<div class="principle-card bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30">
							<div class="floating-icon text-4xl mb-4">{principle.icon}</div>
							<h3 class="text-xl font-bold gradient-text mb-3">{principle.title}</h3>
							<p class="text-slate-700 mb-4">{principle.description}</p>
							<p class="text-sm text-slate-600 italic">{principle.details}</p>
						</div>
					{/each}
				</div>

				<!-- Key Benefits -->
				<div class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
					<h3 class="text-2xl font-bold gradient-text mb-6 text-center">{$_('about.training.principles.benefits.title')}</h3>
					<div class="grid md:grid-cols-2 gap-6">
						<div class="space-y-4">
							{#each $_('about.training.principles.benefits.list').slice(0, 3) as benefit}
								<div class="flex items-center space-x-3">
									<div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
									<span class="text-slate-700">{benefit}</span>
								</div>
							{/each}
						</div>
						<div class="space-y-4">
							{#each $_('about.training.principles.benefits.list').slice(3) as benefit}
								<div class="flex items-center space-x-3">
									<div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
									<span class="text-slate-700">{benefit}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if activeSection === 'seasons'}
			<!-- Seasonal Training Section -->
			<div class="mb-12">
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold gradient-text mb-4">{$_('about.training.seasons.sectionTitle')}</h2>
					<p class="text-lg text-slate-700 max-w-3xl mx-auto">
						{$_('about.training.seasons.sectionSubtitle')}
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{#each seasonalSchedule as season}
						<div class="season-card bg-gradient-to-br {season.color} p-6 rounded-2xl text-white shadow-lg">
							<div class="text-4xl mb-4 text-center">{season.icon}</div>
							<h3 class="text-xl font-bold mb-2 text-center">{season.season}</h3>
							<p class="text-center text-white/90 mb-4 font-medium">{season.months}</p>
							<p class="text-sm text-white/80 mb-4 text-center">{season.description}</p>

							<div class="space-y-2">
								{#each season.activities as activity}
									<div class="flex items-center space-x-2">
										<div class="w-1.5 h-1.5 bg-white rounded-full"></div>
										<span class="text-sm text-white/90">{activity}</span>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<!-- Year-Round Fitness Focus -->
				<div class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 mb-8">
					<div class="text-center">
						<h3 class="text-2xl font-bold gradient-text mb-4">💪 {$_('about.training.seasons.yearRoundTitle')}</h3>
						<p class="text-slate-700 mb-6 max-w-2xl mx-auto">
							{$_('about.training.seasons.yearRoundDescription')}
						</p>

						<div class="grid md:grid-cols-3 gap-6 mt-8">
							<div class="text-center">
								<div class="text-3xl mb-3">🏊‍♀️</div>
								<h4 class="font-semibold gradient-text mb-2">{$_('about.training.seasons.periods.water.title')}</h4>
								<p class="text-sm text-slate-600">{$_('about.training.seasons.periods.water.time')}<br>{$_('about.training.seasons.periods.water.description')}</p>
							</div>
							<div class="text-center">
								<div class="text-3xl mb-3">🏠</div>
								<h4 class="font-semibold gradient-text mb-2">{$_('about.training.seasons.periods.indoor.title')}</h4>
								<p class="text-sm text-slate-600">{$_('about.training.seasons.periods.indoor.time')}<br>{$_('about.training.seasons.periods.indoor.description')}</p>
							</div>
							<div class="text-center">
								<div class="text-3xl mb-3">🎯</div>
								<h4 class="font-semibold gradient-text mb-2">{$_('about.training.seasons.periods.individual.title')}</h4>
								<p class="text-sm text-slate-600">{$_('about.training.seasons.periods.individual.time')}<br>{$_('about.training.seasons.periods.individual.description')}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Training Intensity Chart -->
				<div class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
					<h3 class="text-2xl font-bold gradient-text mb-6 text-center">{$_('about.training.seasons.intensityTitle')}</h3>
					<div class="flex items-end justify-center space-x-2 h-32 mb-4">
						<div class="bg-gradient-to-t from-blue-500 to-blue-300 w-8 h-12 rounded-t"></div>
						<div class="bg-gradient-to-t from-green-500 to-green-300 w-8 h-20 rounded-t"></div>
						<div class="bg-gradient-to-t from-yellow-500 to-yellow-300 w-8 h-32 rounded-t"></div>
						<div class="bg-gradient-to-t from-orange-500 to-orange-300 w-8 h-28 rounded-t"></div>
						<div class="bg-gradient-to-t from-red-500 to-red-300 w-8 h-24 rounded-t"></div>
						<div class="bg-gradient-to-t from-purple-500 to-purple-300 w-8 h-16 rounded-t"></div>
					</div>
					<div class="flex justify-center space-x-6 text-xs text-slate-600">
						{#each $_('about.training.seasons.intensityLabels') as label}
							<span>{label}</span>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>