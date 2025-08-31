<script lang="ts">
	import { _ } from '$lib/i18n';
	import { locale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import icon from '$lib/assets/marjad_kapad_logo_small_white.svg'

	// Language switcher function
	function setLanguage(lang: string) {
		locale.set(lang);
		// Optional: save to localStorage for persistence
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('language', lang);
		}
	}

	let navbar: HTMLElement;
	let lastScrollY = 0;
	let isNavbarVisible = true;

	// Close details dropdowns when clicking outside and handle scroll
	onMount(() => {
		function handleClickOutside(event: Event) {
			const target = event.target as HTMLElement;
			const allDetails = document.querySelectorAll('details');

			allDetails.forEach(detail => {
				if (!detail.contains(target)) {
					detail.removeAttribute('open');
				}
			});
		}

		function handleScroll() {
			const currentScrollY = window.scrollY;

			// Don't hide navbar at the very top of the page
			if (currentScrollY < 10) {
				isNavbarVisible = true;
				navbar.style.transform = 'translateY(0)';
				return;
			}

			// Scrolling down - hide navbar
			if (currentScrollY > lastScrollY && isNavbarVisible) {
				isNavbarVisible = false;
				navbar.style.transform = 'translateY(-100%)';
			}
			// Scrolling up - show navbar
			else if (currentScrollY < lastScrollY && !isNavbarVisible) {
				isNavbarVisible = true;
				navbar.style.transform = 'translateY(0)';
			}

			lastScrollY = currentScrollY;
		}

		// Throttle scroll events for better performance
		let ticking = false;
		function requestTick() {
			if (!ticking) {
				requestAnimationFrame(handleScroll);
				ticking = true;
				setTimeout(() => { ticking = false; }, 16); // ~60fps
			}
		}

		document.addEventListener('click', handleClickOutside);
		document.addEventListener('scroll', requestTick, { passive: true });

		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('scroll', requestTick);
		};
	});
</script>

<div bind:this={navbar} class="navbar h-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-sm lg:sticky lg:top-0 z-100 text-white decoration-from-font transition-transform duration-300 ease-in-out">
	<div class="navbar-start z-50">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</div>
			<ul tabindex="-1" class="menu z-50 menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow bg-gradient-to-r from-[#667eea] to-[#764ba2]">
				<li>
					<details>
						<summary><a href="/about">{$_('nav.about')}</a></summary>
						<ul class="p-2">
							<li><a href="/about">{$_('nav.history')}</a></li>
							<li><a href="/about#us">{$_('nav.us')}</a></li>
							<li><a href="/about#trainers">{$_('nav.trainers')}</a></li>
							<li><a href="/about#dogs">{$_('nav.dogs')}</a></li>
							<li><a href="/about#whatDo">{$_('nav.whatDo')}</a></li>
							<li><a href="/about#whatTrain">{$_('nav.whatTrain')}</a></li>
							<li><a href="/about#location">{$_('nav.locations')}</a></li>
							<li><a href="/about#why">{$_('nav.why')}</a></li>
							<li><a href="/about#traditions">{$_('nav.traditions')}</a></li>
						</ul>
					</details>
				</li>
				<li>
					<details>
						<summary>{$_('nav.join')}</summary>
						<ul class="p-2">
							<li><a href="/join_training">{$_('nav.join_training')}</a></li>
							<li><a href="/join_spectator">{$_('nav.join_spectator')}</a></li>
							<li><a href="/invite">{$_('nav.invite')}</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/gallery">{$_('nav.gallery')}</a></li>
				<li><a href="/contact">{$_('nav.contact')}</a></li>
				<li><a href="/support">{$_('nav.support')}</a></li>
				<li>
					<details>
						<summary>{$_('nav.waterwork')}</summary>
						<ul class="p-2">
							<li><a href="/waterwork">{$_('nav.waterwork')}</a></li>
							<li><a href="/waterwork">{$_('nav.levels')}</a></li>
							<li><a href="/waterwork">{$_('nav.rules')}</a></li>
							<li><a href="/waterwork">{$_('nav.rescueDogs')}</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/for_member">{$_('nav.member')}</a></li>
			</ul>
		</div>
		<a href="/landing" class="ml-4 rounded-b-sm px-3 py-1 hover:shadow-lg transition">
			<!-- Show logo on mobile (lg:hidden) -->
			<img src="{icon}" alt="Märjad Käpad Logo" class="h-8 w-auto lg:hidden" />
			<!-- Show text on desktop (hidden lg:block) -->
			<span class="hidden lg:block text-xl font-semibold">{$_('nav.home')}</span>
		</a>
	</div>

	<div class="navbar-center hidden lg:flex lg:sticky lg:top-0 z-50">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>{$_('nav.about')}</summary>
					<ul class="p-2 w-50 bg-gradient-to-r from-[#6866ea] to-[#5f4ba2]">
						<li><a href="/about">{$_('nav.history')}</a></li>
						<li><a href="/about#us">{$_('nav.us')}</a></li>
						<li><a href="/about#trainers">{$_('nav.trainers')}</a></li>
						<li><a href="/about#dogs">{$_('nav.dogs')}</a></li>
						<li><a href="/about#whatDo">{$_('nav.whatDo')}</a></li>
						<li><a href="/about#whatTrain">{$_('nav.whatTrain')}</a></li>
						<li><a href="/about#location">{$_('nav.locations')}</a></li>
						<li><a href="/about#why">{$_('nav.why')}</a></li>
						<li><a href="/about#traditions">{$_('nav.traditions')}</a></li>
						<li><a href="/about#news">{$_('nav.news')}</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>{$_('nav.join')}</summary>
					<ul class="p-2 w-40 bg-gradient-to-r from-[#6866ea] to-[#5f4ba2]">
						<li><a href="/join_training">{$_('nav.join_training')}</a></li>
						<li><a href="/join_spectator">{$_('nav.join_spectator')}</a></li>
						<li><a href="/invite">{$_('nav.invite')}</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/gallery">{$_('nav.gallery')}</a></li>
			<li><a href="/contact">{$_('nav.contact')}</a></li>
			<li><a href="/support">{$_('nav.support')}</a></li>
			<li>
				<details>
					<summary>{$_('nav.waterwork')}</summary>
					<ul class="p-2 w-40 bg-gradient-to-r from-[#6866ea] to-[#5f4ba2]">
						<li><a href="/waterwork">{$_('nav.waterwork')}</a></li>
						<li><a href="/waterwork">{$_('nav.levels')}</a></li>
						<li><a href="/waterwork">{$_('nav.rules')}</a></li>
						<li><a href="/waterwork">{$_('nav.rescueDogs')}</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/landing">{$_('nav.member')}</a></li>
		</ul>
	</div>

	<div class="navbar-end">
		<!-- Language switcher -->
		<div class="dropdown dropdown-end mr-2">
			<div tabindex="0" role="button" class="btn btn-ghost btn-sm">
				{$locale === 'en' ? '🇬🇧 EN' : '🇪🇪 ET'}
			</div>
			<ul tabindex="-1" class="dropdown-content menu bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-box z-[1] w-24 p-2 shadow">
				<li>
					<button
						on:click={() => { setLanguage('et'); window.location.reload(); }}
						class="bg-white/20={$locale === 'et'}">
						🇪🇪 EST
					</button>
				</li>
				<li>
					<button
						on:click={() => { setLanguage('en'); window.location.reload(); }}
						class="bg-white/20={$locale === 'en'}">
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
         transition-all duration-150">
			{$_('nav.store')}
		</a>
	</div>
</div>