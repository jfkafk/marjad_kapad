<!-- src/lib/components/BlurredBackground.svelte -->
<script lang="ts">
	interface Props {
		imageUrl: string;
		blurAmount?: string;
		overlayOpacity?: number;
		scale?: string;
	}

	let {
		imageUrl,
		blurAmount = '5px',
		overlayOpacity = 0.55,
		scale = '1.05'
	}: Props = $props();
</script>

<div class="background-container">
	<div
		class="background"
		style={`
      background-image: url('${imageUrl}');
      filter: blur(${blurAmount});
      transform: scale(${scale});
    `}
	></div>

	<div
		class="overlay"
		style={`background-color: rgba(0, 0, 0, ${overlayOpacity});`}
	></div>
</div>

<style>
    .background-container {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .background {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        z-index: 0;
    }

    .overlay {
        position: absolute;
        inset: 0;
        z-index: 1;
    }
</style>