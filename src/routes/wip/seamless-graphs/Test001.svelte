<script>
	import "charts.css";
	export let title;
	export let titleEffect = "see-trough-transparent";
	export let lang;
</script>

<section {lang}>
	<h2 class={`title ${titleEffect}`}>{@html title}</h2>

	<table
		id="line-example-6"
		class="charts-css line multiple hide-data show-labels"
	>
		<caption> Line Example #6 </caption>
		<thead
			><tr
				><th scope="col"> Year </th> <th scope="col"> Progress 1 </th>
				<th scope="col"> Progress 2 </th> <th scope="col"> Progress 3 </th></tr
			></thead
		>
		<tbody
			><tr
				><th scope="row"> 2000 </th>
				<td style="--start: 0.1; --size: 0.5;"
					><span class="data"> 50 </span></td
				>
				<td style="--start: 0.0; --size: 0.2;"
					><span class="data"> 20 </span></td
				>
				<td style="--start: 0.2; --size: 0.4;"
					><span class="data"> 40 </span></td
				></tr
			>
			<tr
				><th scope="row"> 2010 </th>
				<td style="--start: 0.5; --size: 0.8;"
					><span class="data"> 80 </span></td
				>
				<td style="--start: 0.2; --size: 0.5;"
					><span class="data"> 50 </span></td
				>
				<td style="--start: 0.4; --size: 0.1;"
					><span class="data"> 10 </span></td
				></tr
			>
			<tr
				><th scope="row"> 2020 </th>
				<td style="--start: 0.8; --size: 0.4;"
					><span class="data"> 40 </span></td
				>
				<td style="--start: 0.5; --size: 0.3;"
					><span class="data"> 30 </span></td
				>
				<td style="--start: 0.1; --size: 0.2;"
					><span class="data"> 20 </span></td
				></tr
			></tbody
		>
	</table>
</section>

<style lang="postcss">
	section {
		--_title-size: min(6em, 5vw + 2 * var(--text-body));
		background-image: linear-gradient(
			-135deg,
			hsla(var(--fg-hsl) / 0.1),
			hsla(var(--fg-hsl) / 0.075)
		);
		color: hsla(var(--fg-hsl) / 0.75);
		min-height: 30vh;
		margin: calc(0.5 * var(--_title-size)) 0;
		padding: calc(0.5 * var(--space, 1rem)) var(--space-vx);
		position: relative;
		contain: content;
	}

	.title {
		font-size: var(--_title-size);
	}

	.title.see-trough-transparent {
		background-image: linear-gradient(
			90deg,
			red,
			hsla(var(--fg-hsl) / 0.7) 50%
		);
		color: transparent;
		-webkit-background-clip: text;
	}

	.title.difference {
		color: var(--fg);
		mix-blend-mode: difference;
	}

	table {
		position: absolute;
		inset: auto 0;
		top: 1rem;
		height: calc(100% - 2rem);
		z-index: -1;
	}
</style>
