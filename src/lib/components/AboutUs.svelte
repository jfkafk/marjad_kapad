<script lang="ts">
	export let mainTitle: string = "Kes me oleme?";
	export let cards: Array<{
		id: number;
		title: string;
		description: string;
		imageUrl: string;
		imageAlt: string;
		features?: string[];
		buttonText?: string;
		buttonLink?: string;
	}> = [
		{
			id: 1,
			title: "Sõbrad",
			description: "Professionaalne koerte koolitamine ja käitumise parandamine. Meie kogenud treenerid aitavad teil luua tugeva side oma neljakäpalise sõbraga ning õpetada talle vajalikke käske ja käitumismustreid.",
			imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
			imageAlt: "Koer õppimas käske",
			features: ["Individuaalne lähenemine", "Kogenud treenerid", "Tulemused garanteeritud"],
		},
		{
			id: 2,
			title: "Vabas Õhus Liikujad",
			description: "Täielik koerte hooldus ja iluteenused. Meie spetsialistid pakuvad teie lemmikulle parimat hooldust - alates pesemisest kuni küüniste lõikamiseni. Teie koer tuleb meie juurest värskena ja ilusana.",
			imageUrl: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=600&h=400&fit=crop",
			imageAlt: "Koera pesemise protsess",
			features: ["Kvaliteetsed tooted", "Sõbralik personal", "Mugav asukoht"],
		},
		{
			id: 3,
			title: "Õppurid",
			description: "Tervislikud ja hästi sotsiaalsustatud kutsikad otstavad uut kodu. Meie kutsikad kasvavad armastuses ja hooles, saavad parima veterinaarse järelevalve ning on valmis saama teie pere lahutamatuks osaks.",
			imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
			imageAlt: "Armsad kutsikad",
			features: ["Tervislikud kutsikad", "Kõik vajalikud dokumendid", "Eluaegne tugi"],
		},
		{
			id: 4,
			title: "Vabatathlikud",
			description: "Kvalifitseeritud veterinaarabi teie lemmikutele. Meie kliinikud pakuvad täispikka meditsiinilist abi - alates regulaarsetest kontrollidest kuni keeruliste operatsioonideni. Teie lemmiku tervis on meie prioriteet.",
			imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop",
			imageAlt: "Veterinaar koeraga",
			features: ["24/7 hädaabi", "Kaasaegne tehnika", "Kogenud arstid"],
		},
		{
			id: 5,
			title: "Elupäästjad",
			description: "Turvaline ja mugav koerte hotell teie puudumisel. Kui olete reisil või tööl, pakume teie lemmikule armastusrikast hooldust ja tähelepanu. Suured väljakud, mängukaaslased ja professionaalne personal.",
			imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
			imageAlt: "Koerad mängimas pensioni õues",
			features: ["Päev- ja ööpension", "Mänguväljakud", "Individuaalne tähelepanu"],
		}
	];
</script>

<style>
    .main-container {
        width: 100%;
        background: white;
        position: relative;
        overflow: hidden;
        padding: 2rem 0;
    }

    .main-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
    }

    .header-section {
        margin-bottom: 3rem;
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
        position: relative;
        z-index: 10;
        margin-bottom: 2rem;
    }

    .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #475569, transparent);
        margin: 2rem 0;
        position: relative;
        z-index: 10;
    }

    .cards-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 1.5rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
        overflow: hidden;
        position: relative;
        z-index: 10;
    }

    .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .card-content {
        display: grid;
        grid-template-columns: 1fr;
        min-height: 400px;
        align-items: center;
    }

    @media (min-width: 768px) {
        .card-content {
            grid-template-columns: 1fr 1fr;
        }

        .card-content.reverse {
            direction: rtl;
        }

        .card-content.reverse > * {
            direction: ltr;
        }
    }

    .card-image-container {
        position: relative;
        height: 300px;
        overflow: hidden;
    }

    @media (min-width: 768px) {
        .card-image-container {
            height: 400px;
        }
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .card:hover .card-image {
        transform: scale(1.1);
    }

    .card-text {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    @media (max-width: 767px) {
        .card-text {
            padding: 1.5rem;
        }
    }

    .card-title {
        font-size: 1.75rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #1e40af, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .card-description {
        font-size: 1rem;
        line-height: 1.6;
        color: #4b5563;
        margin-bottom: 1.5rem;
    }

    .card-features {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem 0;
    }

    .feature-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        color: #6b7280;
    }

    .feature-icon {
        width: 1rem;
        height: 1rem;
        background: linear-gradient(135deg, #10b981, #059669);
        border-radius: 50%;
        margin-right: 0.75rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 0.6rem;
        font-weight: bold;
    }

    @media (max-width: 640px) {
        .content-wrapper {
            padding: 0 0.5rem;
        }

        .header-centre {
            font-size: 2.5rem;
        }

        .card-title {
            font-size: 1.5rem;
        }

        .card-description {
            font-size: 0.95rem;
        }

        .card-image-container {
            height: 250px;
        }
    }
</style>

<div class="main-container">
	<div class="content-wrapper">
		<div class="header-section">
			<div class="divider"></div>
			<div class="header-centre">
				{mainTitle}
			</div>
		</div>

		<div class="cards-grid">
			{#each cards as card, index}
				<div class="card">
					<div class="card-content {index % 2 === 1 ? 'reverse' : ''}">
						<!-- Image -->
						<div class="card-image-container">
							<img
								src={card.imageUrl}
								alt={card.imageAlt}
								class="card-image"
								loading="lazy"
							/>
						</div>

						<!-- Text Content -->
						<div class="card-text">
							<h3 class="card-title">{card.title}</h3>
							<p class="card-description">{card.description}</p>

							{#if card.features && card.features.length > 0}
								<ul class="card-features">
									{#each card.features as feature}
										<li class="feature-item">
											<div class="feature-icon">✓</div>
											<span>{feature}</span>
										</li>
									{/each}
								</ul>
							{/if}

						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>