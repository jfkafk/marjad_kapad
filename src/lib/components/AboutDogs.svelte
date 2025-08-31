<script lang="ts">
	import { _ } from '$lib/i18n';
	import boatDog from '$lib/assets/boat_dog_back_big.jpg';
	import smallDog from '$lib/assets/login_side_small_dog.jpg';
	import banditLaunch from '$lib/assets/bandit_launch_big.jpg';
	import sittingDog from '$lib/assets/login_side_sit_dog.jpg';
	import man from '$lib/assets/tractorist.png';
	import paala from '$lib/assets/paala_järv.jpg';
	import snow from '$lib/assets/login_side_boss_snow.jpg';
	import { onDestroy, onMount, tick } from 'svelte';

	// Current slide state
	let currentSlide = 1;
	let carouselElement: HTMLElement;

	// Simplified slide data - removed massive text blocks
	const slides = [
		{ id: 1, image: sittingDog, alt: "Sitting dog", text: $_('about.dogs.text1') },
		{ id: 2, image: smallDog, alt: "Small dog", text: $_('about.dogs.text2') },
		{ id: 3, image: boatDog, alt: "Boat dog", text: $_('about.dogs.text3') },
		{ id: 4, image: banditLaunch, alt: "Bandit launch", text: $_('about.dogs.text4') },
		{ id: 5, image: man, alt: "Tractorist", text: $_('about.dogs.text5') },
		{ id: 6, image: paala, alt: "Paala lake", text: $_('about.dogs.text6') },
		{ id: 7, image: snow, alt: "Snow scene", text: $_('about.dogs.text7') },
		{ id: 8, image: sittingDog, alt: "Sitting dog", text: $_('about.dogs.text8') },
		{ id: 9, image: smallDog, alt: "Small dog", text: $_('about.dogs.text9') },
		{ id: 10, image: boatDog, alt: "Boat dog", text: $_('about.dogs.text10') },
		{ id: 11, image: banditLaunch, alt: "Bandit launch", text: $_('about.dogs.text11') },
		{ id: 12, image: man, alt: "Tractorist", text: $_('about.dogs.text12') },
		{ id: 13, image: paala, alt: "Paala lake", text: $_('about.dogs.text13') },
		{ id: 14, image: snow, alt: "Snow scene", text: $_('about.dogs.text14') },
		{ id: 15, image: banditLaunch, alt: "Bandit launch", text: $_('about.dogs.text15') }
	];

	const totalSlides = slides.length;

	async function goToSlide(slideId: string) {
		await tick(); // Ensure DOM is updated
		const element = document.getElementById(slideId);
		if (element && carouselElement) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
			// Update current slide number
			const slideNumber = parseInt(slideId.replace('slide', ''));
			if (!isNaN(slideNumber)) {
				currentSlide = slideNumber;
			}
		}
	}

	function goToPrevious(currentId: number) {
		const prevId = currentId === 1 ? totalSlides : currentId - 1;
		goToSlide(`slide${prevId}`);
	}

	function goToNext(currentId: number) {
		const nextId = currentId === totalSlides ? 1 : currentId + 1;
		goToSlide(`slide${nextId}`);
	}

	// Observer to track which slide is currently visible
	let observer: IntersectionObserver | undefined;

	function setupObserver() {
		// Clean up existing observer first
		if (observer) {
			observer.disconnect();
			observer = undefined;
		}

		if (typeof window === 'undefined' || !carouselElement) return;

		try {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
							const slideNumber = parseInt(entry.target.id.replace('slide', ''));
							if (!isNaN(slideNumber) && slideNumber !== currentSlide) {
								currentSlide = slideNumber;
							}
						}
					});
				},
				{
					threshold: 0.5,
					root: carouselElement
				}
			);

			// Observe all slides with error handling
			for (let i = 1; i <= totalSlides; i++) {
				const slide = document.getElementById(`slide${i}`);
				if (slide && observer) {
					observer.observe(slide);
				}
			}
		} catch (error) {
			console.warn('Failed to setup intersection observer:', error);
		}
	}

	onMount(async () => {
		await tick(); // Wait for DOM to be ready
		setupObserver();
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
			observer = undefined;
		}
	});

	// Reactive statement to handle carousel element changes
	$: if (carouselElement) {
		setupObserver();
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

    .carousel {
        scroll-behavior: smooth;
        contain: layout style paint; /* Optimize rendering */
    }

    .carousel-item {
        scroll-margin-top: 0;
        contain: layout style paint; /* Optimize rendering */
    }

    .slide-text {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 1.5rem auto;
        max-width: 1500px;
        box-shadow: 0 10px 10px -12px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
    }

    .slide-img {
        will-change: transform; /* Optimize for animations */
    }

    @media (max-width: 640px) {
        .slide-text {
            font-size: 1rem;
            padding: 1rem;
            margin: 1rem;
        }

        .header-centre {
            font-size: 2rem;
        }
    }
</style>

<div class="w-full bg-gradient-to-b from-[#ffffff] to-[#667eea] bg-cover bg-center bg-no-repeat py-8" id="dogs">
	<!-- <div class="divider"></div> -->
	<div class="header-centre">
		{$_('about.dogs.title')}
	</div>

	<div class="w-full py-4 sm:py-6 lg:py-8">
		<div class="carousel-container flex justify-center">
			<div bind:this={carouselElement} class="carousel w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 max-w-7xl h-48 xs:h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">

				{#each slides as slide (slide.id)}
					<div id="slide{slide.id}" class="carousel-item relative w-full h-full">
						<img
							alt={slide.alt}
							src={slide.image}
							class="slide-img w-full h-48 xs:h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-cover"
							loading="lazy"
						/>
						<div class="absolute left-1 right-1 xs:left-2 xs:right-2 sm:left-4 sm:right-4 lg:left-6 lg:right-6 top-1/2 flex -translate-y-1/2 transform justify-between">
							<button
								type="button"
								class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg transition-all duration-200"
								on:click={() => goToPrevious(slide.id)}
								aria-label="Previous slide"
							>
								❮
							</button>
							<button
								type="button"
								class="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white shadow-lg transition-all duration-200"
								on:click={() => goToNext(slide.id)}
								aria-label="Next slide"
							>
								❯
							</button>
						</div>
					</div>
				{/each}

			</div>
		</div>

		<!-- Dynamic text section below carousel -->
		<div class="slide-text">
			{slides[currentSlide - 1]?.text || 'Loading...'}
		</div>

		<!-- Optional: Slide indicators -->
		<div class="flex justify-center mt-4 space-x-2">
			{#each slides as slide (`slide-${slide.id}`)}
				<button
					type="button"
					class="w-2 h-2 rounded-full transition-all duration-200 {currentSlide === slide.id ? 'bg-blue-600 w-6' : 'bg-blue-300 hover:bg-blue-400'}"
					on:click={() => goToSlide(`slide${slide.id}`)}
					aria-label="Go to slide {slide.id}"
				></button>
			{/each}
		</div>
	</div>
</div>