---
title: Minimal Buttons
date: ['2022-01-09']
set: ['typography','logo']
---

# Minimal Buttons

*A minimal flexible button design that can respect typographic sizes and usability.*

What is the bare minimum that distinguishes something as a button in any digital context?

Rounded corners or shadow. With only shadow, even square buttons to a button. Shadow wins!

Light button backgrounds with dark text are more iffy. Hence, here I focus on dark backgrounds and white text.

There are some a11y requirements: 48px min size and focus.

<p>
<Button>Regular button</Button>
<Button primary>Primary button</Button>
</p>

<p>
<Button>Regular button with<br>line break</Button>
</p>

With rounded corners:

<p>
<Button class="button--border-radius">Regular button</Button>
<Button class="button--border-radius" primary>Primary button</Button>
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

Pill shape and reduce shadow:

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
	import Button from '../libs/Button.svelte';
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
