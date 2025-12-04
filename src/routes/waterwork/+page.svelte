<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">{$_('nav.waterwork')}</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">Veepääste koolitus / Water Rescue Training</p>
		</div>

		<div class="content-grid">
			<!-- Hero Section -->
			<div class="hero-card animate-fade-in-up">
				<div class="hero-icon">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
						/>
					</svg>
				</div>
				<h2 class="hero-title">Mis on veepääste koolitus?</h2>
				<p class="hero-description">
					Veepääste koolitus on spetsiaalne programm, mis õpetab koertele ja nende omanikele olulisi
					oskusi vees tegutsemiseks ja päästmiseks. Meie koolitusprogramm keskendub koerte loomulike
					võimete arendamisele ja omanike ettevalmistamisele.
				</p>
			</div>

			<!-- Features Grid -->
			<div class="features-grid">
				<div class="feature-card animate-fade-in-up animate-delay-1">
					<div class="feature-icon feature-icon-blue">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="feature-title">Professionaalne koolitus</h3>
					<p class="feature-description">
						Kogenud instruktorid juhendavad sind ja sinu koera läbi iga etapi, tagades ohutu ja
						tõhusa õppimisprotsessi.
					</p>
				</div>

				<div class="feature-card animate-fade-in-up animate-delay-2">
					<div class="feature-icon feature-icon-green">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="feature-title">Meeskonnatöö</h3>
					<p class="feature-description">
						Õpi töötama suurepärase meeskonnana oma koerega, arendades vastastikust usaldust ja
						suhtlemist.
					</p>
				</div>

				<div class="feature-card animate-fade-in-up animate-delay-3">
					<div class="feature-icon feature-icon-orange">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="feature-title">Kiired tulemused</h3>
					<p class="feature-description">
						Meie koolitusprogramm on loodud andma nähtavaid tulemusi juba esimestest sessioonidest
						alates.
					</p>
				</div>
			</div>

			<!-- Training Info Section -->
			<div class="training-info-card animate-fade-in-up animate-delay-4">
				<h2 class="info-title">Koolituse detailid / Training Details</h2>
				<div class="info-grid">
					<div class="info-item">
						<div class="info-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="info-content">
							<h4 class="info-label">Kestus / Duration</h4>
							<p class="info-value">Hooajal / Seasonal</p>
						</div>
					</div>

					<div class="info-item">
						<div class="info-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
						</div>
						<div class="info-content">
							<h4 class="info-label">Asukoht / Location</h4>
							<p class="info-value">Varieeruv / Varies</p>
						</div>
					</div>

					<div class="info-item">
						<div class="info-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</div>
						<div class="info-content">
							<h4 class="info-label">Tase / Level</h4>
							<p class="info-value">Kõik tasemed / All Levels</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div class="cta-card animate-fade-in-up animate-delay-5">
				<h2 class="cta-title">Huvitatud?</h2>
				<p class="cta-description">
					Võta meiega ühendust, et saada rohkem teavet veepääste koolituse kohta!
				</p>
				<a href="/contact" class="cta-button">
					<span>Võta ühendust</span>
					<svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</a>
			</div>
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
		font-size: clamp(2rem, 5vw, var(--text-5xl));
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

	.content-grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xl);
	}

	/* Hero Card */
	.hero-card {
		background: var(--color-white);
		border-radius: var(--radius-2xl);
		padding: var(--space-4xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
		text-align: center;
	}

	.hero-icon {
		width: 80px;
		height: 80px;
		background: var(--gradient-primary);
		border-radius: var(--radius-xl);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-xl);
	}

	.hero-icon svg {
		width: 48px;
		height: 48px;
		color: var(--color-white);
	}

	.hero-title {
		font-size: clamp(1.75rem, 3vw, var(--text-3xl));
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-lg);
	}

	.hero-description {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		line-height: 1.8;
		max-width: 800px;
		margin: 0 auto;
	}

	/* Features Grid */
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.feature-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-2xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
		transition: all var(--transition-base);
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: var(--shadow-primary-hover);
	}

	.feature-icon {
		width: 64px;
		height: 64px;
		border-radius: var(--radius-lg);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-lg);
	}

	.feature-icon svg {
		width: 32px;
		height: 32px;
		color: var(--color-white);
	}

	.feature-icon-blue {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	}

	.feature-icon-green {
		background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	}

	.feature-icon-orange {
		background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
	}

	.feature-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		color: var(--color-text-primary);
		margin-bottom: var(--space-md);
	}

	.feature-description {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	/* Training Info Card */
	.training-info-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-3xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
	}

	.info-title {
		font-size: var(--text-3xl);
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-2xl);
		text-align: center;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-xl);
	}

	.info-item {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: rgba(102, 126, 234, 0.05);
		transition: all var(--transition-fast);
	}

	.info-item:hover {
		background: rgba(102, 126, 234, 0.1);
		transform: translateX(4px);
	}

	.info-icon {
		width: 48px;
		height: 48px;
		background: var(--gradient-primary);
		border-radius: var(--radius-md);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.info-icon svg {
		width: 24px;
		height: 24px;
		color: var(--color-white);
	}

	.info-content {
		flex: 1;
	}

	.info-label {
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
		color: var(--color-text-muted);
		margin-bottom: var(--space-xs);
	}

	.info-value {
		font-size: var(--text-lg);
		font-weight: var(--font-semibold);
		color: var(--color-text-primary);
	}

	/* Call to Action */
	.cta-card {
		background: var(--gradient-primary);
		border-radius: var(--radius-2xl);
		padding: var(--space-4xl);
		text-align: center;
		color: var(--color-white);
		box-shadow: var(--shadow-xl);
	}

	.cta-title {
		font-size: var(--text-4xl);
		font-weight: var(--font-extrabold);
		margin-bottom: var(--space-md);
	}

	.cta-description {
		font-size: var(--text-lg);
		margin-bottom: var(--space-xl);
		opacity: 0.95;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg) var(--space-3xl);
		background: var(--color-white);
		color: var(--color-primary-start);
		text-decoration: none;
		border-radius: var(--radius-lg);
		font-weight: var(--font-bold);
		font-size: var(--text-lg);
		transition: all var(--transition-base);
		box-shadow: var(--shadow-lg);
	}

	.cta-button:hover {
		transform: translateY(-4px) scale(1.05);
		box-shadow: var(--shadow-2xl);
	}

	.cta-icon {
		width: 24px;
		height: 24px;
		transition: transform var(--transition-fast);
	}

	.cta-button:hover .cta-icon {
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: var(--space-xl) var(--space-md);
		}

		.page-header {
			margin-bottom: var(--space-xl);
		}

		.hero-card {
			padding: var(--space-xl);
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}

		.cta-card {
			padding: var(--space-xl);
		}
	}

	@media (max-width: 480px) {
		.hero-card,
		.feature-card,
		.training-info-card {
			padding: var(--space-lg);
		}

		.cta-button {
			padding: var(--space-md) var(--space-xl);
			font-size: var(--text-base);
		}
	}
</style>
