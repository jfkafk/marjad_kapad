<script lang="ts">
	import trainer from "$lib/assets/dog_in_suit.jpg"
	interface Trainer {
		id: number;
		name: string;
		specialty: string;
		image: string;
		description: string;
		certifications: string[];
		experience: string;
	}

	const trainers: Trainer[] = [
		{
			id: 1,
			name: "Valvi Väli",
			specialty: "Peatreener",
			image: trainer,
			description: "Valvi on peatreener ja muidu suur juht ja õpetaja. Ajab asja nii, et asi on aetud. Valvi on peatreener ja muidu suur juht ja õpetaja. Ajab asja nii, et asi on aetud. Valvi on peatreener ja muidu suur juht ja õpetaja. suur juht ja õpetaja.",
			certifications: ["Auh-Tase 1", "Auh-Tase 2", "Auh-Tase 3"],
			experience: "15+"
		},
		{
			id: 2,
			name: "Toomas Tamm",
			specialty: "Treener",
			image: trainer,
			description: "Toomas on treener ja muidu juht ja õpetaja. Ajab asja nii, et asi on aetud. Toomas on treener ja muidu juht ja õpetaja. Ajab asja nii, et asi on aetud. Toomas on treener ja muidu juht ja õpetaja. Ajab asja nii, et asi on aetud.",
			certifications: ["Auh-Tase 1", "Auh-Tase 2", "Auh-Tase 3"],
			experience: "10+"
		},
		{
			id: 3,
			name: "Angela Leiaru",
			specialty: "Treener",
			image: trainer,
			description: "Angela on treener ja muidu juht ja õpetaja ja õpetaja. Ajab asja nii, et asi on aetud. Angela on treener ja muidu juht ja õpetaja ja õpetaja. Ajab asja nii, et asi on aetud. la on treener ja muidu juht ja õpetaja ja õpetaja. A",
			certifications: ["Auh-Tase 1", "Auh-Tase 2", "Auh-Tase 3"],
			experience: "5+"
		}
	];
</script>

<div class="main-container" id="trainers">
	<!-- <div class="divider"></div> -->
	<div class="content-wrapper">
		<div class="header-section">
			<div class="header-centre">
				Kes on me Treenerid?
			</div>
		</div>

		<!-- Section Header -->
		<div class="text-center mb-16">
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Meil on kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige kõige
				kõige kõige kõige kõige kõigemad treenerid.
			</p>
		</div>

		<!-- Trainers Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
			{#each trainers as trainer}
				<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
					<!-- Trainer Image -->
					<div class="relative overflow-hidden">
						<img
							src={trainer.image}
							alt={trainer.name}
							class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>

					<!-- Trainer Content -->
					<div class="p-6">
						<!-- Name & Specialty -->
						<div class="mb-4">
							<h3 class="text-2xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
							<p class="text-blue-600 font-semibold">{trainer.specialty}</p>
						</div>

						<!-- Experience -->
						<div class="mb-4">
							<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
								<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								{trainer.experience} aastat kogemust
							</span>
						</div>

						<!-- Description -->
						<p class="text-gray-600 leading-relaxed mb-6">
							{trainer.description}
						</p>

						<!-- Certifications -->
						<div class="mb-6">
							<h4 class="text-sm font-semibold text-gray-900 mb-2">Tasemed:</h4>
							<div class="flex flex-wrap gap-2">
								{#each trainer.certifications as cert}
									<span class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200">
										{cert}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		</div>
</div>

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
        max-width: 1600px;
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
</style>