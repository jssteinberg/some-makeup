<script>
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

	const colors = [
		{ h: "243.2", s: "17.8", l: "10", name: "background" },
		{
			h: "243.2",
			s: "17.8",
			l: "79",
			name: "foreground",
		},

		{
			h: "243.2",
			s: "17.8",
			l: "21",
			name: "black",
		} /* hsl(243.2,17.8%,21%) */,
		{
			h: "247.3",
			s: "32.1",
			l: "31.8",
			name: "black",
		} /* hsl(246.9,32.1%,31.8%) */,

		{ h: "7.3", s: "41", l: "55", name: "red" } /* hsl(7.3,41.5%,53.7%) */,
		{ h: "7.5", s: "42.7", l: "70.6", name: "red" } /* hsl(7.5,42.7%,70.6%) */,

		{
			h: "164.5",
			s: "41",
			l: "55",
			name: "green",
		} /* hsl(164.5,41.1%,59.4%) */,
		{ h: "167.8", s: "42.7", l: "70.6", name: "green" },

		{ h: "67.3", s: "41", l: "55", name: "yellow" } /* hsl(67.3,41.5%,53.7%) */,
		{
			h: "67.5",
			s: "42.7",
			l: "70.6",
			name: "yellow",
		} /* hsl(67.5,42.7%,70.6%) */,

		{ h: "214.3", s: "41", l: "55", name: "blue" } /* hsl(214.3,39.1%,54.3%) */,
		{
			h: "243.2",
			s: "42.7",
			l: "70.6",
			name: "blue",
		} /* hsl(246.3,40.6%,41.6%) */,
		/* { */
		/* 	h: "223.7", */
		/* 	s: "42.7", */
		/* 	l: "70.6", */
		/* 	name: "blue", */
		/* },
		/* hsl(223.7,28.9%,47.5%) */

		{
			h: "247.3",
			s: "41",
			l: "55",
			name: "magenta",
		} /* hsl(247.3,41.5%,53.7%) */,
		{
			h: "247.3",
			s: "42.7",
			l: "70.6",
			name: "magenta",
		} /* hsl(247.5,42.7%,70.6%) */,

		{ h: "187.3", s: "41", l: "55", name: "cyan" } /* hsl(187.3,41.5%,53.7%) */,
		{
			h: "187.5",
			s: "42.7",
			l: "70.6",
			name: "cyan",
		} /* hsl(187.5,42.7%,70.6%) */,

		/* { h: "247.3", s: "0", l: "55", name: "white" }, */
		{
			h: "105.7",
			s: "41",
			l: "90",
			name: "white",
		} /* hsl(105.7,41.2%,90%) */,
		{ h: "0", s: "0", l: "100", name: "white" },
	];
</script>

<article class="app-theme-main-content">
	<h1>Some Dark Term <span>1.</span></h1>

	<ol>
		{#each colors as color}
			<li
				style="--color: {color.h && color.s && color.l
					? `hsl(${color.h} ${color.s}% ${color.l}%)`
					: `#${color.hex}`}"
			>
				{#if color.name}
					<strong>{color.name}</strong>
				{/if}
				<span>color</span>
			</li>
		{/each}
	</ol>

	<pre><code>
# somedarkterm1
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
</article>

<style>
	:global(:root) {
		--bg: #15151e;
		--fg: #e2e0eb;
	}

	h1 > :last-child {
		font-size: 3em;
	}

	strong {
		text-transform: capitalize;
	}

	ol {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, max(10em, 50%));
	}

	li {
		margin-block: 0.5em;
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
