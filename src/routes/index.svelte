<script>
	import Dice from '../libs/css-dice/dice.svelte';
	import AccentHue from '../libs/AccentHue.svelte';
	let hue = 358.7;
</script>

<svelte:head>
	<title>Some makeup</title>
</svelte:head>

<Dice />

<p>See Dice</p>

<AccentHue hue={hue} />
