<script>
	import {onMount} from 'svelte';
	export let bg = false;
	export let hue = 358.7;

	onMount(() => {
		if (typeof document === 'undefined') return false;
		document.documentElement.classList.add('started-dice-animation');
	});
</script>

<div class="container" class:bg={bg} aria-hidden="true" style={`--dice-hue: ${hue}deg`}>
	<ul class="cube">
		<li class="side front">1</li>
		<li class="side bottom">2</li>
		<li class="side right">3</li>
		<li class="side left">4</li>
		<li class="side top">5</li>
		<li class="side back">6</li>
	</ul>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: block;
	}

	.container {
		--c-h: var(--dice-hue, 358.7);
		--c-s: 100%;
		--c-l: 43.9%;
		--size: calc(7.5 * 1em);

		font-size: 2em;
		width: 100%;
		height: var(--size);
		display: grid;
		place-items: center;
		perspective: calc(4 * var(--size));
		perspective-origin: top;
	}

	.container.bg::after {
		content: '';
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
		border: 1px solid hsla(var(--c-h), var(--c-s), var(--c-l), 25%);
	}

	.cube {
		--cube-size: calc(.25 * var(--size));
		--r-y: -15deg;
		--r-x: -30deg;

		position: relative;
		width: var(--cube-size);
		height: var(--cube-size);
		transform-style: preserve-3d;
		transform: rotateX(var(--r-x)) rotateY(var(--r-y)) rotateZ(0deg);
	}

	@keyframes rotateDice {
		0%   { transform: rotateX(calc(var(--r-x) + 0deg))   rotateY(calc(var(--r-y) + 0deg  )) rotateZ(0deg) }
		25%  { transform: rotateX(calc(var(--r-x) + 7.5deg)) rotateY(calc(var(--r-y) + 90deg )) rotateZ(0deg) }
		50%  { transform: rotateX(calc(var(--r-x) + 0deg))   rotateY(calc(var(--r-y) + 180deg)) rotateZ(0deg) }
		75%  { transform: rotateX(calc(var(--r-x) + 0deg))   rotateY(calc(var(--r-y) + 270deg)) rotateZ(7.5deg) }
		100% { transform: rotateX(calc(var(--r-x) + 0deg))   rotateY(calc(var(--r-y) + 360deg)) rotateZ(0deg) }
	}

	@media (prefers-reduced-motion: no-preference) {
		:global(:root.started-dice-animation) .cube {
			animation: rotateDice 25s linear infinite;
		}
	}

	.side {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background: hsla(var(--c-h), var(--c-s), var(--c-l), 50%);
		background: radial-gradient(
			circle, hsla(var(--c-h), var(--c-s), calc(var(--c-l) - 2.5%), 50%) 37.5%,
			hsla(var(--c-h), var(--c-s), var(--c-l), 100%) 87.5%
		);
		border: 1px solid hsla(var(--c-h), var(--c-s), var(--c-l), 87.5%);

		font-weight: 100;
		color: white;
		text-shadow: 1px 1px hsla(0,0%,0%,25%), -1px -1px hsla(0,0%,0%,25%);

		display: grid;
		place-items: center;
	}

	.front {
		transform: translateZ(calc(0.5 * var(--cube-size)));
	}

	.back {
		transform: translateZ(calc(-0.5 * var(--cube-size))) rotateZ(180deg);
	}

	.left {
		transform: rotateY(90deg) translateZ(calc(0.5 * var(--cube-size))) rotateZ(-90deg);
	}

	.right {
		transform: rotateY(-90deg) translateZ(calc(0.5 * var(--cube-size))) rotateZ(90deg);
	}

	.top {
		transform: rotateX(90deg) translateZ(calc(0.5 * var(--cube-size)));
	}

	.bottom {
		transform: rotateX(-90deg) translateZ(calc(0.5 * var(--cube-size)));
	}
</style>
