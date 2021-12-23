<script>
	import Dice from '../libs/css-dice/dice.svelte';
	import AccentHue from '../libs/AccentHue.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let hue = 358.7;
	let js = 'no-js';

	onMount(() => js = 'js');
</script>

<svelte:head>
	<title>Some makeup</title>
</svelte:head>

<div on:click={() => goto('/dice')} class:js>
<Dice />

<p>See Dice</p>
</div>

<AccentHue hue={hue} />

<style>
	.js:hover {
		cursor: pointer;
	}
</style>
