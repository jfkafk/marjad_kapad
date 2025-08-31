<script lang="ts">
	import landingBackground from '$lib/assets/drysuit_dog_boat_back.jpg';
</script>

<style>
    .landing-background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -10; /* Even more negative */
    }

    .landing-background-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -5; /* Between background and content */
        background:
                linear-gradient(to right, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)),
                linear-gradient(to bottom, rgba(255,255,255,0), #ffffff);
        background-blend-mode: lighten;
        pointer-events: none; /* Allow clicks to pass through */
    }

</style>

<!-- Fixed background image -->
<div class="landing-background-container">
	<img alt="dog" src="{landingBackground}">
</div>

<!-- Gradient overlay -->
<div class="gradient-overlay"></div>