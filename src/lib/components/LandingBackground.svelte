<script lang="ts">
	import landingBackground from '$lib/assets/landing_background_dog_rest.jpg';
	import Footer from '$lib/components/Footer.svelte';
</script>

<style>
    .landing-background-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    .landing-background-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .content-wrapper {
        position: relative;
        min-height: 100vh;
        /* Add padding or content styling as needed */
    }

    .hero-section {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }

    .additional-content {
        background: white;
        padding: 4rem 2rem;
    }

    /* Grid for side-by-side sections */
    .sections-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto 4rem auto;
    }

    /* Individual section cards */
    .section-card {
        padding: 2.5rem;
        background: #f8f9fa;
        border-radius: 1rem;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .section-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .section-icon {
        display: inline-flex;
        padding: 1rem;
        background: white;
        border-radius: 50%;
        color: #3b82f6;
        margin-bottom: 1.5rem;
    }

    .section-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #1f2937;
    }

    .section-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    /* Bottom section styling */
    .bottom-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 1rem;
        padding: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        color: white;
    }

    .bottom-section-content {
        text-align: center;
    }

    .bottom-section-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .feature-number {
        font-size: 2rem;
        font-weight: bold;
        color: #fbbf24;
    }

    .feature-text {
        font-size: 0.875rem;
        opacity: 0.9;
    }

    .bottom-section-description {
        max-width: 800px;
        margin: 2rem auto 0;
        line-height: 1.6;
        opacity: 0.95;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .sections-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .features-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .section-card {
            padding: 1.5rem;
        }

        .bottom-section {
            padding: 2rem 1.5rem;
        }
    }
</style>

<!-- Fixed background image -->
<div class="landing-background-container">
	<img alt="dog" src="{landingBackground}">
</div>

<!-- Scrollable content -->
<div class="content-wrapper">
	<!-- First screen - hero section -->
	<div class="hero-section">
		<!-- Add your hero content here -->
		<div class="text-center text-white">
			<h1 class="text-5xl font-bold mb-4">No teretulemast!</h1>
			<p class="text-xl">Mingusugune jutt, mingisugune jant, mingid pildid? Facebooki feed? aasta/kuu/nädala koer?</p>
		</div>
	</div>

	<!-- Additional scrollable content below -->
	<div class="additional-content">
		<!-- Two sections side by side -->
		<div class="sections-grid">
			<!-- Left Section -->
			<div class="section-card">
				<div class="section-icon">
					<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
				</div>
				<h3 class="section-title">Kõik päästame ä!</h3>
				<p class="section-description">
					Siia saab midagi kirjutada, kui tahad saab ka lähemalt vaadata!
				</p>
				<button class="btn btn-primary mt-4">Vaata lähemalt</button>
			</div>

			<!-- Right Section -->
			<div class="section-card">
				<div class="section-icon">
					<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
					</svg>
				</div>
				<h3 class="section-title">Kes ei uju see upub!</h3>
				<p class="section-description">
					Kokad, kondiitrid keevitajad. Leemekulbiliigutajad.
					Teeme trenni, teeme demo, ülitoreülivahva
				</p>
				<button class="btn btn-secondary mt-4">Tutvu meiega</button>
			</div>
		</div>

		<!-- Bottom Section - Full Width -->
		<div class="bottom-section">
			<div class="bottom-section-content">
				<h2 class="bottom-section-title">A miks tulla uppuma?</h2>
				<div class="features-grid">
					<div class="feature-item">
						<span class="feature-number">24/7</span>
						<span class="feature-text">24 uppunut 7 aasta jooksul</span>
					</div>
					<div class="feature-item">
						<span class="feature-number">500+</span>
						<span class="feature-text">Märjakspritsitud inimest</span>
					</div>
					<div class="feature-item">
						<span class="feature-number">15+</span>
						<span class="feature-text">Rikutud riideesest</span>
					</div>
					<div class="feature-item">
						<span class="feature-number">100%</span>
						<span class="feature-text">Koerahais juures</span>
					</div>
				</div>
				<p class="bottom-section-description">
					A vot ära mõtle pikalt, tule uppuma!
					Kui veel kahtled, ära kahtle!
				</p>
			</div>
		</div>
	</div>
</div>
