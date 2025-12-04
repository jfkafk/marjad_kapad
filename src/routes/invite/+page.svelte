<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from '$lib/i18n';

	let formData = {
		yourName: '',
		yourEmail: '',
		yourPhone: '',
		friendName: '',
		friendEmail: '',
		friendPhone: '',
		message: ''
	};

	let isSubmitting = false;
	let submitSuccess = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log('Invite form submitted:', formData);
		submitSuccess = true;
		isSubmitting = false;

		// Reset form after 3 seconds
		setTimeout(() => {
			formData = {
				yourName: '',
				yourEmail: '',
				yourPhone: '',
				friendName: '',
				friendEmail: '',
				friendPhone: '',
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
			<h1 class="page-title gradient-text animate-fade-in">Kutsu Sõber</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				Jaga koertetreeningu rõõmu oma sõpradega / Share the joy of dog training with your friends
			</p>
		</div>

		<div class="form-grid">
			<!-- Info Card -->
			<div class="info-card animate-fade-in-up animate-delay-1">
				<div class="info-icon">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</div>
				<h3 class="info-title">Soovita meid</h3>
				<p class="info-description">
					Tunned kedagi, keda võiks huvitada koerte treening? Saada meile kutse ja me võtame
					ühendust!
				</p>

				<div class="benefits-list">
					<div class="benefit-item">
						<div class="benefit-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div class="benefit-content">
							<h4 class="benefit-title">Tasuta tutvustus</h4>
							<p class="benefit-text">Sinu sõber saab tasuta tutvustuse</p>
						</div>
					</div>

					<div class="benefit-item">
						<div class="benefit-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="benefit-content">
							<h4 class="benefit-title">Soodustus sulle</h4>
							<p class="benefit-text">Kui sõber liitub, saad soodustuse</p>
						</div>
					</div>

					<div class="benefit-item">
						<div class="benefit-icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<div class="benefit-content">
							<h4 class="benefit-title">Kasva koos</h4>
							<p class="benefit-text">Treenige koos sõpradega</p>
						</div>
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
						<h3>Kutse saadetud!</h3>
						<p>Võtame sinu sõbraga ühendust ja räägime treening võimalustest.</p>
					</div>
				{:else}
					<form on:submit={handleSubmit}>
						<div class="section-header">
							<h3 class="section-title">Sinu andmed / Your Information</h3>
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="yourName" class="form-label">
									<span>Sinu nimi / Your Name</span>
									<span class="required">*</span>
								</label>
								<input
									type="text"
									id="yourName"
									bind:value={formData.yourName}
									class="form-input"
									placeholder="Sinu nimi"
									required
								/>
							</div>

							<div class="form-group">
								<label for="yourEmail" class="form-label">
									<span>Sinu e-post / Your Email</span>
									<span class="required">*</span>
								</label>
								<input
									type="email"
									id="yourEmail"
									bind:value={formData.yourEmail}
									class="form-input"
									placeholder="sinu@email.ee"
									required
								/>
							</div>
						</div>

						<div class="form-group">
							<label for="yourPhone" class="form-label">
								<span>Sinu telefon / Your Phone</span>
							</label>
							<input
								type="tel"
								id="yourPhone"
								bind:value={formData.yourPhone}
								class="form-input"
								placeholder="+372 XXXX XXXX"
							/>
						</div>

						<div class="divider"></div>

						<div class="section-header">
							<h3 class="section-title">Sõbra andmed / Friend's Information</h3>
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="friendName" class="form-label">
									<span>Sõbra nimi / Friend's Name</span>
									<span class="required">*</span>
								</label>
								<input
									type="text"
									id="friendName"
									bind:value={formData.friendName}
									class="form-input"
									placeholder="Sõbra nimi"
									required
								/>
							</div>

							<div class="form-group">
								<label for="friendEmail" class="form-label">
									<span>Sõbra e-post / Friend's Email</span>
									<span class="required">*</span>
								</label>
								<input
									type="email"
									id="friendEmail"
									bind:value={formData.friendEmail}
									class="form-input"
									placeholder="sobra@email.ee"
									required
								/>
							</div>
						</div>

						<div class="form-group">
							<label for="friendPhone" class="form-label">
								<span>Sõbra telefon / Friend's Phone</span>
							</label>
							<input
								type="tel"
								id="friendPhone"
								bind:value={formData.friendPhone}
								class="form-input"
								placeholder="+372 XXXX XXXX"
							/>
						</div>

						<div class="form-group">
							<label for="message" class="form-label">
								<span>Sõnum / Message</span>
							</label>
							<textarea
								id="message"
								bind:value={formData.message}
								class="form-textarea"
								placeholder="Miks soovitad oma sõbrale meie treeninguid?"
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
								<span>Saada kutse</span>
								<svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
									/>
								</svg>
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
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

	.form-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--space-3xl);
		align-items: start;
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
		margin-bottom: var(--space-md);
	}

	.info-description {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-xl);
	}

	.benefits-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.benefit-item {
		display: flex;
		gap: var(--space-md);
		padding: var(--space-md);
		border-radius: var(--radius-md);
		background: rgba(102, 126, 234, 0.05);
		transition: all var(--transition-fast);
	}

	.benefit-item:hover {
		background: rgba(102, 126, 234, 0.1);
		transform: translateX(4px);
	}

	.benefit-icon {
		width: 40px;
		height: 40px;
		background: var(--gradient-primary);
		border-radius: var(--radius-md);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.benefit-icon svg {
		width: 20px;
		height: 20px;
		color: var(--color-white);
	}

	.benefit-content {
		flex: 1;
	}

	.benefit-title {
		font-size: var(--text-base);
		font-weight: var(--font-semibold);
		color: var(--color-text-primary);
		margin-bottom: var(--space-xs);
	}

	.benefit-text {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
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

	.section-header {
		margin-bottom: var(--space-md);
	}

	.section-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		color: var(--color-text-primary);
	}

	.divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
		margin: var(--space-lg) 0;
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
