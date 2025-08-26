import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					50: '#f0f9ff',
					100: '#e0f2fe', 
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0081a7', // Main primary color
					600: '#006d91',
					700: '#005a7a',
					800: '#004863',
					900: '#003a4d'
				},
				'accent': {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#00afb9', // Main accent color
					600: '#009aa3',
					700: '#00858d',
					800: '#007077',
					900: '#005b61'
				},
				'neutral': {
					50: '#fdfcdc', // Cream background
					100: '#fcfbca',
					200: '#faf7a5',
					300: '#f7f280',
					400: '#f3ed5b',
					500: '#eee836',
					600: '#d4d017',
					700: '#a8a40f',
					800: '#7c780b',
					900: '#504c07'
				},
				'secondary': {
					50: '#fef7f0',
					100: '#fed9b7', // Main secondary color
					200: '#fdc894',
					300: '#fcb871',
					400: '#fba74e',
					500: '#fa962b',
					600: '#e8851a',
					700: '#d67409',
					800: '#a45a07',
					900: '#724005'
				},
				'error': {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#f07167', // Main error/coral color
					600: '#e53e3e',
					700: '#c53030',
					800: '#9b2c2c',
					900: '#742a2a'
				}
			}
		}
	},
	plugins: []
} satisfies Config;