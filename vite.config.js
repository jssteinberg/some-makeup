import { sveltekit, vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		vitePreprocess(),
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
