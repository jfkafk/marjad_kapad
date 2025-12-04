<script lang="ts">
	import { aboutUs } from '$lib/data/about_us';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title">{$_('nav.about')}</h1>
			<div class="title-underline"></div>
		</div>

		<div class="content-wrapper">
			{#each aboutUs as section}
				<div class="section-card">
					<h2 class="section-title">{section.title}</h2>
					<div class="section-content">
						{#each section.content as paragraph}
							<p class="section-paragraph">{paragraph}</p>
						{/each}
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
		max-width: 900px;
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

	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.section-card {
		background: white;
		border-radius: 1rem;
		padding: 2.5rem;
		box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
		border: 1px solid rgba(102, 126, 234, 0.1);
		transition: all 0.3s ease;
	}

	.section-card:hover {
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
		transform: translateY(-3px);
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid transparent;
		border-image: linear-gradient(90deg, #667eea, #764ba2) 1;
	}

	.section-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.section-paragraph {
		color: #475569;
		line-height: 1.8;
		font-size: 1.05rem;
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.section-card {
			padding: 1.5rem;
		}

		.section-title {
			font-size: 1.5rem;
		}

		.section-paragraph {
			font-size: 1rem;
		}
	}
</style>
