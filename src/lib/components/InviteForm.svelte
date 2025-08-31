<script lang="ts">
	interface ContactForm {
		email: string;
		name: string;
		phone: string;
		date: string;
		time: string;
		location: string;
		eventType: string;
		expectations: string;
		audienceAge: string;
		description: string;
	}

	interface EventType {
		value: string;
		label: string;
		icon: string;
	}

	interface AudienceAge {
		value: string;
		label: string;
	}

	let formData: ContactForm = {
		email: '',
		name: '',
		phone: '',
		date: '',
		time: '',
		location: '',
		eventType: '',
		expectations: '',
		audienceAge: '',
		description: ''
	};

	let isSubmitting = false;
	let showSuccessMessage = false;

	const eventTypes: EventType[] = [
		{ value: 'paitamine', label: 'Paitamise demo', icon: '🐶' },
		{ value: 'vees', label: 'Demo vees', icon: '💧' },
		{ value: 'loeng', label: 'Loeng/presentatsioon', icon: '📖' },
		{ value: 'festival', label: 'Festival/üritus', icon: '🎪' },
		{ value: 'asi', label: 'mingi asi mis pidi olema aga nime ei mäleta', icon: '🎪' },
		{ value: 'kool', label: 'Kooli külastus', icon: '🏫' },
		{ value: 'muu', label: 'Muu (kirjelda)', icon: '❤️' }
	];

	const audienceAges: AudienceAge[] = [
		{ value: 'lapsed', label: 'Lapsed' },
		{ value: 'noored', label: 'Noored' },
		{ value: 'taiskasvanud', label: 'Täiskasvanud' },
		{ value: 'seganud', label: 'Segagrupp (erinevad vanused)' }
	];

	function handleSubmit(): void {
		isSubmitting = true;

		// Simulate form submission
		setTimeout(() => {
			console.log('Form submitted:', formData);
			isSubmitting = false;
			showSuccessMessage = true;

			// Reset form after success
			setTimeout(() => {
				showSuccessMessage = false;
				resetForm();
			}, 3000);
		}, 1500);
	}

	function resetForm(): void {
		formData = {
			email: '',
			name: '',
			phone: '',
			date: '',
			time: '',
			location: '',
			eventType: '',
			expectations: '',
			audienceAge: '',
			description: ''
		};
	}

	function isFormValid(): boolean {
		return !!(formData.email && formData.name && formData.phone &&
			formData.date && formData.location && formData.eventType &&
			formData.audienceAge);
	}
</script>

