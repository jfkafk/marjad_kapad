<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const events = [
		{
			date: '15. Juuni',
			title: 'Suvepäevad 2025',
			location: 'Elva',
			time: '10:00 - 18:00',
			type: 'event'
		},
		{
			date: '22. Juuni',
			title: 'Veetöö Treening',
			location: 'Paala Järv',
			time: '12:00 - 16:00',
			type: 'training'
		},
		{
			date: '05. Juuli',
			title: 'Kutsikakool',
			location: 'Tartu',
			time: '18:00 - 19:30',
			type: 'training'
		}
	];
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">Osale & Panusta / Engage</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				Liitu meie kogukonnaga ja aita kaasa / Join our community and contribute
			</p>
		</div>

		<div class="engage-grid">
			<!-- Events Section -->
			<section class="events-section animate-fade-in-up animate-delay-1">
				<h2 class="section-title">Tulevased Üritused / Upcoming Events</h2>
				<div class="events-list">
					{#each events as event}
						<div class="event-card card-premium">
							<div class="event-date">
								<span class="date-day">{event.date.split('.')[0]}</span>
								<span class="date-month">{event.date.split('.')[1]}</span>
							</div>
							<div class="event-info">
								<h3 class="event-title">{event.title}</h3>
								<div class="event-meta">
									<span>📍 {event.location}</span>
									<span>🕒 {event.time}</span>
								</div>
							</div>
							<button class="btn-register">Registreeri</button>
						</div>
					{/each}
				</div>
			</section>

			<!-- Volunteer Section -->
			<section class="volunteer-section animate-fade-in-up animate-delay-2">
				<div class="card-premium volunteer-card">
					<div class="icon-premium mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
					<h2 class="card-title">Tule Vabatahtlikuks</h2>
					<p class="card-text">
						Otsime alati abikäsi ürituste korraldamisel ja treeningute läbiviimisel. Liitu meie
						sõbraliku meeskonnaga!
					</p>
					<button class="btn-primary btn-shimmer">Liitu Meeskonnaga</button>
				</div>

				<div class="card-premium newsletter-card mt-8">
					<h2 class="card-title">Uudiskiri / Newsletter</h2>
					<p class="card-text">Püsi kursis meie tegemistega.</p>
					<div class="input-group">
						<input type="email" placeholder="Sinu e-mail..." class="input-field" />
						<button class="btn-subscribe">Liitu</button>
					</div>
				</div>
			</section>
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
		font-size: clamp(2.5rem, 5vw, var(--text-5xl));
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
	}

	.engage-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-2xl);
	}

	@media (max-width: 900px) {
		.engage-grid {
			grid-template-columns: 1fr;
		}
	}

	.section-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xl);
		color: var(--color-text-primary);
	}

	/* Events */
	.events-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.event-card {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
		padding: var(--space-lg);
	}

	.event-date {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--color-background-light);
		padding: var(--space-md);
		border-radius: var(--radius-lg);
		min-width: 80px;
	}

	.date-day {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		color: var(--color-primary-start);
	}

	.date-month {
		font-size: var(--text-sm);
		text-transform: uppercase;
		font-weight: var(--font-bold);
		color: var(--color-text-secondary);
	}

	.event-info {
		flex-grow: 1;
	}

	.event-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xs);
	}

	.event-meta {
		display: flex;
		gap: var(--space-lg);
		color: var(--color-text-secondary);
		font-size: var(--text-sm);
	}

	.btn-register {
		padding: var(--space-sm) var(--space-lg);
		border: 2px solid var(--color-primary-start);
		color: var(--color-primary-start);
		border-radius: var(--radius-full);
		font-weight: var(--font-semibold);
		transition: all 0.2s;
	}

	.btn-register:hover {
		background: var(--color-primary-start);
		color: white;
	}

	/* Sidebar Cards */
	.card-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-md);
	}

	.card-text {
		color: var(--color-text-secondary);
		margin-bottom: var(--space-lg);
		line-height: 1.6;
	}

	.btn-primary {
		width: 100%;
		padding: var(--space-md);
		background: var(--gradient-primary);
		color: white;
		border-radius: var(--radius-lg);
		font-weight: var(--font-bold);
		box-shadow: var(--shadow-primary);
	}

	.input-group {
		display: flex;
		gap: var(--space-sm);
	}

	.input-field {
		flex-grow: 1;
		padding: var(--space-sm) var(--space-md);
		border: 1px solid #e2e8f0;
		border-radius: var(--radius-md);
		outline: none;
	}

	.input-field:focus {
		border-color: var(--color-primary-start);
		box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
	}

	.btn-subscribe {
		padding: 0 var(--space-lg);
		background: var(--color-text-primary);
		color: white;
		border-radius: var(--radius-md);
		font-weight: var(--font-semibold);
	}
</style>
