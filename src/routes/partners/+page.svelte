<script lang="ts">
	import { partners } from '$lib/data/partners';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title">{$_('nav.partners')}</h1>
			<div class="title-underline"></div>
		</div>

		<div class="partners-grid">
			{#each partners as partner}
				<div class="partner-card">
					<div class="partner-icon">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>

					<h2 class="partner-name">{partner.name}</h2>

					{#if partner.description}
						<p class="partner-description">{partner.description}</p>
					{/if}

					{#if partner.website}
						<a
							href={partner.website}
							target="_blank"
							rel="noopener noreferrer"
							class="partner-link"
						>
							<svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
							Külasta kodulehte
						</a>
					{/if}
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

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.partner-card {
		background: white;
		border-radius: 1rem;
		padding: 2.5rem;
		box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
		border: 1px solid rgba(102, 126, 234, 0.1);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.partner-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.partner-icon {
		width: 5rem;
		height: 5rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	.partner-icon svg {
		width: 3rem;
		height: 3rem;
		color: white;
	}

	.partner-name {
		font-size: 1.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
	}

	.partner-description {
		color: #475569;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	.partner-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: all 0.3s ease;
		margin-top: auto;
	}

	.partner-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
	}

	.link-icon {
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

		.partners-grid {
			grid-template-columns: 1fr;
		}

		.partner-card {
			padding: 1.5rem;
		}
	}
</style>
