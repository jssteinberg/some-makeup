---
title: Dice
date: ['2021-20-12']
set: ['featured']
---

# [Some Makeup](/) **Dice**

<div class="wrapper">
	<Dice bg hue={deg} />
</div>

<hr/>

<form>
	<p>
		<label>
			Color
			<input type="range" bind:value={deg} min="0" max="359.9" step="0.1">
		</label>

		<label>
			<input type="number" inputmode="decimal" min="0" max="359.9" maxlength="5" step="0.1" bind:value={deg} />
			<br aria-hidden>
			color hue degrees (0.0-359.9)
		</label>
	</p>
</form>

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
		width: calc(5ch + 4em);
		text-align: center;
		margin: calc(.5 * var(--spacer, 1rem)) auto;
	}

	input[type="range"] {
		width: calc(100% - 1.5rem);
	}
</style>
