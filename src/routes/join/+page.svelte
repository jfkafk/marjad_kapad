<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Form Data for Training
	let trainingForm = {
		name: '',
		email: '',
		phone: '',
		dogName: '',
		dogBreed: '',
		experience: '',
		message: ''
	};

	// Form Data for Spectator (Not used in new design, but kept for type safety if needed or future use)
	let spectatorForm = {
		name: '',
		email: '',
		phone: '',
		date: '',
		participants: '1',
		message: ''
	};

	let isSubmitting = false;
	let submitSuccess = false;
	let activeTab = 'training'; // 'training' or 'spectator'

	// Initialize tab from URL query param
	$: {
		const type = $page.url.searchParams.get('type');
		if (type === 'spectator') {
			activeTab = 'spectator';
		} else {
			activeTab = 'training';
		}
	}

	function setTab(tab: string) {
		activeTab = tab;
		const url = new URL($page.url);
		url.searchParams.set('type', tab);
		goto(url.toString(), { keepFocus: true, noScroll: true });
		submitSuccess = false; // Reset success state when switching tabs
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		const formData = trainingForm; // Only training form is submitted now
		console.log(`Training form submitted:`, formData);

		submitSuccess = true;
		isSubmitting = false;

		// Reset form after 3 seconds
		setTimeout(() => {
			trainingForm = {
				name: '',
				email: '',
				phone: '',
				dogName: '',
				dogBreed: '',
				experience: '',
				message: ''
			};
			submitSuccess = false;
		}, 3000);
	}
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<!-- Page Header -->
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">
				{activeTab === 'training' ? 'Liitu Treeninguga' : 'Külasta Treeningut'}
			</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				{activeTab === 'training'
					? "Täida vorm ja alusta oma koera treeningteekonda koos meiega / Fill out the form to start your dog's training journey with us"
					: 'Tule vaatama meie treeninguid ja õpi rohkem meie meetoditest / Come watch our training sessions and learn about our methods'}
			</p>
		</div>

		<!-- Tabs -->
		<div class="tabs-container animate-fade-in-up">
			<button
				class="tab-button {activeTab === 'training' ? 'active' : ''}"
				on:click={() => setTab('training')}
			>
				Tule Trenni
			</button>
			<button
				class="tab-button {activeTab === 'spectator' ? 'active' : ''}"
				on:click={() => setTab('spectator')}
			>
				Tule Vaatama
			</button>
		</div>

		{#if activeTab === 'training'}
			<div class="form-grid">
				<!-- Info Card -->
				<div class="info-card animate-fade-in-up animate-delay-1">
					<div class="info-icon">
						<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="info-title">Mida oodata?</h3>
					<ul class="info-list">
						<li>Professionaalsed treenerid</li>
						<li>Turvaline keskkond</li>
						<li>Individuaalne lähenemine</li>
						<li>Grupitreeningud</li>
						<li>Regulaarne tagasiside</li>
					</ul>
					<div class="info-highlight">
						<svg class="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<div>
							<p class="highlight-label">Vastame 24h jooksul</p>
							<p class="highlight-text">We'll respond within 24 hours</p>
						</div>
					</div>
				</div>

				<!-- Form Card -->
				<div class="form-card animate-fade-in-up animate-delay-2">
					{#if submitSuccess}
						<div class="success-message">
							<svg class="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<h3>Täname!</h3>
							<p>Sinu avaldus on edukalt saadetud. Võtame sinuga peagi ühendust.</p>
						</div>
					{:else}
						<form on:submit={handleSubmit}>
							<div class="form-row">
								<div class="form-group">
									<label for="t-name" class="form-label">
										<span>Nimi / Name</span>
										<span class="required">*</span>
									</label>
									<input
										type="text"
										id="t-name"
										bind:value={trainingForm.name}
										class="form-input"
										placeholder="Sinu nimi"
										required
									/>
								</div>

								<div class="form-group">
									<label for="t-email" class="form-label">
										<span>E-post / Email</span>
										<span class="required">*</span>
									</label>
									<input
										type="email"
										id="t-email"
										bind:value={trainingForm.email}
										class="form-input"
										placeholder="sinu@email.ee"
										required
									/>
								</div>
							</div>

							<div class="form-row">
								<div class="form-group">
									<label for="t-phone" class="form-label">
										<span>Telefon / Phone</span>
										<span class="required">*</span>
									</label>
									<input
										type="tel"
										id="t-phone"
										bind:value={trainingForm.phone}
										class="form-input"
										placeholder="+372 XXXX XXXX"
										required
									/>
								</div>

								<div class="form-group">
									<label for="dogName" class="form-label">
										<span>Koera nimi / Dog's Name</span>
										<span class="required">*</span>
									</label>
									<input
										type="text"
										id="dogName"
										bind:value={trainingForm.dogName}
										class="form-input"
										placeholder="Koera nimi"
										required
									/>
								</div>
							</div>

							<div class="form-group">
								<label for="dogBreed" class="form-label">
									<span>Koera tõug / Dog's Breed</span>
									<span class="required">*</span>
								</label>
								<input
									type="text"
									id="dogBreed"
									bind:value={trainingForm.dogBreed}
									class="form-input"
									placeholder="Tõug"
									required
								/>
							</div>

							<div class="form-group">
								<label for="experience" class="form-label">
									<span>Treeningkogemus / Training Experience</span>
								</label>
								<select id="experience" bind:value={trainingForm.experience} class="form-select">
									<option value="">Vali / Select</option>
									<option value="none">Pole kogemust / No experience</option>
									<option value="basic">Algteadmised / Basic</option>
									<option value="intermediate">Keskmine / Intermediate</option>
									<option value="advanced">Kogenud / Advanced</option>
								</select>
							</div>

							<div class="form-group">
								<label for="t-message" class="form-label">
									<span>Lisainfo / Additional Information</span>
								</label>
								<textarea
									id="t-message"
									bind:value={trainingForm.message}
									class="form-textarea"
									placeholder="Räägi meile oma koerast ja eesmärkidest..."
									rows="4"
								></textarea>
							</div>

							<button type="submit" class="submit-button" disabled={isSubmitting}>
								{#if isSubmitting}
									<svg class="spinner" viewBox="0 0 24 24">
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
											fill="none"
										/>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
									<span>Saadan...</span>
								{:else}
									<span>Saada avaldus</span>
									<svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Spectator View -->
			<div class="spectator-view animate-fade-in">
				<!-- Descriptions Grid -->
				<div class="descriptions-grid">
					<!-- Card 1: Training -->
					<div class="desc-card training">
						<div class="card-icon-wrapper">
							<svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								></path>
							</svg>
						</div>
						<h3>Treening</h3>
						<p>
							Tule vaata kuidas vetelpäästekoerad trenni teevad. Näed kuulekust, ujumist ja
							päästeharjutusi.
						</p>
						<div class="card-details">
							<div class="detail-row">
								<span class="detail-label">KESTUS:</span>
								<span class="detail-value">kuni 8h</span>
							</div>
							<div class="detail-row">
								<span class="detail-label">SIHTGRUPP:</span>
								<span class="detail-value">Kõik vanused</span>
							</div>
						</div>
						<a href="/invite" class="card-button">Kutsu meid! →</a>
					</div>

					<!-- Card 2: Demos -->
					<div class="desc-card demo">
						<div class="card-icon-wrapper">
							<svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
								></path>
							</svg>
						</div>
						<h3>Demo Vees</h3>
						<p>Põnev etteaste vees, kus näitame koerte ujumisoskusi ja vee-päästetööd.</p>
						<div class="card-details">
							<div class="detail-row">
								<span class="detail-label">KESTUS:</span>
								<span class="detail-value">kuni 3h</span>
							</div>
							<div class="detail-row">
								<span class="detail-label">SIHTGRUPP:</span>
								<span class="detail-value">Kõik vanused</span>
							</div>
						</div>
						<a href="/invite" class="card-button">Kutsu meid! →</a>
					</div>

					<!-- Card 3: Petting -->
					<div class="desc-card petting">
						<div class="card-icon-wrapper">
							<svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								></path>
							</svg>
						</div>
						<h3>Paitamise Demo</h3>
						<p>
							Näitame, kuidas õigesti läheneda ja paitada koeri. Õpime ära tundma koerte keelt ja
							märke.
						</p>
						<div class="card-details">
							<div class="detail-row">
								<span class="detail-label">KESTUS:</span>
								<span class="detail-value">kuni 8h</span>
							</div>
							<div class="detail-row">
								<span class="detail-label">SIHTGRUPP:</span>
								<span class="detail-value">Kõik vanused</span>
							</div>
						</div>
						<a href="/invite" class="card-button">Kutsu meid! →</a>
					</div>
				</div>

				<!-- Calendar Section -->
				<div class="calendar-section">
					<h3 class="calendar-title">Tule kohtu meiega järgnevatel üritustel</h3>
					<div class="calendar-container">
						<iframe
							title="Google Calendar showing upcoming events"
							src="https://calendar.google.com/calendar/embed?src=en.estonia%23holiday%40group.v.calendar.google.com&ctz=Europe%2FTallinn"
							style="border: 0"
							width="100%"
							height="600"
							frameborder="0"
							scrolling="no"
						>
						</iframe>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<Footer />

<style>
	.page-wrapper {
		min-height: 100vh;
		background: var(--gradient-background);
		padding: var(--space-4xl) var(--space-md);
	}

	.page-container {
		max-width: var(--container-xl);
		margin: 0 auto;
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--space-4xl);
	}

	.page-title {
		font-size: clamp(2rem, 5vw, var(--text-5xl));
		font-weight: var(--font-extrabold);
		margin-bottom: var(--space-md);
	}

	.title-underline {
		width: 100px;
		height: 4px;
		background: var(--gradient-primary);
		margin: 0 auto var(--space-lg);
		border-radius: var(--radius-full);
	}

	.page-subtitle {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.6;
	}

	/* Tabs */
	.tabs-container {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
		margin-bottom: var(--space-3xl);
	}

	.tab-button {
		background: var(--color-white);
		border: 2px solid transparent;
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-full);
		font-weight: var(--font-bold);
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: all var(--transition-base);
		box-shadow: var(--shadow-sm);
	}

	.tab-button:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		color: var(--color-primary-start);
	}

	.tab-button.active {
		background: var(--gradient-primary);
		color: var(--color-white);
		box-shadow: var(--shadow-lg);
	}

	/* Training View Grid */
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--space-3xl);
		align-items: start;
	}

	/* Spectator View Styles */
	.spectator-view {
		display: flex;
		flex-direction: column;
		gap: var(--space-4xl);
	}

	.descriptions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-xl);
	}

	.desc-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-xl);
		box-shadow: var(--shadow-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		transition: transform var(--transition-base);
		border-top: 6px solid;
	}

	.desc-card:hover {
		transform: translateY(-5px);
	}

	.desc-card.training {
		border-color: #ec4899;
	}
	.desc-card.demo {
		border-color: #3b82f6;
	}
	.desc-card.petting {
		border-color: #f59e0b;
	}

	.card-icon-wrapper {
		width: 48px;
		height: 48px;
		border-radius: var(--radius-lg);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-sm);
	}

	.training .card-icon-wrapper {
		background: rgba(236, 72, 153, 0.1);
		color: #ec4899;
	}
	.demo .card-icon-wrapper {
		background: rgba(59, 130, 246, 0.1);
		color: #3b82f6;
	}
	.petting .card-icon-wrapper {
		background: rgba(245, 158, 11, 0.1);
		color: #f59e0b;
	}

	.card-icon {
		width: 24px;
		height: 24px;
	}

	.desc-card h3 {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		color: var(--color-text-primary);
	}

	.desc-card p {
		color: var(--color-text-secondary);
		line-height: 1.5;
		flex-grow: 1;
	}

	.card-details {
		margin-top: var(--space-md);
		padding-top: var(--space-md);
		border-top: 1px solid #e2e8f0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		font-size: var(--text-sm);
	}

	.detail-label {
		font-weight: var(--font-bold);
		color: var(--color-text-muted);
	}

	.card-button {
		margin-top: var(--space-md);
		text-align: center;
		padding: var(--space-md);
		border-radius: var(--radius-lg);
		font-weight: var(--font-bold);
		color: var(--color-white);
		text-decoration: none;
		transition: opacity var(--transition-fast);
	}

	.card-button:hover {
		opacity: 0.9;
	}

	.training .card-button {
		background: #ec4899;
	}
	.demo .card-button {
		background: #3b82f6;
	}
	.petting .card-button {
		background: #f59e0b;
	}

	.calendar-section {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-2xl);
		box-shadow: var(--shadow-lg);
	}

	.calendar-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xl);
		text-align: center;
	}

	/* Info Card */
	.info-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-3xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
		position: sticky;
		top: var(--space-xl);
	}

	.info-icon {
		width: 64px;
		height: 64px;
		background: var(--gradient-primary);
		border-radius: var(--radius-xl);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-lg);
	}

	.info-icon svg {
		width: 32px;
		height: 32px;
		color: var(--color-white);
	}

	.info-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-lg);
	}

	.info-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-lg);
	}

	.info-list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-xl) 0;
	}

	.info-list li {
		padding: var(--space-sm) 0;
		color: var(--color-text-secondary);
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.info-list li::before {
		content: '✓';
		color: var(--color-success);
		font-weight: var(--font-bold);
		font-size: var(--text-lg);
	}

	.info-highlight {
		background: rgba(102, 126, 234, 0.08);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.highlight-icon {
		width: 32px;
		height: 32px;
		color: var(--color-primary-start);
		flex-shrink: 0;
	}

	.highlight-label {
		font-weight: var(--font-semibold);
		color: var(--color-text-primary);
		margin-bottom: var(--space-xs);
	}

	.highlight-text {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	/* Form Card */
	.form-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--space-3xl);
		box-shadow: var(--shadow-primary);
		border: 1px solid rgba(102, 126, 234, 0.1);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-lg);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.form-label {
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
		color: var(--color-text-primary);
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.required {
		color: var(--color-error);
	}

	.form-input,
	.form-select,
	.form-textarea {
		padding: var(--space-md);
		border: 2px solid #e2e8f0;
		border-radius: var(--radius-md);
		font-size: var(--text-base);
		font-family: inherit;
		transition: all var(--transition-fast);
		background: var(--color-white);
	}

	.form-input:focus,
	.form-select:focus,
	.form-textarea:focus {
		outline: none;
		border-color: var(--color-primary-start);
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
	}

	.form-textarea {
		resize: vertical;
		min-height: 100px;
	}

	.submit-button {
		background: var(--gradient-primary);
		color: var(--color-white);
		border: none;
		border-radius: var(--radius-lg);
		padding: var(--space-lg) var(--space-3xl);
		font-size: var(--text-lg);
		font-weight: var(--font-bold);
		cursor: pointer;
		transition: all var(--transition-base);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		box-shadow: var(--shadow-lg);
	}

	.submit-button:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-xl);
	}

	.submit-button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.button-icon {
		width: 20px;
		height: 20px;
		transition: transform var(--transition-fast);
	}

	.submit-button:hover:not(:disabled) .button-icon {
		transform: translateX(4px);
	}

	.spinner {
		width: 20px;
		height: 20px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	/* Success Message */
	.success-message {
		text-align: center;
		padding: var(--space-4xl) var(--space-xl);
	}

	.success-icon {
		width: 80px;
		height: 80px;
		color: var(--color-success);
		margin: 0 auto var(--space-xl);
		animation: scaleIn 0.5s ease-out;
	}

	.success-message h3 {
		font-size: var(--text-3xl);
		font-weight: var(--font-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-md);
	}

	.success-message p {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.form-grid {
			grid-template-columns: 1fr;
		}

		.info-card {
			position: static;
		}
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: var(--space-xl) var(--space-md);
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.form-card,
		.info-card {
			padding: var(--space-xl);
		}
	}

	@media (max-width: 480px) {
		.form-card,
		.info-card {
			padding: var(--space-lg);
		}

		.submit-button {
			padding: var(--space-md) var(--space-xl);
			font-size: var(--text-base);
		}
	}
</style>
