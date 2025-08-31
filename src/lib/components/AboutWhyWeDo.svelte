<script lang="ts">
	import { _ } from '$lib/i18n';

	let hoveredCard: number | null = null;

	const motivations = [
		{
			id: 1,
			image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card1.title'),
			subtitle: $_('about.motivation.cards.card1.subtitle'),
			description: $_('about.motivation.cards.card1.description'),
			icon: '❤️'
		},
		{
			id: 2,
			image: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card2.title'),
			subtitle: $_('about.motivation.cards.card2.subtitle'),
			description: $_('about.motivation.cards.card2.description'),
			icon: '🏥'
		},
		{
			id: 3,
			image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card3.title'),
			subtitle: $_('about.motivation.cards.card3.subtitle'),
			description: $_('about.motivation.cards.card3.description'),
			icon: '👥'
		},
		{
			id: 4,
			image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card4.title'),
			subtitle: $_('about.motivation.cards.card4.subtitle'),
			description: $_('about.motivation.cards.card4.description'),
			icon: '🌟'
		},
		{
			id: 5,
			image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card5.title'),
			subtitle: $_('about.motivation.cards.card5.subtitle'),
			description: $_('about.motivation.cards.card5.description'),
			icon: '🔥'
		},
		{
			id: 6,
			image: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=800&h=600&fit=crop',
			title: $_('about.motivation.cards.card6.title'),
			subtitle: $_('about.motivation.cards.card6.subtitle'),
			description: $_('about.motivation.cards.card6.description'),
			icon: '🦋'
		}
	];

	function handleMouseEnter(id: number) {
		hoveredCard = id;
	}

	function handleMouseLeave() {
		hoveredCard = null;
	}
</script>

<style>
    .header-centre {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

    .motivation-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .motivation-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.4);
    }

    .image-overlay {
        background: linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.2) 50%,
                rgba(0, 0, 0, 0.6) 100%
        );
        transition: all 0.3s ease;
    }

    .motivation-card:hover .image-overlay {
        background: linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.1) 50%,
                rgba(0, 0, 0, 0.4) 100%
        );
    }

    .floating-icon {
        animation: float 3s ease-in-out infinite;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-8px) rotate(5deg);
        }
    }

    .text-gradient {
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .card-content {
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    .motivation-card:hover .card-content {
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(15px);
    }

    .pulse-ring {
        animation: pulse-ring 2s infinite;
    }

    @keyframes pulse-ring {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .grid-pattern {
        background-image:
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        animation: grid-move 20s linear infinite;
    }

    @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 30px 30px; }
    }

    .stagger-animation {
        animation: stagger-in 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }

    @keyframes stagger-in {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .stagger-animation:nth-child(1) { animation-delay: 0.1s; }
    .stagger-animation:nth-child(2) { animation-delay: 0.2s; }
    .stagger-animation:nth-child(3) { animation-delay: 0.3s; }
    .stagger-animation:nth-child(4) { animation-delay: 0.4s; }
    .stagger-animation:nth-child(5) { animation-delay: 0.5s; }
    .stagger-animation:nth-child(6) { animation-delay: 0.6s; }
</style>

<div class="w-full bg-gradient-to-b from-[#ffffff] to-[#1e293b] bg-cover bg-center bg-no-repeat py-8 relative overflow-hidden">
	<!-- Animated Background Pattern -->
	<div class="absolute inset-0 grid-pattern opacity-20"></div>

	<!-- <div class="divider"></div> -->
	<div class="header-centre relative z-10" id="why">
		{$_('about.motivation.title')}
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
		<!-- Introduction Text -->
		<div class="text-center mb-16">
			<p class="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
				{$_('about.motivation.subtitle')}
			</p>
		</div>

		<!-- Motivations Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each motivations as motivation (motivation.id)}
				<div
					class="motivation-card stagger-animation bg-white/10 rounded-2xl overflow-hidden relative group cursor-pointer"
					on:mouseenter={() => handleMouseEnter(motivation.id)}
					on:mouseleave={handleMouseLeave}
				>
					<!-- Image Container -->
					<div class="relative h-64 overflow-hidden">
						<img
							src={motivation.image}
							alt={motivation.title}
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div class="image-overlay absolute inset-0"></div>

						<!-- Floating Icon -->
						<div class="absolute top-4 right-4">
							<div class="floating-icon text-3xl">{motivation.icon}</div>
							{#if hoveredCard === motivation.id}
								<div class="absolute inset-0 pulse-ring border-2 border-white/50 rounded-full"></div>
							{/if}
						</div>
					</div>

					<!-- Content -->
					<div class="card-content p-6">
						<div class="mb-3">
							<h3 class="text-xl font-bold text-gradient mb-1">{motivation.title}</h3>
							<p class="text-sm text-white/70 font-medium">{motivation.subtitle}</p>
						</div>
						<p class="text-white/90 leading-relaxed text-sm">
							{motivation.description}
						</p>

						<!-- Hover Effect Bottom Border -->
						<div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Bottom Call to Action -->
		<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
			<div class="max-w-3xl mx-auto">
				<h3 class="text-2xl font-bold text-gradient mb-4">{$_('about.motivation.callToAction.title')}</h3>
				<p class="text-white/90 mb-6 leading-relaxed">
					{$_('about.motivation.callToAction.description')}
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm text-white/80">
					{#each $_('about.motivation.callToAction.features') as feature (feature)}
						<div class="flex items-center space-x-2">
							<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
							<span>{feature}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Stats Section -->
		<div class="grid md:grid-cols-4 gap-6 mt-12">
			<div class="text-center">
				<div class="text-3xl font-bold text-gradient mb-2">20+</div>
				<div class="text-white/70 text-sm">{$_('about.motivation.stats.dogs')}</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-gradient mb-2">15</div>
				<div class="text-white/70 text-sm">{$_('about.motivation.stats.experience')}</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-gradient mb-2">100%</div>
				<div class="text-white/70 text-sm">{$_('about.motivation.stats.satisfaction')}</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-gradient mb-2">∞</div>
				<div class="text-white/70 text-sm">{$_('about.motivation.stats.dedication')}</div>
			</div>
		</div>
	</div>
</div>