# The 2021 CSS D6 Casino Dice

<Dice />

<script>
	import Dice from '../components/dice/dice.svelte';
</script>

<style>
	* {
		font-family: serif;
	}

	.container {
		height: calc(10 * var(--spacer, 1rem));
		width: calc(10 * var(--spacer, 1rem));
		perspective: calc(20 * var(--spacer, 1rem));
		perspective-origin: top right;
	}

	ol {
		list-style: none;
		padding: 0;
		transform-style: preserve-3d;
		position: relative;
		height: calc(5 * var(--spacer, 1rem));
		width: calc(5 * var(--spacer, 1rem));
	}

	li {
		--size: calc(2 * var(--spacer, 1rem));
		background: hsla(358.7,100%,43.9%,50%);
		height: var(--size);
		width: var(--size);
		display: grid;
		place-items: center;

		position: absolute;
	}

	/* front */
	li:nth-child(1) {
		transform: translateZ(var(--size));
	}

	/* top */
	li:nth-child(2) {
		transform:
			translateZ(1em);
		display: none;
	}

	/* left */
	li:nth-child(3) {
		transform: rotateY(90deg) translateZ(var(--size));
	}

	/* right */
	li:nth-child(4) {
		transform:
			rotateY(270deg)
			translateZ(1em);
		display: none;
	}

	/* bottom */
	li:nth-child(5) {
		transform: rotate(90deg);
		display: none;
	}

	/* back */
	li:nth-child(6) {
		transform: translateZ(calc(-1 * var(--size)));
	}
</style>
