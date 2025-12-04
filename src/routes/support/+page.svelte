<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			id: 1,
			question: 'Millal treeningud toimuvad? / When do trainings take place?',
			answer:
				'Treeningud toimuvad aastaringselt. Veetöö hooaeg on maist septembrini, kuulekuskoolitus toimub siseruumides talveperioodil. / Trainings take place year-round. Water work season is from May to September, obedience training is indoors during winter.'
		},
		{
			id: 2,
			question: 'Kas kõik koeratõud on oodatud? / Are all dog breeds welcome?',
			answer:
				'Jah! Kuigi oleme spetsialiseerunud veetööle (Newfoundlandi koerad, Landseerid), on meie kuulekuskoolitused avatud kõigile tõugudele. / Yes! While we specialize in water work (Newfoundlands, Landseers), our obedience trainings are open to all breeds.'
		},
		{
			id: 3,
			question:
				'Mida peaksin esimesele treeningule kaasa võtma? / What should I bring to the first training?',
			answer:
				"Võta kaasa koera vaktsineerimispass, palju maiuseid, lemmikmänguasi ja tavaline jalutusrihm (mitte flexi). / Bring your dog's vaccination passport, lots of treats, a favorite toy, and a regular leash (not a flexi)."
		},
		{
			id: 4,
			question: 'Kuidas saan liikmeks astuda? / How can I become a member?',
			answer:
				'Liikmeks astumiseks täida avaldus meie kodulehel või võta ühendust juhatusega. / To become a member, fill out the application on our website or contact the board.'
		}
	];

	let activeFaq: number | null = null;

	function toggleFaq(id: number) {
		activeFaq = activeFaq === id ? null : id;
	}
</script>

<Header />

<div class="page-wrapper">
	<div class="page-container">
		<div class="page-header">
			<h1 class="page-title gradient-text animate-fade-in">Abi & Tugi / Support</h1>
			<div class="title-underline animate-scale-in"></div>
			<p class="page-subtitle animate-fade-in-up">
				Korduma kippuvad küsimused ja abiinfo / FAQ and support information
			</p>
		</div>

		<div class="support-content animate-fade-in-up animate-delay-1">
			<!-- FAQ Section -->
			<div class="faq-section card-premium">
				<h2 class="section-title">KKK / FAQ</h2>
				<div class="faq-list">
					{#each faqs as faq}
						<div class="faq-item {activeFaq === faq.id ? 'active' : ''}">
							<button class="faq-question" on:click={() => toggleFaq(faq.id)}>
								<span>{faq.question}</span>
								<span class="icon-plus" class:rotated={activeFaq === faq.id}>+</span>
							</button>
							{#if activeFaq === faq.id}
								<div class="faq-answer" transition:slide>
									<p>{faq.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<!-- Contact CTA -->
			<div class="contact-cta animate-fade-in-up animate-delay-2">
				<div class="cta-content">
					<h3>Ei leidnud vastust? / Didn't find an answer?</h3>
					<p>Võta meiega otse ühendust ja aitame hea meelega.</p>
					<a href="/contact" class="btn-contact btn-shimmer">Võta Ühendust / Contact Us</a>
				</div>
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
		max-width: 800px; /* Narrower for reading */
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

	/* FAQ */
	.section-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-xl);
		color: var(--color-text-primary);
		text-align: center;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.faq-item {
		border-bottom: 1px solid #e2e8f0;
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-question {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-lg) 0;
		text-align: left;
		font-weight: var(--font-bold);
		color: var(--color-text-primary);
		font-size: var(--text-lg);
		transition: color 0.2s;
	}

	.faq-question:hover {
		color: var(--color-primary-start);
	}

	.icon-plus {
		font-size: var(--text-2xl);
		font-weight: 300;
		transition: transform 0.3s;
	}

	.icon-plus.rotated {
		transform: rotate(45deg);
	}

	.faq-answer {
		padding-bottom: var(--space-lg);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	/* Contact CTA */
	.contact-cta {
		margin-top: var(--space-3xl);
		text-align: center;
		padding: var(--space-2xl);
		background: var(--color-white);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
	}

	.cta-content h3 {
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		margin-bottom: var(--space-sm);
	}

	.cta-content p {
		color: var(--color-text-secondary);
		margin-bottom: var(--space-lg);
	}

	.btn-contact {
		display: inline-block;
		padding: var(--space-md) var(--space-xl);
		background: var(--gradient-primary);
		color: white;
		border-radius: var(--radius-full);
		font-weight: var(--font-bold);
		box-shadow: var(--shadow-primary);
		transition: transform 0.2s;
	}

	.btn-contact:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-primary-hover);
	}
</style>
