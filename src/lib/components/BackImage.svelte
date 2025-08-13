<script lang="ts">
	import comingSoonBack from '$lib/assets/marjad_kapad_logo_background.png';
	import BlurredBackground from '$lib/components/BlurredBackground.svelte';
</script>

<style>
    :global(html) {
        scrollbar-gutter: auto;
        overflow-y: auto;
    }

    .coming-soon-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>

<div class="coming-soon-container">
	<BlurredBackground imageUrl={comingSoonBack} />
</div>