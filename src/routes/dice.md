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

<script>
	import Dice from '../libs/css-dice/dice.svelte';
	import {onDestroy} from 'svelte';
	let deg = 358.7;
	$: setCssColor = setNewCssColors({fg: deg});

	const setNewCssColors = ({fg}) => {
		if (typeof document === 'undefined') return false;
		document.documentElement.style.setProperty('--new-fg-h', fg);
		document.documentElement.classList.add('new-colors');
		return true;
	};

	onDestroy(() => typeof document !== 'undefined' ? document.documentElement.classList.remove('new-colors') : false);
</script>

<style>
	@import '../app-input.css';

	:global(:root.new-colors) {
		--bg: hsl(var(--new-fg-h,358.7),25%,5%);
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
		color: hsl(var(--new-fg-h,358.7),75%,75%);
		width: calc(6ch + 4em);
		text-align: center;
	}

	input[type="range"] {
		width: 100%;
	}
</style>
