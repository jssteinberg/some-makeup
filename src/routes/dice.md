---
title: Dice
date: ['2021-20-12']
---

# Some Makeup **Dice**

<div class="wrapper">
	<Dice bg hue={deg} />
</div>

<hr/>

<p>
	<label>
		HSL color hue (0.00-360.00):
		<input type="number" bind:value={deg} /> degrees
	</label>
</p>

<script>
	import Dice from '../libs/css-dice/dice.svelte';
	import {onDestroy} from 'svelte';
	let deg = 358.7;
	$: setCssColor = setNewCssColors(deg);

	const setNewCssColors = (deg) => {
		if (typeof document === 'undefined') return false;
		document.documentElement.style.setProperty('--new-fg-h', deg);
		document.documentElement.classList.add('new-colors');
		return true;
	};

	onDestroy(() => typeof document !== 'undefined' ? document.documentElement.classList.remove('new-colors') : false);
</script>

<style>
	:global(:root.new-colors) {
		background: hsl(var(--new-fg-h,358.7),25%,5%);
	}

	:global(:root.new-colors) * {
		accent-color: hsl(var(--new-fg-h,358.7),75%,75%);
		color: hsl(var(--new-fg-h,358.7),75%,75%);
	}

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

	input {
/* Some resets */
font-size: inherit;
padding: calc(.5 * var(--spacer, 1rem)) 1em;
border: none;

		background: hsl(var(--new-fg-h),25%,12.5%);
		color: inherit;

		border-radius: .5rem;
	}

	input:focus {
		outline: 1px solid hsl(var(--new-fg-h),100%,43.9%);
		border-radius: 0;
	}
</style>
