# CSS Casino Dice

<div class="wrapper">
	<Dice />
</div>

<script>
	import Dice from '../components/dice/dice.svelte';
</script>

<style>
	:global(:root) {
		background: radial-gradient(ellipse 100% 25vh, red, maroon 25%, black);
		min-height: 100vh;
	}

	h1 {
		text-align: center;
		font-family: georgia, serif;
		font-weight: normal;
	}

	.wrapper {
		display: grid;
		place-items: center;
	}
</style>
