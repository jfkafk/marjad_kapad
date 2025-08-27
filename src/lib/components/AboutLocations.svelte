<script lang="ts">
	import paala from "$lib/assets/paala_järv.jpg"
	import raudna from "$lib/assets/raudna_järv.webp"
	import arbi from "$lib/assets/arbi_järv.jpg"
	import n6o from "$lib/assets/n6o-paisjärv.jpg"
</script>

<style>
    .comparison-container {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 2rem auto;
        max-width: 1200px;
        width: 100%;
    }

    .comparison-wrapper {
        flex: 1;
        max-width: 500px;
    }

    .text-content {
        flex: 1;
        padding: 1rem;
    }

    .comparison-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #333;
    }

    .comparison-description {
        font-size: 1rem;
        line-height: 1.6;
        color: #666;
    }

    .custom-diff img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .comparison-container {
            flex-direction: column;
            gap: 1rem;
        }

        .text-content {
            text-align: center;
            padding: 1rem 0;
        }

        .comparison-title {
            font-size: 1.25rem;
        }
    }

    .header-centre {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    /* Divider */
    .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #475569, transparent);
        margin: 2rem 0;
    }
</style>

<div class="divider"></div>
<div class="header-centre">
	Kus me harjutame?
</div>

<div class="comparison-container">
	<div class="text-content">
		<h3 class="comparison-title">Viljandimaal- Raudna- ja Paala järv</h3>
		<p class="comparison-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</div>
	<div class="comparison-wrapper">
		<figure class="diff aspect-16/9" tabindex="-1">
			<div class="diff-item-1" role="img" tabindex="-1">
				<img alt="daisy" src={paala} />
			</div>
			<div class="diff-item-2" role="img">
				<img
					alt="daisy"
					src={raudna} />
			</div>
			<div class="diff-resizer"></div>
		</figure>
	</div>
</div>

<div class="comparison-container">
	<div class="comparison-wrapper">
		<figure class="diff aspect-16/9" tabindex="-1">
			<div class="diff-item-1" role="img" tabindex="-1">
				<img alt="daisy" src={arbi} />
			</div>
			<div class="diff-item-2" role="img">
				<img
					alt="daisy"
					src={n6o} />
			</div>
			<div class="diff-resizer"></div>
		</figure>
	</div>
	<div class="text-content">
		<h3 class="comparison-title">Tartumaal- Arbi Järv ja Nõo Paisjärv</h3>
		<p class="comparison-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</div>
</div>