<script>
	import Dice from "../libs/css-dice/dice.svelte";
	import AccentHue from "../libs/AccentHue.svelte";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	let hue = 358.7;
	let js = "no-js";

	onMount(() => (js = "js"));
</script>

<svelte:head>
	<title>Some makeup</title>
</svelte:head>

<Dice />
<p>
	<a
		href="{$page.path}#dice"
		on:click|preventDefault={() => goto("/dice")}
		class:js
		>
		See Dice
	</a>
</p>

<AccentHue {hue} />

<style>
	.js:hover {
		cursor: pointer;
	}
</style>
