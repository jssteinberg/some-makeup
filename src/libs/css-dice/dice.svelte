<script>
	export let bg = false;
	export let hue = 358.7;
</script>

<div class="container" class:bg={bg} aria-hidden="true" style={`--dice-hue: ${hue}deg`}>
	<div class="cube">
		<div class="side front">1</div>
		<div class="side left">2</div>
		<div class="side right">3</div>
		<div class="side back">4</div>
		<div class="side top">5</div>
		<div class="side bottom">6</div>
	</div>
</div>

<style>
	@keyframes rotateDice {
		0%     { transform: rotateX(0deg)   rotateY(0deg)    }
		100%   { transform: rotateX(-360deg) rotateY(-360deg) }
	}

	.container {
		--c-h: var(--dice-hue, 358.7);
		--c-s: 100%;
		--c-l: 43.9%;
		--size: calc(7.5 * 1em);

		font-size: 2em;
		width: min(100%, calc(2 * var(--size)));
		height: var(--size);
		display: grid;
		place-items: center;
		perspective: calc(4 * var(--size));
		perspective-origin: top right;
	}

	.container.bg::after {
		content: '';
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
		border: 1px solid hsla(var(--c-h), var(--c-s), var(--c-l), 25%);
	}

	.cube {
		--cube-size: calc(.25 * var(--size));

		position: relative;
		width: var(--cube-size);
		height: var(--cube-size);
		transform-style: preserve-3d;

		animation: rotateDice 25s linear infinite;
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
		transform: translateZ(calc(-0.5 * var(--cube-size)));
	}

	.left {
		transform: rotateY(90deg) translateZ(calc(0.5 * var(--cube-size)));
	}

	.right {
		transform: rotateY(-90deg) translateZ(calc(0.5 * var(--cube-size)));
	}

	.top {
		transform: rotateX(90deg) translateZ(calc(0.5 * var(--cube-size)));
	}

	.bottom {
		transform: rotateX(-90deg) translateZ(calc(0.5 * var(--cube-size)));
	}
</style>
