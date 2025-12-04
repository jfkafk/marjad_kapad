<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';

	// Mock Products
	const products = [
		{
			id: 1,
			name: 'Premium Training Leash',
			price: 24.99,
			category: 'gear',
			image: '🐕',
			description: 'Durable 2m leash for professional training.'
		},
		{
			id: 2,
			name: 'Water Rescue Vest',
			price: 89.99,
			category: 'water',
			image: '🦺',
			description: 'Professional grade buoyancy aid for dogs.'
		},
		{
			id: 3,
			name: 'Training Treats Pack',
			price: 12.99,
			category: 'food',
			image: '🦴',
			description: 'High-value rewards for positive reinforcement.'
		},
		{
			id: 4,
			name: 'Floating Dummy',
			price: 19.99,
			category: 'toys',
			image: '🦆',
			description: 'Perfect for water retrieval training.'
		},
		{
			id: 5,
			name: 'Clicker Pro',
			price: 5.99,
			category: 'gear',
			image: '🔘',
			description: 'Ergonomic clicker with volume control.'
		},
		{
			id: 6,
			name: 'Tug Toy',
			price: 15.99,
			category: 'toys',
			image: '🧶',
			description: 'Durable tug toy for drive building.'
		}
	];

	const categories = [
		{ id: 'all', name: 'Kõik tooted / All Products' },
		{ id: 'gear', name: 'Varustus / Gear' },
		{ id: 'water', name: 'Veetöö / Water Work' },
		{ id: 'food', name: 'Maiused / Treats' },
		{ id: 'toys', name: 'Mänguasjad / Toys' }
	];

	let activeCategory = 'all';

	$: filteredProducts =
		activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">E-Pood / Store</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				Parim varustus sinu koerale / Best gear for your dog
			</p>
		</div>

		<div class="store-layout">
			<!-- Sidebar -->
			<aside class="sidebar animate-fade-in-up animate-delay-1">
				<div class="card-premium category-card">
					<h3 class="sidebar-title">Kategooriad</h3>
					<ul class="category-list">
						{#each categories as cat}
							<li>
								<button
									class="category-btn {activeCategory === cat.id ? 'active' : ''}"
									on:click={() => (activeCategory = cat.id)}
								>
									{cat.name}
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</aside>

			<!-- Product Grid -->
			<main class="product-grid animate-fade-in-up animate-delay-2">
				{#each filteredProducts as product (product.id)}
					<div class="product-card card-premium" in:fade>
						<div class="product-image">
							<span class="emoji-img">{product.image}</span>
							<span class="badge-luxury price-tag">{product.price}€</span>
						</div>
						<div class="product-info">
							<h3 class="product-name">{product.name}</h3>
							<p class="product-desc">{product.description}</p>
							<button class="btn-cart btn-shimmer"> Lisa ostukorvi / Add to Cart </button>
						</div>
					</div>
				{/each}
			</main>
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
	}

	.store-layout {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: var(--space-xl);
	}

	@media (max-width: 768px) {
		.store-layout {
			grid-template-columns: 1fr;
		}
	}

	/* Sidebar */
	.category-card {
		padding: var(--space-lg);
		position: sticky;
		top: 100px;
	}

	.sidebar-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-lg);
		color: var(--color-text-primary);
	}

	.category-list {
		list-style: none;
		padding: 0;
	}

	.category-btn {
		width: 100%;
		text-align: left;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
		transition: all 0.2s;
		margin-bottom: var(--space-xs);
	}

	.category-btn:hover {
		background: rgba(102, 126, 234, 0.1);
		color: var(--color-primary-start);
	}

	.category-btn.active {
		background: var(--gradient-primary);
		color: var(--color-white);
	}

	/* Product Grid */
	.product-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.product-card {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	.product-image {
		height: 200px;
		background: #f1f5f9;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.emoji-img {
		font-size: 5rem;
	}

	.price-tag {
		position: absolute;
		top: var(--space-md);
		right: var(--space-md);
	}

	.product-info {
		padding: var(--space-lg);
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.product-name {
		font-size: var(--text-lg);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xs);
		color: var(--color-text-primary);
	}

	.product-desc {
		color: var(--color-text-secondary);
		font-size: var(--text-sm);
		margin-bottom: var(--space-lg);
		flex-grow: 1;
	}

	.btn-cart {
		width: 100%;
		padding: var(--space-md);
		background: var(--color-text-primary);
		color: var(--color-white);
		border-radius: var(--radius-lg);
		font-weight: var(--font-semibold);
		transition: transform 0.2s;
	}

	.btn-cart:hover {
		transform: translateY(-2px);
		background: black;
	}
</style>
