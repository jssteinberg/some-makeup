---
title: Simple Shadow-Beneath Buttons
date: ['2022-01-09']
set: ['typography']
---

# Simple Shadow-Beneath Buttons

Simple buttons with shadow beneath.

A11y requirements: 48px min size and focus. Also avoid `disabled` attribute (use `aria-disabled`), but it must still be allowed, e.g., for pagination. ([CSS-tricks.com/making-disabled-buttons-more-inclusive](//css-tricks.com/making-disabled-buttons-more-inclusive)) ([Some alternative solutions](//stories.justinewin.com/disabled-buttons-dont-have-to-suck-10da0bb6d37e).)

---

Regular and primary:

<p>
<Button>Regular button</Button>
<Button primary>Primary button</Button>
<Button trueDisabled>Regular disabled</Button>
<Button primary disabled>Primary disabled</Button>
</p>

More lines:

<p>
<Button>Regular button with<br>line break</Button>
</p>

With rounded corners:

<p>
<Button class="button--border-radius">Regular button</Button>
<Button class="button--border-radius" primary>Primary button</Button>
<Button class="button--border-radius" disabled>Regular disabled</Button>
<Button class="button--border-radius" primary disabled>Primary disabled</Button>
</p>

Any HSL's hue and saturation:

<p>
<Button hue=1>Regular button</Button>
<Button hue=100>Regular button</Button>
<Button hue=200>Regular button</Button>
<Button hue=300>Regular button</Button>
</p>

<p>
<Button class="button--border-radius" hue=0>Regular button</Button>
<Button class="button--border-radius" hue=100>Regular button</Button>
<Button class="button--border-radius" hue=200>Regular button</Button>
<Button class="button--border-radius" hue=300>Regular button</Button>
</p>

Pill-shape and reduce shadow:

<p>
<Button class="button--pill-radius" hue=0>Regular button</Button>
<Button class="button--pill-radius" hue=100>Regular button</Button>
<Button class="button--pill-radius" hue=200>Regular button</Button>
<Button class="button--pill-radius" hue=300>Regular button</Button>
</p>

<section class="big-buttons">

## Big buttons

<p>
<Button>Regular button</Button>
<Button primary>Primary button</Button>
</p>
<p>
<Button class="button--border-radius">Regular button</Button>
<Button class="button--border-radius" primary>Primary button</Button>
</p>
</section>

<script>
	import Button from '../../libs/Button.svelte';
</script>

<style>
	:global(.button--primary) {
		--hue: 215;
		--saturation: 100%;
	}

	:global(.button--border-radius) {
		border-radius: .5rem;
	}

	:global(.button--pill-radius) {
		border-radius: 5rem;
		--shadow-size: .25em;
	}

	.big-buttons :global(.button) {
		font-size: 1.5em;
	}
</style>
