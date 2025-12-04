<script lang="ts">
	import { dogs } from '$lib/data/dogs';
	import DogProfile from '$lib/components/DogProfile.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';

	const activeDogs = dogs.filter((d) => d.status === 'active' || !d.status);
	const retiredDogs = dogs.filter((d) => d.status === 'retired');
	const rainbowDogs = dogs.filter((d) => d.status === 'rainbow_bridge');
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title">{$_('nav.dogs')}</h1>
			<div class="title-underline"></div>
		</div>

		<!-- Active Dogs -->
		<section class="section">
			<h2 class="section-title">Meie Koerad</h2>
			<div class="dogs-grid">
				{#each activeDogs as dog}
					<DogProfile {dog} />
				{/each}
			</div>
		</section>

		<!-- Retired Dogs -->
		{#if retiredDogs.length > 0}
			<section class="section">
				<h2 class="section-title">Pensionil</h2>
				<div class="dogs-grid">
					{#each retiredDogs as dog}
						<DogProfile {dog} />
					{/each}
				</div>
			</section>
		{/if}

		<!-- Rainbow Bridge -->
		{#if rainbowDogs.length > 0}
			<section class="section">
				<h2 class="section-title">Taevastel Vetel</h2>
				<div class="dogs-grid">
					{#each rainbowDogs as dog}
						<DogProfile {dog} />
					{/each}
				</div>
			</section>
		{/if}
	</div>
</div>

<Footer />

<style>
	.page-wrapper {
		min-height: 100vh;
		background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
		padding: 4rem 1rem;
	}

	.page-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.page-title {
		font-size: 3rem;
		font-weight: 800;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
	}

	.title-underline {
		width: 100px;
		height: 4px;
		background: linear-gradient(90deg, #667eea, #764ba2);
		margin: 0 auto;
		border-radius: 2px;
	}

	.section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 2rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid transparent;
		border-image: linear-gradient(90deg, #667eea, #764ba2) 1;
		display: inline-block;
	}

	.dogs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.section-title {
			font-size: 1.5rem;
		}

		.dogs-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
