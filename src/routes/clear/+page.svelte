<article>
	<h1 class="mt-[2em]">Clear</h1>

	<div class="dark bg-black py-4">
		<p class="text-white">white</p>
		<p>primary</p>
	</div>

	<div class="light bg-white py-4">
		<p class="text-black">black</p>
		<p>primary</p>
	</div>

	<div class="primary-l grid grid-cols-10">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as _}
			<span class="block h-16" />
		{/each}
	</div>

	<div class="primary-lc grid grid-cols-10">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as _}
			<span class="block h-16" />
		{/each}
	</div>

	<div class="primary-l-c grid grid-cols-10">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as _}
			<span class="block h-16" />
		{/each}
	</div>

	<div class="primary-c grid grid-cols-10">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as _}
			<span class="block h-16" />
		{/each}
	</div>
</article>

<style>
	h1,
	p {
		margin-inline: var(--space-edge-x);
	}

	h1,
	h1 ~ * {
		font-family: monospace;
		font-size: 1rem;
	}

	.dark {
		/* lc */
		background: oklch(12.72% 0.014 287.43);
		color: oklch(71% 0.17 287.43);
	}

	.light {
		/* l-c */
		color: oklch(31% 0.17 287.43);
	}

	.primary-l :nth-child(1) {
		background-color: oklch(2.72% 0.054 287.43);
	}
	.primary-l :nth-child(2) {
		background-color: oklch(12.72% 0.054 287.43);
	}
	.primary-l :nth-child(3) {
		background-color: oklch(22.72% 0.054 287.43);
	}
	.primary-l :nth-child(4) {
		background-color: oklch(32.72% 0.054 287.43);
	}
	.primary-l :nth-child(5) {
		background-color: oklch(42.72% 0.054 287.43);
	}
	.primary-l :nth-child(6) {
		background-color: oklch(52.72% 0.054 287.43);
	}
	.primary-l :nth-child(7) {
		background-color: oklch(62.72% 0.054 287.43);
	}
	.primary-l :nth-child(8) {
		background-color: oklch(72.72% 0.054 287.43);
	}
	.primary-l :nth-child(9) {
		background-color: oklch(82.72% 0.054 287.43);
	}
	.primary-l :nth-child(10) {
		background-color: oklch(92.72% 0.054 287.43);
	}

	.primary-lc :nth-child(1) {
		background-color: oklch(2.72% 0.004 287.43);
	}
	.primary-lc :nth-child(2) {
		background-color: oklch(12.72% 0.014 287.43);
	}
	.primary-lc :nth-child(3) {
		background-color: oklch(22.72% 0.024 287.43);
	}
	.primary-lc :nth-child(4) {
		background-color: oklch(32.72% 0.034 287.43);
	}
	.primary-lc :nth-child(5) {
		background-color: oklch(42.72% 0.044 287.43);
	}
	.primary-lc :nth-child(6) {
		background-color: oklch(52.72% 0.054 287.43);
	}
	.primary-lc :nth-child(7) {
		background-color: oklch(62.72% 0.064 287.43);
	}
	.primary-lc :nth-child(8) {
		background-color: oklch(72.72% 0.074 287.43);
	}
	.primary-lc :nth-child(9) {
		background-color: oklch(82.72% 0.084 287.43);
	}
	.primary-lc :nth-child(10) {
		background-color: oklch(92.72% 0.094 287.43);
	}

	.primary-l-c :nth-child(1) {
		background-color: oklch(2.72% 0.094 287.43);
	}
	.primary-l-c :nth-child(2) {
		background-color: oklch(12.72% 0.084 287.43);
	}
	.primary-l-c :nth-child(3) {
		background-color: oklch(22.72% 0.074 287.43);
	}
	.primary-l-c :nth-child(4) {
		background-color: oklch(32.72% 0.064 287.43);
	}
	.primary-l-c :nth-child(5) {
		background-color: oklch(42.72% 0.054 287.43);
	}
	.primary-l-c :nth-child(6) {
		background-color: oklch(52.72% 0.044 287.43);
	}
	.primary-l-c :nth-child(7) {
		background-color: oklch(62.72% 0.034 287.43);
	}
	.primary-l-c :nth-child(8) {
		background-color: oklch(72.72% 0.024 287.43);
	}
	.primary-l-c :nth-child(9) {
		background-color: oklch(82.72% 0.014 287.43);
	}
	.primary-l-c :nth-child(10) {
		background-color: oklch(92.72% 0.004 287.43);
	}

	.primary-c :nth-child(1) {
		background-color: oklch(32.72% 0.004 287.43);
	}
	.primary-c :nth-child(2) {
		background-color: oklch(32.72% 0.014 287.43);
	}
	.primary-c :nth-child(3) {
		background-color: oklch(32.72% 0.024 287.43);
	}
	.primary-c :nth-child(4) {
		background-color: oklch(32.72% 0.034 287.43);
	}
	.primary-c :nth-child(5) {
		background-color: oklch(32.72% 0.044 287.43);
	}
	.primary-c :nth-child(6) {
		background-color: oklch(32.72% 0.054 287.43);
	}
	.primary-c :nth-child(7) {
		background-color: oklch(32.72% 0.064 287.43);
	}
	.primary-c :nth-child(8) {
		background-color: oklch(32.72% 0.074 287.43);
	}
	.primary-c :nth-child(9) {
		background-color: oklch(32.72% 0.084 287.43);
	}
	.primary-c :nth-child(10) {
		background-color: oklch(32.72% 0.094 287.43);
	}
</style>
