---
title: CSS Dice
date: ['2021-12-20']
set: ['featured', 'logo']
tags: ['css', '3d']
---

# CSS Dice

Playing with my CSS dice.

<div class="dice-wrapper">
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
    		color hue degrees (0.0-359.9)
    	</label>
    </p>

</form>

<AccentHue hue={deg} />
<GradientPostStyle hue={deg} />

<script>
	import Dice from '/src/libs/css-dice/dice.svelte';
	import AccentHue from '/src/libs/AccentHue.svelte';
	import GradientPostStyle from '/src/libs/GradientPostStyle.svelte';
	import '/src/libs/app-input.css';

	let deg = 358.7;
</script>

<style>
	.dice-wrapper {
		display: grid;
		place-items: center;
		margin-block-end: var(--space, 1em);
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
