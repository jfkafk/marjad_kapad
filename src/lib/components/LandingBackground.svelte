<script lang="ts">
	import { _ } from '$lib/i18n';
	import landingBackground from '$lib/assets/bandit_launch_big.jpg';
</script>

<style>
    .landing-background-container {
        position: absolute;
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
        background:
                linear-gradient(to right, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), /* horizontal gradient */
                linear-gradient(to bottom, rgba(255,255,255,0), #ffffff); /* vertical fade to white */
        background-blend-mode: lighten;
    }
</style>

<!-- Fixed background image -->
<div class="landing-background-container bg-no-repeat h-100vh">
	<img alt="dog" src="{landingBackground}">
</div>

<!-- Scrollable content -->
<div class="content-wrapper">
	<!-- First screen - hero section -->
	<div class="hero-section">
		<div class="flex flex-col items-center text-center w-3/5">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 break-words hyphens-auto text-white">
				Lõuna-Eesti vee&shy;pääste&shy;koerte grupp Märjad Käpad
			</h1>
			<p class="sm:text-xl font-semibold md:text-2xl text-violet-500 mb-8">
				{$_('landing.small_text')}
			</p>
			<a
				href="/store"
				class="mr-3 btn bg-gradient-to-r from-[#667eea] to-[#667eea] border-none
         text-white font-semibold shadow-none overflow-visible
         hover:shadow-[0_0_6px_6px_rgba(102,126,234,0.6)] hover:scale-105
         transition-all duration-150">
				{$_('nav.store')}
			</a>
		</div>
	</div>
</div>