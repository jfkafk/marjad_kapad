<script lang="ts">
	import { trainings } from '$lib/data/training_info';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title">{$_('nav.training')}</h1>
			<div class="title-underline"></div>
		</div>

		<div class="trainings-grid">
			{#each trainings as training}
				<div class="training-card">
					<div class="training-icon">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>

					<h2 class="training-title">{training.title}</h2>

					<div class="training-description">
						{#each training.description as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>

					<div class="training-details">
						{#if training.schedule}
							<div class="detail-item detail-schedule">
								<svg class="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{training.schedule}</span>
							</div>
						{/if}

						{#if training.location}
							<div class="detail-item detail-location">
								<svg class="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>{training.location}</span>
							</div>
						{/if}

						{#if training.price}
							<div class="detail-item detail-price">
								<svg class="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{training.price}</span>
							</div>
						{/if}
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
		background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
		padding: 4rem 1rem;
	}

	.page-container {
		max-width: 1200px;
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

	.trainings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
		gap: 2rem;
	}

	.training-card {
		background: white;
		border-radius: 1rem;
		padding: 2.5rem;
		box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
		border: 1px solid rgba(102, 126, 234, 0.1);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.training-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.training-icon {
		width: 4rem;
		height: 4rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	.training-icon svg {
		width: 2.5rem;
		height: 2.5rem;
		color: white;
	}

	.training-title {
		font-size: 1.75rem;
		font-weight: 700;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1.5rem;
	}

	.training-description {
		color: #475569;
		line-height: 1.7;
		margin-bottom: 2rem;
		flex-grow: 1;
	}

	.training-description p {
		margin-bottom: 1rem;
	}

	.training-description p:last-child {
		margin-bottom: 0;
	}

	.training-details {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(102, 126, 234, 0.2);
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		font-size: 0.95rem;
		font-weight: 500;
	}

	.detail-schedule {
		background: rgba(102, 126, 234, 0.08);
		color: #667eea;
	}

	.detail-location {
		background: rgba(16, 185, 129, 0.08);
		color: #10b981;
	}

	.detail-price {
		background: rgba(245, 158, 11, 0.08);
		color: #f59e0b;
	}

	.detail-icon {
		width: 1.25rem;
		height: 1.25rem;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.trainings-grid {
			grid-template-columns: 1fr;
		}

		.training-card {
			padding: 1.5rem;
		}

		.training-title {
			font-size: 1.5rem;
		}
	}
</style>
