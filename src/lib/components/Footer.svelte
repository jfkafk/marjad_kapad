<script lang="ts">
	import { _ } from '$lib/i18n';

	const currentYear = new Date().getFullYear();

	// Helper function to replace {year} in copyright text
	function formatCopyright(text: string): string {
		return text.replace('{year}', currentYear.toString());
	}
</script>

<footer class="footer-wrapper">
	<div class="footer-content">
		<!-- Contacts Section -->
		<div class="contacts-grid">
			<!-- Contact 1 -->
			<div class="contact-card">
				<h4 class="contact-name">{$_('footer.contacts.person1_name')}</h4>
				<p class="contact-title">{$_('footer.contacts.person1_title')}</p>
			</div>

			<!-- Contact 2 -->
			<div class="contact-card">
				<h4 class="contact-name">{$_('footer.contacts.person2_name')}</h4>
				<p class="contact-title">{$_('footer.contacts.person2_title')}</p>
				<div class="contact-info">
					<a href="tel:+3725143247" class="contact-link">
						<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
						</svg>
						+372 514 3247
					</a>
					<a href="mailto:toomas@werterix.ee" class="contact-link">
						<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
						toomas@werterix.ee
					</a>
				</div>
			</div>

			<!-- Contact 3 -->
			<div class="contact-card">
				<h4 class="contact-name">{$_('footer.contacts.person3_name')}</h4>
				<p class="contact-title">{$_('footer.contacts.person3_title')}</p>
				<div class="contact-info">
					<a href="tel:+37252 8380" class="contact-link">
						<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
						</svg>
						+372 526 8380
					</a>
					<a href="mailto:angelaleiaru@gmail.com" class="contact-link">
						<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
						angelaleiaru@gmail.com
					</a>
				</div>
			</div>
		</div>

		<!-- Social Media Section -->
		<div class="social-section">
			<div class="social-links">
				<a href="https://www.facebook.com/profile.php?id=100066198655798" target="_blank" rel="noopener noreferrer" class="social-link facebook-link">
					<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
					<span>{$_('footer.social.facebook')}</span>
				</a>

				<a href="https://www.youtube.com/@MarjadKapad" target="_blank" rel="noopener noreferrer" class="social-link youtube-link">
					<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
					</svg>
					<span>{$_('footer.social.youtube')}</span>
				</a>
			</div>
		</div>

		<!-- Divider -->
		<div class="divider"></div>

		<!-- Creator Section -->
		<div class="creator-section">
			<p class="creator-text">
				{formatCopyright($_('footer.copyright'))}
			</p>
			<p class="creator-name">
				<a href="https://github.com/jfkafk">
					<strong>{$_('footer.creator')}</strong>
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
    .footer-wrapper {
        background: linear-gradient(135deg, #1e293b 0%, #1e293b 100%);
        color: white;
        padding: 3rem 2rem 1.5rem;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
    }

    /* Contacts Grid */
    .contacts-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .contact-card {
        text-align: center;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.75rem;
        backdrop-filter: blur(10px);
        transition: transform 0.3s ease, background 0.3s ease;
    }

    .contact-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.1);
    }

    .contact-name {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        color: #fbbf24;
    }

    .contact-title {
        font-size: 0.875rem;
        color: #94a3b8;
        margin-bottom: 1rem;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .contact-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: #e2e8f0;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.875rem;
    }

    .contact-link:hover {
        color: #60a5fa;
    }

    .icon {
        width: 1rem;
        height: 1rem;
    }

    /* Social Media Section */
    .social-section {
        text-align: center;
        margin: 2rem 0;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .social-link {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        color: white;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: background 0.3s ease, transform 0.3s ease;
        font-weight: 500;
    }

    .social-link:hover {
        transform: translateY(-2px);
    }

    .facebook-link {
        background: #1877f2;
    }

    .facebook-link:hover {
        background: #1564d1;
    }

    .youtube-link {
        background: #ff0000;
    }

    .youtube-link:hover {
        background: #e60000;
    }

    .social-icon {
        width: 1.5rem;
        height: 1.5rem;
    }

    /* Divider */
    .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #475569, transparent);
        margin: 2rem 0;
    }

    /* Creator Section */
    .creator-section {
        text-align: center;
        padding: 1rem 0;
    }

    .creator-text {
        font-size: 0.875rem;
        color: #94a3b8;
        margin-bottom: 0.5rem;
    }

    .creator-name {
        font-size: 0.875rem;
        color: #cbd5e1;
    }

    .creator-name strong {
        color: #fbbf24;
        font-weight: 600;
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .contacts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .contact-card {
            padding: 1rem;
        }

        .footer-wrapper {
            padding: 2rem 1rem 1rem;
        }

        .social-links {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
        }

        .social-link {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }

        .social-icon {
            width: 1.25rem;
            height: 1.25rem;
        }
    }

    @media (max-width: 480px) {
        .contact-link {
            font-size: 0.8rem;
        }

        .contact-name {
            font-size: 1.1rem;
        }
    }
</style>