<div class="main-container">
	<div class="content-wrapper">
		<!-- Header Section -->
		<div class="header-section">
			<div class="header-centre">
				Kutsu meid külla!
			</div>
		</div>

		<!-- Introduction -->
		<div class="text-center mb-12">
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Täida vorm ja räägime läbi, kuidas saaksime Teie üritusel osaleda.
			</p>
		</div>

		{#if showSuccessMessage}
			<!-- Success Message -->
			<div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-center">
				<div class="text-4xl mb-4">✅</div>
				<h3 class="text-xl font-bold text-green-800 mb-2">Suurepärane!</h3>
				<p class="text-green-700">Teie sõnum on edukalt saadetud. Võtame teiega peagi ühendust!</p>
			</div>
		{:else}
			<!-- Contact Form -->
			<div class="max-w-4xl mx-auto">
				<form on:submit|preventDefault={handleSubmit} class="space-y-8">
					<!-- Personal Information -->
					<div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
						<h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
							<span class="text-2xl mr-3">👤</span>
							Kontaktandmed
						</h3>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="form-group">
								<label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
									Nimi *
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="Teie nimi"
								/>
							</div>

							<div class="form-group">
								<label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
									Email *
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="teie@email.ee"
								/>
							</div>

							<div class="form-group">
								<label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
									Telefon *
								</label>
								<input
									type="tel"
									id="phone"
									bind:value={formData.phone}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="+372 1234 5678"
								/>
							</div>
						</div>
					</div>

					<!-- Event Details -->
					<div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
						<h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
							<span class="text-2xl mr-3">🎯</span>
							Ürituse andmed
						</h3>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="form-group">
								<label for="date" class="block text-sm font-semibold text-gray-700 mb-2">
									Kuupäev *
								</label>
								<input
									type="date"
									id="date"
									bind:value={formData.date}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
								/>
							</div>

							<div class="form-group">
								<label for="time" class="block text-sm font-semibold text-gray-700 mb-2">
									Kellaaeg (24h vormingus)
								</label>
								<input
									type="time"
									id="time"
									bind:value={formData.time}
									step="900"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="14:30"
								/>
							</div>

							<div class="form-group md:col-span-2">
								<label for="location" class="block text-sm font-semibold text-gray-700 mb-2">
									Asukoht *
								</label>
								<input
									type="text"
									id="location"
									bind:value={formData.location}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="Ürituse toimumise koht"
								/>
							</div>
						</div>
					</div>

					<!-- Event Type and Audience -->
					<div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
						<h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
							<span class="text-2xl mr-3">🎪</span>
							Ürituse üksikasjad
						</h3>

						<div class="space-y-6">
							<div class="form-group">
								<fieldset>
									<legend class="block text-sm font-semibold text-gray-700 mb-3">
										Ürituse tüüp *
									</legend>
									<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
										{#each eventTypes as eventType (eventType.value)}
											<label class="cursor-pointer flex items-center p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-all duration-200 {formData.eventType === eventType.value ? 'border-blue-500 bg-blue-50' : ''}">
												<input
													type="radio"
													bind:group={formData.eventType}
													value={eventType.value}
													class="sr-only"
												/>
												<span class="text-xl mr-3">{eventType.icon}</span>
												<span class="text-sm font-medium text-gray-800">{eventType.label}</span>
											</label>
										{/each}
									</div>
								</fieldset>
							</div>

							<div class="form-group">
								<label for="audienceAge" class="block text-sm font-semibold text-gray-700 mb-2">
									Sihtgrupi vanus *
								</label>
								<select
									id="audienceAge"
									bind:value={formData.audienceAge}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
								>
									<option value="">Vali sihtgrupp...</option>
									{#each audienceAges as age (age.value)}
										<option value={age.value}>{age.label}</option>
									{/each}
								</select>
							</div>

							<div class="form-group">
								<label for="expectations" class="block text-sm font-semibold text-gray-700 mb-2">
									Mida sooviksite näha?
								</label>
								<textarea
									id="expectations"
									bind:value={formData.expectations}
									rows="3"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
									placeholder="Kirjeldage, millised tegevused teid kõige rohkem huvitaksid..."
								></textarea>
							</div>

							<div class="form-group">
								<label for="description" class="block text-sm font-semibold text-gray-700 mb-2">
									Lisainfo ja kommentaarid
								</label>
								<textarea
									id="description"
									bind:value={formData.description}
									rows="4"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
									placeholder="Lisage siia täiendav informatsioon või küsimused..."
								></textarea>
							</div>
						</div>
					</div>

					<!-- Submit Button -->
					<div class="text-center">
						<button
							type="submit"
							disabled={!isFormValid() || isSubmitting}
							class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								<span class="flex items-center">
									<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Saadan...
								</span>
							{:else}
								Saada sõnum
							{/if}
						</button>
					</div>
				</form>
			</div>
		{/if}
	</div>
</div>

<style>
    .main-container {
        width: 100%;
        background: linear-gradient(white, #1e293b);
        position: relative;
        overflow: hidden;
        padding: 3rem 0;
        min-height: 100vh;
    }

    .main-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(white, #1e293b);
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
        line-height: 1.1;
    }

    .form-group {
        position: relative;
    }

    input:focus, select:focus, textarea:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        .header-centre {
            font-size: 2rem;
        }
    }
</style>