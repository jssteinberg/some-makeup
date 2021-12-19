<div class="container" aria-hidden="true">
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
	.container {
		--size: calc(10 * var(--spacer, 1rem));

		width: min(100%, calc(2 * var(--size)));
		height: var(--size);
		background: linear-gradient(hsla(358.7,100%,43.9%,20%),hsla(358.7,100%,43.9%,10%));
		border-radius: calc(.5 * var(--spacer));
		display: grid;
		place-items: center;
		perspective: calc(4 * var(--size));
		perspective-origin: top right;
	}

	.cube {
		--cube-size: calc(.25 * var(--size));
		position: relative;
		width: var(--cube-size);
		height: var(--cube-size);
		transform-style: preserve-3d;
	}

	.side {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background: hsla(358.7,100%,43.9%,50%);
		border: 1px solid hsla(358.7,100%,43.9%,25%);
		display: grid;
		place-items: center;
		font-weight: 100;
		color: white;
	}

	.front {
		transform: translateZ(calc(.5 * var(--cube-size)));
		background: hsla(358.7,100%,32.5%,80%);
	}

	.back {
		transform: translateZ(calc(-.5 * var(--cube-size)));
		background: hsla(358.7,100%,43.9%,30%);
	}

	.left {
		transform: rotateY(90deg) translateZ(calc(.5 * var(--cube-size)));
	}

	.right {
		transform: rotateY(-90deg) translateZ(calc(.5 * var(--cube-size)));
	}

	.top {
		transform: rotateX(90deg) translateZ(calc(.5 * var(--cube-size)));
	}

	.bottom {
		transform: rotateX(-90deg) translateZ(calc(.5 * var(--cube-size)));
		background: hsla(358.7,100%,43.9%,75%);
	}
</style>
