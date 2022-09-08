import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
		alias: {
			$libs: 'src/libs'
		}
	},

	preprocess: [
		preprocess({
			postcss: true,
			// scss: {
			// 	prependData: '@use "src/variables.scss" as *;'
			// }
		}),

		mdsvex(mdsvexConfig)
	]
};

export default config;
