import { defineMDSveXConfig as defineConfig } from 'mdsvex';
const config = defineConfig({
	layout: {
		v1: '/src/libs/AppV1Layout.svelte',
		_: '/src/libs/AppLayout.svelte'
	},

	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
