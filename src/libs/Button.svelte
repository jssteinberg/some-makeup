<script>
	let classes;

	export let primary;
	export let href;
	export let hue;
	export { classes as class };

	$: saturation = hue ? '100%' : undefined;
	$: style = hue && saturation ? `--hue: ${hue}; --saturation: ${saturation}` : undefined;

	classes = `button ${classes || ''} ${primary ? 'button--primary' : ''}`;
</script>

{#if typeof href === 'string' && href.length}
	<a {href} class={classes ? classes : undefined} style={style ? style : undefined}>
		<slot />
	</a>
{:else}
	<button class={classes ? classes : undefined} style={style ? style : undefined}>
		<slot />
	</button>
{/if}

<style>
	:where(a,button) {
		--padding-block: calc(.5 * var(--spacer, 1rem));
		--shadow-size: .55em;

		--_touch-target-min-size: max(48px, calc(2 * var(--RRLH, 1.5)));
		--_min-height: calc(var(--_touch-target-min-size) - var(--padding-block) * 2 - var(--shadow-size));

		all: unset;
		background: hsl(var(--hue, 0),var(--saturation, 0%),20%);
		border-radius: var(--border-radius, 0);
		box-shadow: inset 0 calc(-1 * var(--shadow-size)) hsla(var(--hue, 0),var(--saturation, 0%),12.5%,70%);
		cursor: pointer;
		color: white;
		display: inline-block;
		font-size: var(--font-size, 1em);
		font-weight: var(--font-weight, normal);
		line-height: var(--line-height, 1.375);
		min-height: var(--_min-height);
		padding: var(--padding-block) 1em calc(var(--padding-block) + var(--shadow-size));
	}

	:where(a,button):focus {
		outline: 2px solid hsl(var(--hue--focus, var(--hue, 0)),var(--saturation--focus, var(--saturation, 0%)),25%);
		outline-offset: 1px;
	}
</style>
