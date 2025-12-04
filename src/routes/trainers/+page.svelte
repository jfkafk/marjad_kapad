<script lang="ts">
	import { trainers } from '$lib/data/trainers';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title">{$_('nav.trainers')}</h1>
			<div class="title-underline"></div>
		</div>

		<div class="trainers-grid">
			{#each trainers as trainer}
				<div class="trainer-card">
					{#if trainer.image}
						<div class="trainer-image">
							<img src={trainer.image} alt={trainer.name} />
						</div>
					{:else}
						<div class="trainer-placeholder">
							<svg class="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</div>
					{/if}
					<div class="trainer-content">
						<h2 class="trainer-name">{trainer.name}</h2>
						<span class="trainer-role">{trainer.role}</span>
						<p class="trainer-description">{trainer.description}</p>

						{#if trainer.email || trainer.phone}
							<div class="trainer-divider"></div>
							<div class="trainer-contact">
								{#if trainer.email}
									<a href="mailto:{trainer.email}" class="contact-link">
										<svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										{trainer.email}
									</a>
								{/if}
								{#if trainer.phone}
									<a href="tel:{trainer.phone}" class="contact-link">
										<svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
										{trainer.phone}
									</a>
								{/if}
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

	.trainers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.trainer-card {
		background: white;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
		transition: all 0.3s ease;
		border: 1px solid rgba(102, 126, 234, 0.1);
	}

	.trainer-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.trainer-image img {
		width: 100%;
		height: 16rem;
		object-fit: cover;
		display: block;
	}

	.trainer-placeholder {
		width: 100%;
		height: 16rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-icon {
		width: 5rem;
		height: 5rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.trainer-content {
		padding: 2rem;
		text-align: center;
	}

	.trainer-name {
		font-size: 1.75rem;
		font-weight: 700;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.trainer-role {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.trainer-description {
		white-space: pre-line;
		color: #475569;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.trainer-divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
		margin: 1.5rem 0;
	}

	.trainer-contact {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.contact-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: #667eea;
		text-decoration: none;
		transition: all 0.3s ease;
		font-size: 0.875rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.contact-link:hover {
		background: rgba(102, 126, 234, 0.1);
		color: #764ba2;
	}

	.contact-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.trainers-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
