import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from '@unocss/svelte-scoped/vite';

const spacing = {
	'.5': 'calc(0.125 * var(--space, 1rem))',
	'0.5': 'calc(0.125 * var(--space, 1rem))',
	'1': 'calc(0.25 * var(--space, 1rem))',
	'2': 'calc(0.5  * var(--space, 1rem))',
	'3': 'calc(0.75 * var(--space, 1rem))',
	'4': 'calc(1    * var(--space, 1rem))',
	'5': 'calc(1.25 * var(--space, 1rem))',
	'6': 'calc(1.5  * var(--space, 1rem))',
	'7': 'calc(1.75 * var(--space, 1rem))',
	'8': 'calc(2    * var(--space, 1rem))',
	'9': 'calc(2.25 * var(--space, 1rem))',
	'10': 'calc(2.5  * var(--space, 1rem))',
	'11': 'calc(2.75 * var(--space, 1rem))',
	'12': 'calc(3    * var(--space, 1rem))',
	'13': 'calc(3.25 * var(--space, 1rem))',
	'14': 'calc(3.5  * var(--space, 1rem))',
	'15': 'calc(3.75 * var(--space, 1rem))',
	'16': 'calc(4    * var(--space, 1rem))',
};

const width = {
	...spacing,
	prose: 'var(--w-prose)',
	'prose-edge-x': 'var(--w-prose-edge-x)',
};

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			theme: {
				// breakpoints,
				spacing: {
					...spacing,
					'edge-x': 'var(--space-edge-x)',
					'1edge-x': 'var(--space-edge-x)',
					inline: 'var(--space-inline, var(--space))',
				},
				height: spacing,
				width,
				maxWidth: width,
				// fontSize: {
				// 	container: ['1em', 'inherit'],
				// 	h1: ['var(--text-h1)', '1.175'],
				// 	h2: ['var(--text-h2)', '1.175'],
				// 	xs: ['.7em', 'inherit'],
				// 	sm: ['var(--text-sm)', 'inherit'],
				// 	base: ['1rem', 'inherit'],
				// 	body: ['var(--text-body)', 'inherit'],
				// 	lead: ['var(--text-lead)', 'inherit'],
				// 	lg: ['var(--text-lg)', 'inherit'],
				// 	xl: ['var(--text-xl)', 'inherit'],
				// },
				// fontFamily: {
				// 	headings: ['Poppins', 'sans-serif'],
				// 	sans: ['Plus Jakarta Sans', 'sans-serif'],
				// 	body: ['Plus Jakarta Sans', 'sans-serif'],
				// },
			},
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
