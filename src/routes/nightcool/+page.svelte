<script>
	import MetaData from "$lib/MetaData.svelte";
	import ContainCss from "$lib/DefaultCss.svelte";
	import SpaceCss from "$lib/SpaceCss.svelte";
	import LineHeightCss from "$lib/FlowCss.svelte";

	const hslToHex = ({ h, s, l }) => {
		l /= 100;
		const a = (s * Math.min(l, 1 - l)) / 100;
		const f = n => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, "0"); // convert to Hex and prefix "0" if needed
		};
		return `${f(0)}${f(8)}${f(4)}`;
	};
	const priHue = 247.3;
	const desat = 17.8;
	const sat = 42;
	const li = 55;
	const li2 = 73.5;
	const li3 = 93;
	const liBg = 30;

	const colors = [
		{ h: priHue, s: sat, l: 100 - li3, name: "bg" }, // magenta desaturated
		{ h: 187.3, s: desat, l: li2, name: "fg" }, // magenta desaturated

		{ i: 0, h: priHue, s: sat, l: liBg / 2, name: "black" }, // magenta
		{ i: 8, h: priHue, s: desat, l: li, name: "black" }, // magenta desaturated

		{ i: 1, h: 6.9, s: sat, l: li, name: "red" }, // cyan complementary
		{ i: 9, h: 7.5, s: sat, l: li2, name: "red" }, // cyan#14 complementary

		{ i: 2, h: 97.5, s: sat, l: li, name: "green" }, // magenta split complementary
		{ i: 10, h: 105.7, s: sat, l: li2, name: "green" }, // white hue

		{ i: 3, h: 37.5, s: sat, l: li, name: "yellow" }, // magenta split complementary
		{ i: 11, h: 68, s: sat, l: li2, name: "yellow" }, // cyan triadic

		{ i: 4, h: 217.5, s: sat, l: li, name: "blue" }, // magenta analogous
		{ i: 12, h: 217.5, s: sat, l: li2, name: "blue" }, // magenta#13 analogous

		{ i: 5, h: priHue, s: sat, l: li, name: "magenta" }, // magenta MAIN
		{ i: 13, h: priHue, s: sat, l: li2, name: "magenta" }, // magenta lighter

		{ i: 6, h: 187.3, s: sat, l: li, name: "cyan" }, // cyan MAIN
		{ i: 14, h: 187.5, s: sat, l: li2, name: "cyan" }, // cyan#14 MAIN

		{ i: 7, h: 187.3, s: desat, l: li2, name: "white" }, // magenta desaturated
		{ i: 7, h: 105.7, s: sat, l: li3, name: "white" }, // white MAIN
		// { i: 15, h: priHue, s: "100", l: "100", name: "white" }, // 100% white

		// ---

		// { h: priHue, s: desat, l: 100 - li3, name: "bg_alt" }, // magenta darker
		{ h: priHue, s: sat, l: liBg, name: "black_2" }, // magenta darker

		{ h: "277.5", s: sat, l: li, name: "violet" }, // magenta analogous
		{ h: "277.5", s: sat, l: li2, name: "violet_bright" },
		{ h: "277.5", s: sat, l: liBg, name: "selection_background" },

		{ h: "217.5", s: sat, l: liBg, name: "blue_bg" },
		{ h: "68", s: sat, l: liBg, name: "yellow_bg" },
		{ h: 6.9, s: sat, l: liBg / 2, name: "dark_red_bg" },

		{ h: "68", s: sat * 1.75, l: li, name: "yellow_id" },
		{ h: "187.3", s: sat * 1.75, l: li, name: "cyan_id" },
		{ h: "97.5", s: sat * 1.75, l: li, name: "green_id" },
		{ h: "217.5", s: sat * 1.75, l: li, name: "blue_id" },
		{ h: "37.5", s: sat * 1.75, l: li, name: "orange_id" },
	];
</script>

<MetaData
	title={`nightcool`}
	description={`A cool and clear color palette for terminals and syntax highlighting.`}
/>

<article class="app-theme-main-content">
	<h1>nightcool</h1>

	<p>
		<em>
			Colors from the cool Norwegian city night, outside of a neon illuminated
			park WC.
		</em>
	</p>

	<p>
		A cool and clear color palette for terminals and syntax highlighting. Made
		for readability and delight. It has a repeating blue tone and two other
		matching base colors. All other colors match methodically and are equal in
		either hue and saturation, hue and lightness, or saturation and lightness.
	</p>

	<ol class="colors">
		{#each colors as color}
			<li
				style="--color: {color.h && color.s && color.l
					? `hsl(${color.h} ${color.s}% ${color.l}%)`
					: `#${color.hex}`}"
			>
				<p>
					<code>#{hslToHex(color)}</code>
					{#if color.name}
						<strong
							>{color.name}{typeof color.i !== "undefined"
								? ` #${color.i}`
								: ``}</strong
						>
						<span
							aria-hidden="true"
							aria-label="color-test"
							class="whitespace-nowrap text-color">color</span
						>
					{/if}
				</p>
			</li>
		{/each}
	</ol>
</article>

<ContainCss />
<SpaceCss />
<LineHeightCss />

<style lang="postcss">
	h1 {
		font-family: var(--mono-font, monospace);
		text-transform: lowercase;
		word-spacing: -1ch;
	}

	/* colors */

	.colors p {
		margin-block-start: calc(0.25 * var(--space, 1em));
		margin-block-end: calc(0.25 * var(--space, 1em));
	}

	strong {
		text-transform: capitalize;
	}

	ol {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: end;
		padding: 0;
		font-size: 1rem;
		list-style: none;
	}

	li {
		margin-block-start: calc(0.25 * var(--space, 1em));
		margin-block-end: calc(0.25 * var(--space, 1em));
	}

	.text-color {
		color: var(--color);
	}

	li::after {
		content: "";
		background: var(--color);
		display: block;
		padding: 1em;
	}
</style>
