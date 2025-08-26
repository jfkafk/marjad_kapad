<script lang="ts">
	import '$lib/i18n';
	import icon from '$lib/assets/marjad_kapad_logo_small_black.svg';
	import "../app.css";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Unsubscriber } from 'svelte/store';
	import { isAuthenticated, auth } from '$lib/stores/auth';
	import { isLoading } from '$lib/i18n';

	let { children } = $props();

	const protectedRoutes: string[] = [
		'/engage',
		'/store',
		'/landing',
		'/about',
		'/contact',
		'/gallery',
		'/invite',
		'/join_spectator',
		'/join_training',
		'/support'
	];

	const publicRoutes: string[] = [
		'/',
	];

	onMount((): (() => void) => {
		// Initialize auth state from storage
		auth.checkAuth();

		// Check if current route needs protection
		const unsubscribe: Unsubscriber = page.subscribe($page => {
			const currentPath = $page.url.pathname;

			const needsAuth: boolean = protectedRoutes.some(route =>
				currentPath.startsWith(route)
			);

			const isPublic: boolean = publicRoutes.some(route =>
				currentPath === route || currentPath.startsWith(route)
			);

			// If protected route and not authenticated, redirect to login
			if (needsAuth && !$isAuthenticated) {
				goto('/');
			}
		});

		return unsubscribe;
	});
</script>

<svelte:head>
	<link rel="icon" href={icon} />
</svelte:head>

<!-- Wait for i18n to be ready -->
{#if $isLoading}
	<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#667eea] to-[#764ba2]">
		<div class="text-white text-xl">Laen... / Loading...</div>
	</div>
{:else}
	{@render children?.()}
{/if}