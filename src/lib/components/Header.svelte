<script lang="ts">
	import { _ } from '$lib/i18n';
	import { locale } from 'svelte-i18n';

	// Language switcher function
	function setLanguage(lang: string) {
		locale.set(lang);
		// Optional: save to localStorage for persistence
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('language', lang);
		}
	}
</script>

<div
	class=" sticky navbar bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-sm relative lg:sticky lg:top-0 z-50 text-white decoration-from-font"
>
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-1 shadow bg-gradient-to-r from-[#667eea] to-[#764ba2]"
			>
				<li>
					{$_('nav.about')}
					<ul class="p-2">
						<li><a href="/about">{$_('nav.about')}</a></li>
						<li><a href="/dogs">{$_('nav.dogs')}</a></li>
						<li><a href="/trainers">{$_('nav.trainers')}</a></li>
					</ul>
				</li>
				<li>
					{$_('nav.join')}
					<ul class="p-2">
						<li><a href="/training">{$_('nav.training')}</a></li>
						<li><a href="/join?type=training">{$_('nav.join_training')}</a></li>
						<li><a href="/join?type=spectator">{$_('nav.join_spectator')}</a></li>
						<li><a href="/invite">{$_('nav.invite')}</a></li>
						<li><a href="/partners">{$_('nav.partners')}</a></li>
					</ul>
				</li>
				<li><a href="/gallery">{$_('nav.gallery')}</a></li>
				<li><a href="/waterwork">{$_('nav.waterwork')}</a></li>
				<li><a href="/contact">{$_('nav.contact')}</a></li>
			</ul>
		</div>
		<a
			href="/landing"
			class="ml-4 text-xl font-semibold rounded-b-sm px-3 py-1 hover:shadow-lg transition"
		>
			{$_('nav.home')}
		</a>
	</div>

	<div class="navbar-center hidden lg:flex lg:sticky lg:top-0 z-50">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>{$_('nav.about')}</summary>
					<ul class="p-2 w-36 bg-gradient-to-r from-[#6866ea] to-[#5f4ba2]">
						<li><a href="/about">{$_('nav.about')}</a></li>
						<li><a href="/dogs">{$_('nav.dogs')}</a></li>
						<li><a href="/trainers">{$_('nav.trainers')}</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>{$_('nav.join')}</summary>
					<ul class="p-2 w-36 bg-gradient-to-r from-[#6866ea] to-[#5f4ba2]">
						<li><a href="/training">{$_('nav.training')}</a></li>
						<li><a href="/join?type=training">{$_('nav.join_training')}</a></li>
						<li><a href="/join?type=spectator">{$_('nav.join_spectator')}</a></li>
						<li><a href="/invite">{$_('nav.invite')}</a></li>
						<li><a href="/partners">{$_('nav.partners')}</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/gallery">{$_('nav.gallery')}</a></li>
			<li><a href="/waterwork">{$_('nav.waterwork')}</a></li>
			<li><a href="/contact">{$_('nav.contact')}</a></li>
		</ul>
	</div>

	<div class="navbar-end">
		<!-- Language switcher -->
		<div class="dropdown dropdown-end mr-2">
			<div tabindex="0" role="button" class="btn btn-ghost btn-sm">
				{$locale === 'en' ? '🇬🇧 EN' : '🇪🇪 ET'}
			</div>
			<ul
				tabindex="-1"
				class="dropdown-content menu bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-box z-[1] w-24 p-2 shadow"
			>
				<li>
					<button on:click={() => setLanguage('et')} class="bg-white/20={$locale === 'et'}">
						🇪🇪 EST
					</button>
				</li>
				<li>
					<button on:click={() => setLanguage('en')} class="bg-white/20={$locale === 'en'}">
						🇬🇧 ENG
					</button>
				</li>
			</ul>
		</div>

		<!-- Store button -->
		<a
			href="/store"
			class="mr-3 btn bg-gradient-to-r from-[#667eea] to-[#667eea] border-none
         text-white font-semibold shadow-none overflow-visible
         hover:shadow-[0_0_3px_3px_rgba(102,126,234,0.6)] hover:scale-105
         transition-all duration-150"
		>
			{$_('nav.store')}
		</a>
	</div>
</div>
