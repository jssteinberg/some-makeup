---
title: CSS Dice
---

# CSS Dice

<div class="wrapper">
	<Dice bg />
</div>

<script>
	import Dice from '../libs/css-dice/dice.svelte';
</script>

<style>
	h1 {
		text-align: center;
		font-family: serif;
		font-size: 2em;
		font-weight: normal;
	}

	.wrapper {
		display: grid;
		place-items: center;
	}
</style>
