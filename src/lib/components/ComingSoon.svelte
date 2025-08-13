<script lang="ts">
	import comingSoonBack from '$lib/assets/marjad_kapad_logo_background.png';
	import fbookIcon from '$lib/assets/facebook.svg';
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .text_container {
        position: relative;
        text-align: center;
        color: #c2ebff;
        font-size: 3rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        z-index: 2;
    }

    p {
        font-size: 2rem;
    }

    .facebookIcon {
        display: inline-block;
        margin-top: 1rem;
        transition: transform 0.2s ease;
    }

    .facebookIcon img {
        width: 48px;
        height: 48px;
        filter: brightness(0.9);
    }

    .facebookIcon:hover {
        transform: scale(1.1);
    }

    .facebookIcon:hover img {
        filter: brightness(1.2);
    }
</style>

<div class="coming-soon-container">
	<!-- Use the new BlurredBackground component -->
	<BlurredBackground imageUrl={comingSoonBack} />

	<div class="text_container">
		<h1>Avame varsti!</h1>
		<p>Senikaua jälgi meie tegemisi Facebookis</p>
		<a class="facebookIcon" href="https://www.facebook.com/p/L%C3%B5una-Eesti-veep%C3%A4%C3%A4stekoerte-grupp-M%C3%A4rjad-k%C3%A4pad-100066198655798/" target="_blank" rel="noopener noreferrer">
			<img src={fbookIcon} alt="Facebook" />
		</a>
	</div>
</div>