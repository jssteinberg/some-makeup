import { defineMDSveXConfig as defineConfig } from 'mdsvex';
const config = defineConfig({
	layout: {
		no: '/src/libs/NoPageLayout.svelte',
		v1: '/src/libs/PageV1Layout.svelte',
		_: '/src/libs/PageLayout.svelte'
	},

	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
