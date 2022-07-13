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
		{ h: "247", s: "40", l: "10", name: "background" },
		{ h: "247", s: "0", l: "75", name: "foreground" },
		{ h: "247", s: "35", l: "17.5", name: "black" },
		{ h: "247", s: "35", l: "32.5", name: "black" },
		{ h: "348", s: "40", l: "65", name: "red" },
		{ h: "288", s: "35", l: "75", name: "red" },
		{ h: "108", s: "40", l: "65", name: "green" },
		{ h: "117", s: "35", l: "75", name: "green" },
		{ h: "48", s: "40", l: "65", name: "yellow" },
		{ h: "57", s: "35", l: "75", name: "yellow" },
		{ h: "231", s: "40", l: "65", name: "blue" },
		{ h: "214", s: "35", l: "75", name: "blue" },
		{ h: "247", s: "40", l: "65", name: "magenta" },
		{ h: "247", s: "35", l: "75", name: "magenta" },
		{ h: "185", s: "40", l: "65", name: "cyan" },
		{ h: "168", s: "35", l: "75", name: "cyan" },
		{ h: "247", s: "0", l: "65", name: "white" },
		{ h: "0", s: "0", l: "100", name: "white" },
	];
</script>

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

<pre>
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
</pre>

<style>
	:global(:root) {
		--bg: #120f24;
		--fg: #e2e0eb;
	}

	ol {
		list-style: none;
		padding: 0 var(--view-inline);
		display: grid;
		grid-template-columns: repeat(2, max(10em, 50%));
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

	pre {
		margin-block: 2em;
		margin-inline: var(--view-inline);
	}
</style>
