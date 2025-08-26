import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // Better for SPA routing than index.html
			precompress: false
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: ['/'] // Only prerender public routes
		}
	}
};