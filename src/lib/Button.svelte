<script>
	let classes;

	export let disabled;
	export let trueDisabled;
	export let primary;
	export let href;
	export let hue;
	export { classes as class };

	$: saturation = hue ? "100%" : undefined;
	$: style =
		hue && saturation
			? `--hue: ${hue}; --saturation: ${saturation}`
			: undefined;

	classes = `button ${classes || ""} ${primary ? "button--primary" : ""} ${
		disabled || trueDisabled ? `button--disabled` : ``
	}`;
</script>

{#if typeof href === "string" && href.length}
	<a
		{href}
		class={classes ? classes : undefined}
		style={style ? style : undefined}
	>
		<slot />
	</a>
{:else}
	<button
		aria-disabled={disabled}
		disabled={trueDisabled}
		class={classes ? classes : undefined}
		style={style ? style : undefined}
	>
		<slot />
	</button>
{/if}

<style lang="postcss">
	:where(a, button) {
		--padding-block: calc(0.5 * var(--space, 1rem));
		--shadow-size: 0.55em;
		--_shadow-padding: var(--shadow-size);

		--_min-height: calc(
			var(--touch-target-size) - var(--padding-block) * 2 - var(--shadow-size)
		);

		all: unset;
		background: hsl(var(--hue, 0), var(--saturation, 0%), 20%);
		border-radius: var(--border-radius, 0);
		box-shadow: inset 0 calc(-1 * var(--shadow-size))
			hsla(var(--hue, 0), var(--saturation, 0%), 12.5%, 70%);
		box-sizing: border-box;
		cursor: pointer;
		color: white;
		display: inline-block;
		font-size: var(--font-size, 1em);
		font-weight: var(--font-weight, normal);
		line-height: var(--line-height, 1.375);
		min-height: var(--_min-height);
		padding: var(--padding-block) 1em
			calc(var(--padding-block) + var(--_shadow-padding));
	}

	:where(a, button):focus {
		outline: 2px solid
			hsl(
				var(--hue--focus, var(--hue, 0)),
				var(--saturation--focus, var(--saturation, 0%)),
				25%
			);
		outline-offset: 1px;
	}

	:where(a, button):not(.button--disabled):active {
		box-shadow: none;
		position: relative;
		top: var(--shadow-size);
	}

	:where(.button--disabled) {
		box-shadow: none;
		cursor: default;
		opacity: 0.65;
		position: relative;
		top: var(--shadow-size);
	}
</style>
