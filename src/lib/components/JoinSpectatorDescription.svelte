<script lang="ts">
	import { onMount } from 'svelte';

	interface EventType {
		id: string;
		title: string;
		subtitle: string;
		description: string;
		icon: string;
		features: string[];
		duration: string;
		audience: string;
		gradient: string;
		bgColor: string;
		textColor: string;
	}

	let visibleCards: boolean[] = [];
	let hoveredCard: string | null = null;

	const eventTypes: EventType[] = [
		{
			id: 'paitamine',
			title: 'Paitamise Demo',
			subtitle: 'Tule katsu ja nuusuta koera',
			description: 'Näitame, kuidas õigesti läheneda ja paitada koeri. Õpime ära tundma koerte keelt ja märke.',
			icon: '🐕',
			features: [
				'Ujumistehnika näitamine',
				'Päästetöö harjutused',
				'Koerte veekindluse demo',
				'Interaktiivne osalus'
			],
			duration: 'kuni 8h',
			audience: 'Kõik vanused',
			gradient: 'from-amber-400 to-orange-500',
			bgColor: 'bg-amber-50',
			textColor: 'text-amber-800'
		},
		{
			id: 'vees',
			title: 'Demo Vees',
			subtitle: 'Veekoerte töö ja päästetöö',
			description: 'Põnev etteaste vees, kus näitame koerte ujumisoskusi ja vee-päästetööd.',
			icon: '🌊',
			features: [
				'Saad ise osaleda',
				'Päästetöö harjutused',
				'Saad õppida midagi',
				'ja veel mõni põhjus'
			],
			duration: 'kuni 3h',
			audience: 'Kõik vanused',
			gradient: 'from-cyan-400 to-blue-500',
			bgColor: 'bg-cyan-50',
			textColor: 'text-cyan-800'
		},
		{
			id: 'Trenn',
			title: 'Treening',
			subtitle: 'Tule vaata kuidas vetelpäästekoerad trenni teevad',
			description: 'Midagi muud huvitavat. Ilu mõttes võiks neid fantastilisi kaarte olla ikka 3',
			icon: '✨',
			features: [
				'Saad ise osaleda',
				'Päästetöö harjutused',
				'Saad õppida midagi',
				'ja veel mõni põhjus'
			],
			duration: 'kuni 8h',
			audience: 'Kõik vanused',
			gradient: 'from-rose-400 to-pink-500',
			bgColor: 'bg-rose-50',
			textColor: 'text-rose-800'
		}
	];

	onMount(() => {
		// Animate cards in sequence
		eventTypes.forEach((_, index) => {
			setTimeout(() => {
				visibleCards[index] = true;
				visibleCards = [...visibleCards];
			}, index * 150);
		});
	});

	function handleCardHover(eventId: string) {
		hoveredCard = eventId;
	}

	function handleCardLeave() {
		hoveredCard = null;
	}
</script>

<div class="event-types-container">
	<div class="content-wrapper">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
				Kus saate meid näha?
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Millised võimalused on tulla meiega tutvuma ja kaasa elama?
			</p>
		</div>

		<!-- Event Cards Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
			{#each eventTypes as event, index (event.id)}
				<div
					class="event-card {visibleCards[index] ? 'visible' : ''} {hoveredCard === event.id ? 'hovered' : ''}"
					on:mouseenter={() => handleCardHover(event.id)}
					on:mouseleave={handleCardLeave}
					role="article"
					tabindex="-1"
				>
					<div class="card-inner {event.bgColor}">
						<!-- Card Header -->
						<div class="card-header bg-gradient-to-r {event.gradient}">
							<div class="icon-container">
								<span class="text-4xl">{event.icon}</span>
							</div>
							<div class="header-text">
								<h3 class="text-xl font-bold text-white mb-1">{event.title}</h3>
								<p class="text-white/90 text-sm">{event.subtitle}</p>
							</div>
						</div>

						<!-- Card Content -->
						<div class="card-content">
							<p class="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

							<!-- Features -->
							<div class="features-list mb-6">
								<h4 class="font-semibold {event.textColor} mb-3 flex items-center">
									<span class="mr-2">🎯</span>
									Mida pakume:
								</h4>
								<ul class="space-y-2">
									{#each event.features as feature (feature)}
										<li class="flex items-start text-sm text-gray-600">
											<span class="mr-2 mt-0.5 text-green-500">✓</span>
											{feature}
										</li>
									{/each}
								</ul>
							</div>

							<!-- Event Details -->
							<div class="event-details grid grid-cols-2 gap-4">
								<div class="detail-item">
									<span class="label">Kestus:</span>
									<span class="value">{event.duration}</span>
								</div>
								<div class="detail-item">
									<span class="label">Sihtgrupp:</span>
									<span class="value">{event.audience}</span>
								</div>
							</div>
						</div>

						<!-- Card Footer -->
						<div class="card-footer">
							<a href="/invite" class="cta-button bg-gradient-to-r {event.gradient}">
								<span>Kutsu meid!</span>
								<span class="arrow">→</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
    .event-types-container {
        min-height: 100vh;
        padding: 4rem 0;
        position: relative;
    }

    .event-types-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    .content-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
    }

    .event-card {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .event-card.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .event-card.hovered {
        transform: translateY(-8px) scale(1.02);
    }

    .card-inner {
        background: white;
        border-radius: 1.5rem;
        box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.4s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .event-card:hover .card-inner {
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
    }

    .card-header {
        padding: 2rem;
        color: white;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
        overflow: hidden;
    }

    .card-header::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(30px, -30px);
    }

    .icon-container {
        flex-shrink: 0;
        width: 4rem;
        height: 4rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    }

    .header-text {
        flex: 1;
        z-index: 2;
    }

    .card-content {
        padding: 2rem;
        flex: 1;
    }

    .features-list ul {
        max-height: 120px;
        overflow-y: auto;
    }

    .event-details {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding-top: 1rem;
    }

    .detail-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .detail-item .label {
        font-size: 0.75rem;
        color: #6b7280;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .detail-item .value {
        font-size: 0.875rem;
        color: #374151;
        font-weight: 500;
    }

    .card-footer {
        padding: 0 2rem 2rem;
    }

    .cta-button {
        width: 100%;
        padding: 0.875rem 1.5rem;
        border: none;
        border-radius: 0.75rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-decoration: none;
    }

    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    }

    .cta-button .arrow {
        transition: transform 0.3s ease;
    }

    .cta-button:hover .arrow {
        transform: translateX(4px);
    }

    .cta-section {
        text-align: center;
    }

    .cta-card {
        background: white;
        border-radius: 2rem;
        padding: 3rem;
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        max-width: 600px;
        margin: 0 auto;
    }

    .primary-cta-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 160px;
    }

    .primary-cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -5px rgba(102, 126, 234, 0.4);
    }

    .secondary-cta-btn {
        border: 2px solid #667eea;
        color: #667eea;
        background: transparent;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 160px;
    }

    .secondary-cta-btn:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .event-types-container {
            padding: 2rem 0;
        }

        .card-header {
            padding: 1.5rem;
        }

        .card-content {
            padding: 1.5rem;
        }

        .cta-card {
            padding: 2rem;
        }
    }
</style>