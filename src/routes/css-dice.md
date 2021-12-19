---
title: CSS Dice
---

# CSS Dice

<div class="wrapper">
	<Dice />
</div>

<script>
	import Dice from '../libs/css-dice/dice.svelte';
</script>

<style>
	:global(:root) {
		background: radial-gradient(ellipse 50% 25vh, hsla(358.7,100%,43.9%,15%), hsla(358.7,100%,43.9%,10%) 25%, black), black;
		min-height: 100vh;
	}

	h1 {
		text-align: center;
		font-family: serif;
		font-size: 30px;
		font-weight: normal;
	}

	.wrapper {
		display: grid;
		place-items: center;
	}
</style>
