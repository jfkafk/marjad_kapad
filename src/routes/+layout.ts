import type { LayoutLoad } from './$types';
import { auth } from '$lib/stores/auth';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export const load: LayoutLoad = async ({ url }) => {
	// List of public routes that don't require authentication
	const publicRoutes: string[] = [
		'/',
		'/login',
		'/register',
		'/about',
		'/contact'
	];

	if (browser) {
		const isAuth: boolean = auth.checkAuth();
		const isPublicRoute: boolean = publicRoutes.some(
			route => url.pathname === route
		);

		// If not authenticated and trying to access protected route
		if (!isAuth && !isPublicRoute) {
			await goto('/');
			return {
				authenticated: false
			};
		}
	}

	return {
		authenticated: true
	};
};