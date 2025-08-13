import { writable, derived, type Readable } from 'svelte/store';
import { browser } from '$app/environment';

interface User {
	email: string;
	name?: string;
}

interface AuthStore {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	subscribe: typeof writable<User | null>['subscribe'];
	login: (user: User) => void;
	logout: () => void;
	checkAuth: () => boolean;
}

function createAuthStore(): AuthStore {
	// Check if user is already logged in from sessionStorage
	const storedUser = browser ? sessionStorage.getItem('user') : null;
	const { subscribe, set, update } = writable<User | null>(
		storedUser ? JSON.parse(storedUser) : null
	);

	return {
		subscribe,
		login: (user: User): void => {
			if (browser) {
				sessionStorage.setItem('user', JSON.stringify(user));
			}
			set(user);
		},
		logout: (): void => {
			if (browser) {
				sessionStorage.removeItem('user');
			}
			set(null);
		},
		checkAuth: (): boolean => {
			if (browser) {
				const stored = sessionStorage.getItem('user');
				if (stored) {
					set(JSON.parse(stored));
					return true;
				}
			}
			return false;
		}
	};
}

export const auth = createAuthStore();
export const isAuthenticated: Readable<boolean> = derived(
	auth,
	$auth => !!$auth
);