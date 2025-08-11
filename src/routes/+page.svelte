<script lang="ts">
	import comingSoonBack from '$lib/assets/coming_soon_back.png';
	import fbookIcon from '$lib/assets/facebook.svg'
</script>

<style>
    /* Remove scrollbars globally */
    :global(html), :global(body) {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* Blurred background image */
    .background {
        position: absolute;
        inset: 0;
        background-image: url('{comingSoonBack}');
        background-size: cover;
        background-position: center;
        filter: blur(5px);
        transform: scale(1.05); /* hide blur edges */
        z-index: 0;
    }

    /* Dark overlay for text readability */
    .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.55);
        z-index: 1;
    }

    /* Text content */
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
</style>

<div class="container">
	<div
		class="background"
		style={`background-image: url('${comingSoonBack}')`}
	></div>

	<div class="overlay"></div>

	<div class="text_container">
		<h1>Avame varsti!</h1>
		<p>Senikaua jälgi meie tegemisi Facebookis</p>
		<a class="facebookIcon" href="https://www.facebook.com/p/L%C3%B5una-Eesti-veep%C3%A4%C3%A4stekoerte-grupp-M%C3%A4rjad-k%C3%A4pad-100066198655798/" target="_blank" rel="noopener noreferrer">
			<img
				src={fbookIcon}
				alt="Facebook"
			/>
		</a>
	</div>
</div>
