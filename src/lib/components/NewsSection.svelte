<script lang="ts">
	import { _ } from '$lib/i18n';

	interface NewsItem {
		id: string;
		url: string;
		title: string;
		description: string;
		image?: string;
		publishedAt: string;
		featured: boolean;
		source: string;
	}

	// Hardcoded news items - edit these directly in the code
	const newsItems: NewsItem[] = [
		{
			id: '1',
			url: 'https://sakala.postimees.ee/6735092/vetelpaastekoer-aitab-uppuja-kaldale',
			title: 'Vetelpäästekoer aitab uppuja kaldale',
			description: 'Lõuna-Eesti veepäästekoerte grupp «Märjad käpad» demonstreeris Abja tehisjärvel, kuidas vetelpäästekoerad saavad uppumisohtu sattunud inimest aidata. ',
			image: 'https://f7.pmo.ee/jnE9TbKuUH7SaQrmuHCQmfpd_UQ=/650x650/smart/nginx/o/2019/07/21/12390925t1h93aa.jpg',
			publishedAt: '2019-07-21T16:59:00',
			featured: true,
			source: 'Sakala'
		},
		{
			id: '2',
			url: 'https://sakala.postimees.ee/7677849/marjad-kapad-vesikoerte-joulujalutuskaik-mooda-viljandit-tostis-tuju-ja-teadlikkust',
			title: 'MÄRJAD KÄPAD ⟩ Vesikoerte jõulujalutuskäik mööda Viljandit tõstis tuju ja teadlikkust',
			description: 'Pühapäeva keskpäeval võisid möödujad näha, kuidas Vabaduse platsi serva kogunes hulk inimesi, kaasas koerad, kellest paljud olid enam-vähem sama suured kui omanikud ise.',
			image: 'https://f11.pmo.ee/ib5VmiDIYq5df8zwcqx4M13nhvU=/650x650/smart/nginx/o/2022/12/25/15045899t1h16f6.jpg',
			publishedAt: '2022-12-25T17:20:00',
			featured: true,
			source: 'Sakala'
		},
		{
			id: '3',
			url: 'https://virumaateataja.postimees.ee/8114053/marjad-kapad-hoolitsevad-veeohutuse-eest',
			title: 'Märjad Käpad hoolitsevad veeohutuse eest',
			description: 'Kadrina vabatahtliku päästekomando juubelinädalat väisasid ka Valvi Väli ja Hiie Paas. Nad mõlemad on tegevad veepäästekoertega seotud grupis Märjad Käpad, ainult selle vahega, et Väli tegutseb Lõuna-Eestis, Paas aga Pärnumaal.',
			image: "https://f11.pmo.ee/ssh7_vKQ0HYTxCRmoRhbyTEr6u0=/1442x0/filters:format(webp)/nginx/o/2024/10/13/16415548t1h5b9c.jpg",
			publishedAt: '2024-10-13T13:15:00',
			featured: true,
			source: 'Virumaa Teataja'
		},
		{
			id: '4',
			url: 'https://2022-2023.joululinntartu.ee/uritused/louna-eesti-veepaastekoerte-marjad-kapad-jalutuskaik-valguskulas-2/',
			title: 'Lõuna-Eesti veepäästekoerte „Märjad käpad“ jalutuskäik Valguskülas',
			description: 'Teisel jõulupühal kell 12 teeb Lõuna-Eesti veepäästekoerte grupp „Märjad käpad“ oma traditsioonilise jõulujalutuskäigu ja soovib linnarahvale head pühadeaega ning mõnusat vana aasta lõppu.',
			publishedAt: '2022-12-26T12:00:00',
			image: "https://2022-2023.joululinntartu.ee/wp-content/uploads/2022/10/309882410_416218073928144_8593860758970454917_n.jpg",
			featured: true,
			source: 'Jõululinn Tartu'
		},
		{
			id: '5',
			url: 'https://2022-2023.joululinntartu.ee/uritused/louna-eesti-veepaastekoerte-marjad-kapad-jalutuskaik-valguskulas-2/',
			title: 'Lõuna-Eesti veepäästekoerte „Märjad käpad“ jalutuskäik Valguskülas',
			description: 'Teisel jõulupühal kell 12 teeb Lõuna-Eesti veepäästekoerte grupp „Märjad käpad“ oma traditsioonilise jõulujalutuskäigu ja soovib linnarahvale head pühadeaega ning mõnusat vana aasta lõppu.',
			publishedAt: '2022-12-26T12:00:00',
			image: "https://2022-2023.joululinntartu.ee/wp-content/uploads/2022/10/309882410_416218073928144_8593860758970454917_n.jpg",
			featured: true,
			source: 'Jõululinn Tartu'
		},
		{
			id: '6',
			url: 'https://2022-2023.joululinntartu.ee/uritused/louna-eesti-veepaastekoerte-marjad-kapad-jalutuskaik-valguskulas-2/',
			title: 'Lõuna-Eesti veepäästekoerte „Märjad käpad“ jalutuskäik Valguskülas',
			description: 'Teisel jõulupühal kell 12 teeb Lõuna-Eesti veepäästekoerte grupp „Märjad käpad“ oma traditsioonilise jõulujalutuskäigu ja soovib linnarahvale head pühadeaega ning mõnusat vana aasta lõppu.',
			publishedAt: '2022-12-26T12:00:00',
			image: "https://2022-2023.joululinntartu.ee/wp-content/uploads/2022/10/309882410_416218073928144_8593860758970454917_n.jpg",
			featured: true,
			source: 'Jõululinn Tartu'
		},
		{
			id: '7',
			url: 'https://2022-2023.joululinntartu.ee/uritused/louna-eesti-veepaastekoerte-marjad-kapad-jalutuskaik-valguskulas-2/',
			title: 'Lõuna-Eesti veepäästekoerte „Märjad käpad“ jalutuskäik Valguskülas',
			description: 'Teisel jõulupühal kell 12 teeb Lõuna-Eesti veepäästekoerte grupp „Märjad käpad“ oma traditsioonilise jõulujalutuskäigu ja soovib linnarahvale head pühadeaega ning mõnusat vana aasta lõppu.',
			publishedAt: '2022-12-26T12:00:00',
			image: "https://2022-2023.joululinntartu.ee/wp-content/uploads/2022/10/309882410_416218073928144_8593860758970454917_n.jpg",
			featured: true,
			source: 'Jõululinn Tartu'
		}
	];
	// Sort by date, newest first
	// eslint-disable-next-line svelte/no-immutable-reactive-statements
	$: sortedNews = [...newsItems].sort((a, b) =>
		new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);

	$: featuredNews = sortedNews.filter(item => item.featured);

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('et-EE', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<section class="py-16 px-4 bg-gradient-to-b from-[#ffffff] to-[#1e293b] bg-cover bg-center bg-no-repeat relative">
	<div class="max-w-11/12 mx-auto z-10">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-base-content mb-4">{$_('landing.news.header')}</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				{$_('landing.news.subheader')}
			</p>
		</div>

		{#if featuredNews.length > 0}
			<!-- Featured News Section -->
			<div class="mb-16">

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-8">
					{#each featuredNews as item (item.id)}
						<div class="card rounded-2xl bg-white/80 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
							<figure class="px-6 pt-6">
								{#if item.image}
									<img src={item.image} alt={item.title} class="rounded-xl h-48 w-full object-cover" />
								{:else}
									<div class="bg-gradient-to-br from-primary to-secondary rounded-xl h-48 w-full flex items-center justify-center">
										<svg class="w-16 h-16 text-primary-content" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
										</svg>
									</div>
								{/if}
							</figure>

							<div class="card-body">
								<div class="flex items-center justify-between mb-3">
									<div class="badge badge-primary badge-sm">{item.source}</div>
									<time class="text-sm text-base-content/60">{formatDate(item.publishedAt)}</time>
								</div>

								<h3 class="card-title text-lg leading-tight">{item.title}</h3>
								<p class="text-base-content/70 line-clamp-3">{item.description}</p>

								<div class="card-actions justify-end mt-4">
									<a
										href={item.url}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-primary btn-sm">
										{$_('landing.news.read_more')}
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>