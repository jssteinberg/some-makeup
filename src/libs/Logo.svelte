<script>
	export let text = true;
</script>

<span class={`scene ${text ? '' : 'no-text'}`}>
	<span class="letter s">S</span>
	<span class="letter o">o</span>
	<span class="letter m">m</span>
	<span class="letter e">e</span>
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
	.no-text { color: transparent; }

	.letter {
		position: absolute;
		font-size: .8em;
		text-align: center;
		font-family: var(--mono-font, monospace);
		text-transform: uppercase;
	}
	.letter.s { top: 0; left: 0; }
	.letter.o { top: 0; right: 0; }
	.letter.m { bottom: 0; left: 0; }
	.letter.e { bottom: 0; right: 0; }

	.scene {
		--size: calc(7.5 * 1em);
		--cube-size: calc(1.25 * 1em);

		position: relative;
		width: calc(3ch + var(--cube-size));
		height: calc(3.5ex + var(--cube-size));
		display: grid;
		place-items: center;
		margin: 0 auto calc(5 * var(--spacer, 1rem));

		perspective: calc(4 * var(--size));
		perspective-origin: top;
	}

	.cube {
		display: block;
		position: relative;
		width: var(--cube-size);
		height: var(--cube-size);
		transform-style: preserve-3d;
		transform: rotateX(-20deg) rotateY(-20deg) rotateZ(-20deg);
	}

	.side {
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		border: 1px solid rgba(255,255,255,.5);
		background: hsla(0, 0%, 0%, 0);
		color: hsla(0, 0%, 100%, 0);
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
