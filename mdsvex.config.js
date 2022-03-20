import { defineMDSveXConfig as defineConfig } from 'mdsvex';
const config = defineConfig({
	layout: {
		no: '/src/libs/NoPageLayout.svelte',
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
