<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade, scale } from 'svelte/transition';

	// Import assets
	import img1 from '$lib/assets/Märjad käpad 15.05.21-54_websize.jpg';
	import img2 from '$lib/assets/bandit_launch_big.jpg';
	import img3 from '$lib/assets/boat_dog_back_big.jpg';
	import img4 from '$lib/assets/landing_background_dog_rest.jpg';
	import img5 from '$lib/assets/login_side_boss_snow.jpg';
	import img6 from '$lib/assets/login_side_sit_dog.jpg';
	import img7 from '$lib/assets/login_side_small_dog.jpg';
	import img8 from '$lib/assets/tractorist.png';

	let activeFilter = 'all';

	const galleryItems = [
		{ id: 1, src: img1, category: 'training', title: 'Water Rescue Training' },
		{ id: 2, src: img2, category: 'action', title: 'Big Launch' },
		{ id: 3, src: img3, category: 'water', title: 'Boat Patrol' },
		{ id: 4, src: img4, category: 'relax', title: 'Resting After Work' },
		{ id: 5, src: img5, category: 'winter', title: 'Winter Training' },
		{ id: 6, src: img6, category: 'training', title: 'Obedience' },
		{ id: 7, src: img7, category: 'puppy', title: 'Puppy School' },
		{ id: 8, src: img8, category: 'fun', title: 'Tractor Ride' }
	];

	$: filteredItems =
		activeFilter === 'all'
			? galleryItems
			: galleryItems.filter((item) => item.category === activeFilter);

	const filters = [
		{ id: 'all', label: 'Kõik / All' },
		{ id: 'training', label: 'Treening / Training' },
		{ id: 'water', label: 'Veetöö / Water Work' },
		{ id: 'fun', label: 'Vaba aeg / Fun' }
	];
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">Galerii</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				Hetked meie treeningutest ja üritustest / Moments from our trainings and events
			</p>
		</div>

		<!-- Filters -->
		<div class="filters-container animate-fade-in-up animate-delay-1">
			{#each filters as filter}
				<button
					class="filter-btn {activeFilter === filter.id ? 'active' : ''}"
					on:click={() => (activeFilter = filter.id)}
				>
					{filter.label}
				</button>
			{/each}
		</div>

		<!-- Gallery Grid -->
		<div class="gallery-grid animate-fade-in-up animate-delay-2">
			{#each filteredItems as item (item.id)}
				<div
					class="gallery-item card-premium"
					in:scale={{ duration: 300, start: 0.9 }}
					out:fade={{ duration: 200 }}
				>
					<div class="image-wrapper">
						<img src={item.src} alt={item.title} loading="lazy" />
						<div class="overlay">
							<span class="category-tag">{item.category}</span>
							<h3 class="image-title">{item.title}</h3>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<Footer />

<style>
	.page-wrapper {
		min-height: 100vh;
		background: var(--gradient-background);
		padding: var(--space-4xl) var(--space-md);
	}

	.page-container {
		max-width: var(--container-xl);
		margin: 0 auto;
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--space-4xl);
	}

	.page-title {
		font-size: clamp(2.5rem, 5vw, var(--text-5xl));
		font-weight: var(--font-extrabold);
		margin-bottom: var(--space-md);
	}

	.title-underline {
		width: 100px;
		height: 4px;
		background: var(--gradient-primary);
		margin: 0 auto var(--space-lg);
		border-radius: var(--radius-full);
	}

	.page-subtitle {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	/* Filters */
	.filters-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--space-md);
		margin-bottom: var(--space-3xl);
	}

	.filter-btn {
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-full);
		background: var(--color-white);
		border: 1px solid rgba(102, 126, 234, 0.2);
		color: var(--color-text-secondary);
		font-weight: var(--font-semibold);
		cursor: pointer;
		transition: all var(--transition-base);
		box-shadow: var(--shadow-sm);
	}

	.filter-btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-primary-start);
	}

	.filter-btn.active {
		background: var(--gradient-primary);
		color: var(--color-white);
		border-color: transparent;
		box-shadow: var(--shadow-primary);
	}

	/* Grid */
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-xl);
	}

	.gallery-item {
		padding: 0; /* Override card padding */
		overflow: hidden;
		cursor: pointer;
	}

	.image-wrapper {
		position: relative;
		aspect-ratio: 4/3;
		overflow: hidden;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.gallery-item:hover img {
		transform: scale(1.1);
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--space-lg);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.gallery-item:hover .overlay {
		opacity: 1;
	}

	.category-tag {
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-accent);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xs);
	}

	.image-title {
		color: var(--color-white);
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		transform: translateY(10px);
		transition: transform 0.3s ease;
	}

	.gallery-item:hover .image-title {
		transform: translateY(0);
	}
</style>
