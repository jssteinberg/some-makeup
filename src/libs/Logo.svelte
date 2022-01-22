<span class="scene">
	<span class="cube">
		<span class="side front">M</span>
		<span class="side top">A</span>
		<span class="side back">K</span>
		<span class="side bottom">E</span>
		<span class="side right">U</span>
		<span class="side left">P</span>
	</span>
</span>

<style>
	.scene {
		--c-h: var(--dice-hue, 358.7);
		--c-s: 100%;
		--c-l: 43.9%;
		--size: calc(7.5 * 1em);

		width: 100%;
		display: grid;
		place-items: center;
		margin-block-end: calc(3 * var(--spacer, 1rem));
	}

	.cube {
		--cube-size: calc(.25 * var(--size));

		display: block;
		position: relative;
		width: var(--cube-size);
		height: var(--cube-size);
		transform-style: preserve-3d;
		transform: rotateX(0deg) rotateY(-55deg) rotateZ(35deg);
	}

	.side {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		display: grid;
		place-items: center;
		background: hsla(0,0%,0%,.5);
	}

	/* front */
	.front { transform: translateZ(calc(0.5 * var(--cube-size))); }
	/* back */
	.back { transform: translateZ(calc(-0.5 * var(--cube-size))) rotateZ(180deg); }
	/* left */
	.left { transform: rotateY(90deg) translateZ(calc(0.5 * var(--cube-size))) rotateZ(-90deg); }
	/* right */
	.right { transform: rotateY(-90deg) translateZ(calc(0.5 * var(--cube-size))) rotateZ(90deg); }
	/* top */
	.top { transform: rotateX(90deg) translateZ(calc(0.5 * var(--cube-size))); }
	/* bottom */
	.bottom { transform: rotateX(-90deg) translateZ(calc(0.5 * var(--cube-size))); }
</style>
