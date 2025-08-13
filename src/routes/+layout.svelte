<script lang="ts">
	import icon from '$lib/assets/icon.png';
	import "../app.css";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Unsubscriber } from 'svelte/store';
	import { isAuthenticated } from '$lib/stores/auth';

	let { children } = $props();

	const protectedRoutes: string[] = [
		'/about',
		'/engage',
		'/store',
		'/landing'  // Add your protected routes here
	];

	onMount((): (() => void) => {
		// Check if current route needs protection
		const unsubscribe: Unsubscriber = page.subscribe($page => {
			const needsAuth: boolean = protectedRoutes.some(route =>
				$page.url.pathname.startsWith(route)
			);

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

{@render children?.()}
