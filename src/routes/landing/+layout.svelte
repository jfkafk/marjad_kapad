<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import LandingBackground from '$lib/components/LandingBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LandingData from '$lib/components/LandingData.svelte';
	import LandingNewsSection from '$lib/components/LandingNewsSection.svelte';
	import LandingCarousel from '$lib/components/LandingCarousel.svelte';
	import LandingFacebookReel from '$lib/components/LandingFacebookReel.svelte';
</script>

<div>
	<Header />
	<LandingBackground />
	<LandingData />
	<LandingNewsSection />
	<LandingCarousel />
	<Footer />
</div>
