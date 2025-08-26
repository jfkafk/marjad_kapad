<script>
	import { _ } from '$lib/i18n';
</script>

<style>
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
        font-size: 3rem;
        font-weight: bold;
        color: #fbbf24;
    }

    .feature-text {
        font-size: 1.2rem;
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
			<h3 class="section-title">{$_('landing.sections.left_title')}</h3>
			<p class="section-description">
				{$_('landing.sections.left_description')}
			</p>
			<button class="btn btn-primary mt-4">{$_('landing.sections.left_button')}</button>
		</div>

		<!-- Right Section -->
		<div class="section-card">
			<div class="section-icon">
				<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
					<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
				</svg>
			</div>
			<h3 class="section-title">{$_('landing.sections.right_title')}</h3>
			<p class="section-description">
				{$_('landing.sections.right_description')}
			</p>
			<button class="btn btn-secondary mt-4">{$_('landing.sections.right_button')}</button>
		</div>
	</div>

	<!-- Bottom Section - Full Width -->
	<div class="bottom-section">
		<div class="bottom-section-content">
			<h2 class="bottom-section-title">{$_('landing.stats.title')}</h2>
			<div class="features-grid">
				<div class="feature-item">
					<span class="feature-number">20+</span>
					<span class="feature-text">{$_('landing.stats.dogs')}</span>
				</div>
				<div class="feature-item">
					<span class="feature-number">60+</span>
					<span class="feature-text">{$_('landing.stats.members')}</span>
				</div>
				<div class="feature-item">
					<span class="feature-number">100+</span>
					<span class="feature-text">{$_('landing.stats.events')}</span>
				</div>
				<div class="feature-item">
					<span class="feature-number">100%</span>
					<span class="feature-text">{$_('landing.stats.joy')}</span>
				</div>
			</div>
			<p class="bottom-section-description">
				{$_('landing.stats.description')}
			</p>
		</div>
	</div>
</div>