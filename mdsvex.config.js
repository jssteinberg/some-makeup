import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: {
		no: '/src/lib/NoPageLayout.svelte',
		_: '/src/lib/PageLayout.svelte'
	},

	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
