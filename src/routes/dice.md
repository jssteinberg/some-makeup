---
title: Dice
date: ['2021-20-12']
---

# [Some Makeup](/) **Dice**

<div class="wrapper">
	<Dice bg hue={deg} />
</div>

<hr/>

<p>
	<input type="range" bind:value={deg} min="0" max="359.99" step="0.01">
</p>

<p>
	<label>
		Dice color hue (0.00-360.00):
		<input type="number" inputmode="decimal" min="0" max="359.99" maxlength="6" step="0.01" bind:value={deg} /> degrees
	</label>
</p>

<AccentHue hue={deg} />

<script>
	import Dice from '../libs/css-dice/dice.svelte';
	import AccentHue from '../libs/AccentHue.svelte';
	import '../libs/app-input.css';

	let deg = 358.7;
</script>

<style>
	h1 strong {
		display: block;
		font-size: 2em;
		font-family: serif;
		font-weight: normal;
		text-transform: none;
	}

	.wrapper {
		display: grid;
		place-items: center;
	}

	input[type="number"] {
		width: calc(6ch + 4em);
		text-align: center;
	}

	input[type="range"] {
		width: calc(100% - 1.5rem);
	}
</style>
