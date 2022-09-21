<script>
	import MetaTags from "$libs/MetaData.svelte";
	import Details from "$libs/Details.svelte";
	import ContainCss from "$libs/DefaultCss.svelte";
	import IntuitiveCss from "$libs/DeformCss.svelte";
	import SpaceCss from "$libs/SpaceCss.svelte";
	import LineHeightCss from "$libs/FlowCss.svelte";
	import PrismCss from "$libs/PrismCss.svelte";

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
	const priHue = "247.3";
	const sat = 42;
	const li = 55;
	const li2 = 72.5;

	const colors = [
		{ h: priHue, s: "17.8", l: "8", name: "bg" }, // magenta desaturated
		// { h: priHue, s: "17.8", l: "91.5", name: "fg" }, // magenta desaturated
		{ h: "105.7", s: sat, l: "91.5", name: "fg" }, // white MAIN

		{ i: 0, h: priHue, s: sat, l: "15", name: "black" }, // magenta
		{ i: 8, h: priHue, s: "17.8", l: li, name: "black" }, // magenta desaturated

		{ i: 1, h: "6.9", s: sat, l: li, name: "red" }, // cyan complementary
		{ i: 9, h: "7.5", s: sat, l: li2, name: "red" }, // cyan#14 complementary

		{ i: 2, h: "97.5", s: sat, l: li, name: "green" }, // magenta split complementary
		{ i: 10, h: "105.7", s: sat, l: li2, name: "green" }, // white hue

		{ i: 3, h: "37.5", s: sat, l: li, name: "yellow" }, // magenta split complementary
		{ i: 11, h: "68", s: sat, l: li2, name: "yellow" }, // cyan triadic

		{ i: 4, h: "217.5", s: sat, l: li, name: "blue" }, // magenta analogous
		{ i: 12, h: "217.5", s: sat, l: li2, name: "blue" }, // magenta#13 analogous

		{ i: 5, h: priHue, s: sat, l: li, name: "magenta" }, // magenta MAIN
		{ i: 13, h: priHue, s: sat, l: li2, name: "magenta" }, // magenta lighter

		{ i: 6, h: "187.3", s: sat, l: li, name: "cyan" }, // cyan MAIN
		{ i: 14, h: "187.5", s: sat, l: li2, name: "cyan" }, // cyan#14 MAIN

		{ i: 7, h: priHue, s: "17.8", l: li2, name: "white" }, // magenta desaturated
		// { i: 7, h: "105.7", s: sat, l: "91.5", name: "white" }, // white MAIN
		{ i: 15, h: priHue, s: "100", l: "100", name: "white" }, // 100% white

		// ---

		{ h: priHue, s: sat, l: "30", name: "black_2" }, // magenta darker
		{ h: priHue, s: sat, l: "3", name: "black_bg" }, // magenta darker
		{ h: priHue, s: "17.8", l: "91.5", name: "fg_alt" }, // magenta desaturated

		{ h: "277.5", s: sat, l: li, name: "violet" }, // magenta analogous
		{ h: "277.5", s: sat, l: li2, name: "violet_bright" },
		{ h: "277.5", s: sat, l: li2, name: "selection_background" },
		{ h: "217.5", s: sat, l: "30", name: "blue_bg" },

		{ h: "68", s: sat, l: "30", name: "yellow_bg" },
	];
</script>

<MetaTags
	title={`Makeup Darkness 1.`}
	description={`A cool and clear color palette for terminals and syntax highlighting.`}
/>

<article class="app-theme-main-content">
	<h1>Makeup Darkness 1.</h1>

	<p>
		<em
			>Colors from the cool Norwegian city night, outside of a neon illuminated
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
				</p>
				{#if color.name}
					<p>
						<strong
							>{color.name}{typeof color.i !== "undefined"
								? ` #${color.i}`
								: ``}</strong
						>
						<span aria-hidden="true" aria-label="color-test">color</span>
					</p>
				{/if}
			</li>
		{/each}
	</ol>

	<h2>Implementations</h2>

	<p><em>More to come.</em></p>

	<Details>
		<span slot="summary">Alacritty</span>

		<pre><code>
# Colors
# somedarkterm1.
colors:
  # Default colors
  primary:
    background: '0x{hslToHex(colors[0])}'
    foreground: '0x{hslToHex(colors[1])}'

  # Normal colors
  normal:
    black:   '0x{hslToHex(colors[2])}'
    red:     '0x{hslToHex(colors[4])}'
    green:   '0x{hslToHex(colors[6])}'
    yellow:  '0x{hslToHex(colors[8])}'
    blue:    '0x{hslToHex(colors[10])}'
    magenta: '0x{hslToHex(colors[12])}'
    cyan:    '0x{hslToHex(colors[14])}'
    white:   '0x{hslToHex(colors[16])}'

  # Bright colors
  bright:
    black:   '0x{hslToHex(colors[3])}'
    red:     '0x{hslToHex(colors[5])}'
    green:   '0x{hslToHex(colors[7])}'
    yellow:  '0x{hslToHex(colors[9])}'
    blue:    '0x{hslToHex(colors[11])}'
    magenta: '0x{hslToHex(colors[13])}'
    cyan:    '0x{hslToHex(colors[15])}'
    white:   '0x{hslToHex(colors[17])}'
		</code></pre>
	</Details>

	<Details>
		<span slot="summary">Kitty</span>

		<pre><code>
# Colors
# somedarkterm1.

background #{hslToHex(colors[0])}
foreground #{hslToHex(colors[1])}
selection_background #{hslToHex(
					colors.filter(obj => obj.name === `selection_background`)[0]
				)}
url_color #{hslToHex(colors[10])}
cursor #{hslToHex(colors[12])}

# Normal colors
color0 #{hslToHex(colors[2])}
color1 #{hslToHex(colors[4])}
color2 #{hslToHex(colors[6])}
color3 #{hslToHex(colors[8])}
color4 #{hslToHex(colors[10])}
color5 #{hslToHex(colors[12])}
color6 #{hslToHex(colors[14])}
color7 #{hslToHex(colors[16])}

# Bright colors
color8 #{hslToHex(colors[3])}
color9 #{hslToHex(colors[5])}
color10 #{hslToHex(colors[7])}
color11 #{hslToHex(colors[9])}
color12 #{hslToHex(colors[11])}
color13 #{hslToHex(colors[13])}
color14 #{hslToHex(colors[15])}
color15 #{hslToHex(colors[17])}
		</code></pre>
	</Details>
</article>

<ContainCss />
<IntuitiveCss />
<SpaceCss />
<LineHeightCss />
<PrismCss />

<style>
	h1 {
		font-family: var(--mono-font, monospace);
		text-transform: lowercase;
		word-spacing: -1ch;
	}

	/* colors */

	.colors p {
		margin-block: calc(0.25 * var(--space, 1em));
	}

	strong {
		text-transform: capitalize;
	}

	ol {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 0;
		font-size: 1rem;
		list-style: none;
	}

	li {
		margin-block: calc(0.25 * var(--space, 1em));
	}

	li span {
		color: var(--color);
	}

	li::after {
		content: "";
		background: var(--color);
		display: block;
		padding: 1em;
	}
</style>
