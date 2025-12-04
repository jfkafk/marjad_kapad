<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const memberLinks = [
		{
			title: 'Minu Treeningud / My Trainings',
			icon: '📅',
			desc: 'Vaata graafikut / View schedule'
		},
		{ title: 'Dokumendid / Documents', icon: '📂', desc: 'Juhendid ja reeglid / Guides and rules' },
		{ title: 'Liikmemaks / Membership Fee', icon: '💳', desc: 'Makseajalugu / Payment history' },
		{ title: 'Profiil / Profile', icon: '👤', desc: 'Muuda andmeid / Edit details' }
	];

	const announcements = [
		{ date: '20.05', title: 'Uus treeningplats avatud / New training ground open' },
		{ date: '15.05', title: 'Suvepäevade registreerimine / Summer days registration' }
	];
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">Liikmete Ala / Members Area</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">Tere tulemast tagasi! / Welcome back!</p>
		</div>

		<div class="dashboard-grid animate-fade-in-up animate-delay-1">
			<!-- Quick Actions -->
			<div class="actions-grid">
				{#each memberLinks as link}
					<div class="action-card card-premium">
						<div class="action-icon">{link.icon}</div>
						<h3 class="action-title">{link.title}</h3>
						<p class="action-desc">{link.desc}</p>
					</div>
				{/each}
			</div>

			<!-- Announcements -->
			<div class="announcements-section card-premium animate-fade-in-up animate-delay-2">
				<h2 class="section-title">Teated / Announcements</h2>
				<ul class="announcements-list">
					{#each announcements as item}
						<li class="announcement-item">
							<span class="announcement-date">{item.date}</span>
							<span class="announcement-text">{item.title}</span>
						</li>
					{/each}
				</ul>
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

	.dashboard-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-xl);
	}

	@media (max-width: 900px) {
		.dashboard-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Actions Grid */
	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-lg);
	}

	.action-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.action-card:hover {
		transform: translateY(-5px);
	}

	.action-icon {
		font-size: 3rem;
		margin-bottom: var(--space-md);
	}

	.action-title {
		font-size: var(--text-lg);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xs);
		color: var(--color-text-primary);
	}

	.action-desc {
		color: var(--color-text-secondary);
		font-size: var(--text-sm);
	}

	/* Announcements */
	.section-title {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-lg);
		color: var(--color-text-primary);
	}

	.announcements-list {
		list-style: none;
		padding: 0;
	}

	.announcement-item {
		display: flex;
		gap: var(--space-md);
		padding: var(--space-md) 0;
		border-bottom: 1px solid #e2e8f0;
	}

	.announcement-item:last-child {
		border-bottom: none;
	}

	.announcement-date {
		font-weight: var(--font-bold);
		color: var(--color-primary-start);
		min-width: 50px;
	}

	.announcement-text {
		color: var(--color-text-secondary);
	}
</style>
