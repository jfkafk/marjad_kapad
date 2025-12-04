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
			<h1 class="page-title gradient-text animate-fade-in">{$_('nav.contact')}</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">Võta meiega ühendust / Get in touch with us</p>
		</div>

		<div class="content-grid">
			<!-- Contact Info Cards -->
			<div class="contact-cards-grid">
				<div class="contact-card animate-fade-in-up animate-delay-1">
					<div class="contact-icon">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</div>
					<h3 class="contact-card-title">Telefon / Phone</h3>
					<div class="contact-links">
						<a href="tel:+3725143247" class="contact-link">+372 514 3247</a>
						<a href="tel:+3725268380" class="contact-link">+372 526 8380</a>
					</div>
				</div>

				<div class="contact-card animate-fade-in-up animate-delay-2">
					<div class="contact-icon">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="contact-card-title">E-post / Email</h3>
					<div class="contact-links">
						<a href="mailto:toomas@werterix.ee" class="contact-link">toomas@werterix.ee</a>
						<a href="mailto:angelaleiaru@gmail.com" class="contact-link">angelaleiaru@gmail.com</a>
					</div>
				</div>

				<div class="contact-card animate-fade-in-up animate-delay-3">
					<div class="contact-icon">
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
					<h3 class="contact-card-title">Asukoht / Location</h3>
					<p class="contact-text">Tallinn, Eesti</p>
					<p class="contact-text-small">Täpne asukoht kokkuleppel / Exact location by agreement</p>
				</div>
			</div>

			<!-- Social Media Section -->
			<div class="social-card animate-fade-in-up animate-delay-4">
				<h3 class="social-title">Jälgi meid sotsiaalmeedias / Follow us on social media</h3>
				<a
					href="https://www.facebook.com/profile.php?id=100066198655798"
					target="_blank"
					rel="noopener noreferrer"
					class="facebook-button"
				>
					<svg fill="currentColor" viewBox="0 0 24 24" class="facebook-icon">
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
					<span>Külasta meie Facebook lehte</span>
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
		max-width: var(--container-lg);
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

	.contact-cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.contact-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-2xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
		transition: all var(--transition-base);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contact-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: var(--shadow-primary-hover);
	}

	.contact-icon {
		width: 64px;
		height: 64px;
		background: var(--gradient-primary);
		border-radius: var(--radius-xl);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-lg);
	}

	.contact-icon svg {
		width: 32px;
		height: 32px;
		color: var(--color-white);
	}

	.contact-card-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-md);
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		width: 100%;
	}

	.contact-link {
		color: var(--color-text-secondary);
		text-decoration: none;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
		font-size: var(--text-base);
	}

	.contact-link:hover {
		background: rgba(102, 126, 234, 0.1);
		color: var(--color-primary-start);
		transform: translateX(4px);
	}

	.contact-text {
		color: var(--color-text-secondary);
		font-size: var(--text-base);
		margin-bottom: var(--space-xs);
	}

	.contact-text-small {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
	}

	.social-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-3xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
		text-align: center;
	}

	.social-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-xl);
	}

	.facebook-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg) var(--space-2xl);
		background: #1877f2;
		color: var(--color-white);
		text-decoration: none;
		border-radius: var(--radius-lg);
		font-weight: var(--font-semibold);
		font-size: var(--text-lg);
		transition: all var(--transition-base);
		box-shadow: var(--shadow-lg);
	}

	.facebook-button:hover {
		background: #1564d1;
		transform: translateY(-4px);
		box-shadow: var(--shadow-xl);
	}

	.facebook-icon {
		width: 28px;
		height: 28px;
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: var(--space-xl) var(--space-md);
		}

		.page-header {
			margin-bottom: var(--space-xl);
		}

		.contact-cards-grid {
			grid-template-columns: 1fr;
		}

		.facebook-button {
			padding: var(--space-md) var(--space-lg);
			font-size: var(--text-base);
		}
	}

	@media (max-width: 480px) {
		.contact-card {
			padding: var(--space-lg);
		}

		.social-card {
			padding: var(--space-xl);
		}
	}
</style>
