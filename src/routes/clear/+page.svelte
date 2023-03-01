<h1>Clear</h1>

<div class="dark bg-black py-4">
	<p class="text-code">primary</p>
</div>

<div class="light bg-white py-4">
	<p class="text-code">primary</p>
</div>

<div class="primary-ls grid grid-cols-10">
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
</div>

<div class="primary-cs grid grid-cols-10">
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
</div>

<div class="primary-lcs grid grid-cols-10">
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
</div>

<div class="primary-l-cs grid grid-cols-10">
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
	<span class="block h-16" />
</div>

<style>
	h1,
	p {
		margin-inline: var(--space-edge-x);
	}

	h1,
	h1 ~ * {
		font-family: monospace;
		font-size: 2rem;
	}

	.dark { background-color: oklch(2.72% 0.054 287.43); }
	.dark { background-color: oklch(12.72% 0.004 287.43); }

	.text-code {
		color: oklch(85% 0.05 287.43);
	}

	/* light mode */
	.light .text-code {
		color: oklch(15% 0.075 287.43);
	}

	.primary-ls :nth-child(1) { background-color: oklch(2.72% 0.054 287.43); }
	.primary-ls :nth-child(2) { background-color: oklch(12.72% 0.054 287.43); }
	.primary-ls :nth-child(3) { background-color: oklch(22.72% 0.054 287.43); }
	.primary-ls :nth-child(4) { background-color: oklch(32.72% 0.054 287.43); }
	.primary-ls :nth-child(5) { background-color: oklch(42.72% 0.054 287.43); }
	.primary-ls :nth-child(6) { background-color: oklch(52.72% 0.054 287.43); }
	.primary-ls :nth-child(7) { background-color: oklch(62.72% 0.054 287.43); }
	.primary-ls :nth-child(8) { background-color: oklch(72.72% 0.054 287.43); }
	.primary-ls :nth-child(9) { background-color: oklch(82.72% 0.054 287.43); }
	.primary-ls :nth-child(10) { background-color: oklch(92.72% 0.054 287.43); }

	.primary-cs :nth-child(1) { background-color: oklch(32.72% 0.004 287.43); }
	.primary-cs :nth-child(2) { background-color: oklch(32.72% 0.014 287.43); }
	.primary-cs :nth-child(3) { background-color: oklch(32.72% 0.024 287.43); }
	.primary-cs :nth-child(4) { background-color: oklch(32.72% 0.034 287.43); }
	.primary-cs :nth-child(5) { background-color: oklch(32.72% 0.044 287.43); }
	.primary-cs :nth-child(6) { background-color: oklch(32.72% 0.054 287.43); }
	.primary-cs :nth-child(7) { background-color: oklch(32.72% 0.064 287.43); }
	.primary-cs :nth-child(8) { background-color: oklch(32.72% 0.074 287.43); }
	.primary-cs :nth-child(9) { background-color: oklch(32.72% 0.084 287.43); }
	.primary-cs :nth-child(10) { background-color: oklch(32.72% 0.094 287.43); }

	.primary-lcs :nth-child(1) { background-color: oklch(2.72% 0.004 287.43); }
	.primary-lcs :nth-child(2) { background-color: oklch(12.72% 0.014 287.43); }
	.primary-lcs :nth-child(3) { background-color: oklch(22.72% 0.024 287.43); }
	.primary-lcs :nth-child(4) { background-color: oklch(32.72% 0.034 287.43); }
	.primary-lcs :nth-child(5) { background-color: oklch(42.72% 0.044 287.43); }
	.primary-lcs :nth-child(6) { background-color: oklch(52.72% 0.054 287.43); }
	.primary-lcs :nth-child(7) { background-color: oklch(62.72% 0.064 287.43); }
	.primary-lcs :nth-child(8) { background-color: oklch(72.72% 0.074 287.43); }
	.primary-lcs :nth-child(9) { background-color: oklch(82.72% 0.084 287.43); }
	.primary-lcs :nth-child(10) { background-color: oklch(92.72% 0.094 287.43); }

	.primary-l-cs :nth-child(1) { background-color: oklch(2.72% 0.094 287.43); }
	.primary-l-cs :nth-child(2) { background-color: oklch(12.72% 0.084 287.43); }
	.primary-l-cs :nth-child(3) { background-color: oklch(22.72% 0.074 287.43); }
	.primary-l-cs :nth-child(4) { background-color: oklch(32.72% 0.064 287.43); }
	.primary-l-cs :nth-child(5) { background-color: oklch(42.72% 0.054 287.43); }
	.primary-l-cs :nth-child(6) { background-color: oklch(52.72% 0.044 287.43); }
	.primary-l-cs :nth-child(7) { background-color: oklch(62.72% 0.034 287.43); }
	.primary-l-cs :nth-child(8) { background-color: oklch(72.72% 0.024 287.43); }
	.primary-l-cs :nth-child(9) { background-color: oklch(82.72% 0.014 287.43); }
	.primary-l-cs :nth-child(10) { background-color: oklch(92.72% 0.004 287.43); }

</style>
