import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			mode: 'svelte-scoped',
		}),
		sveltekit(),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},
};

export default config;
