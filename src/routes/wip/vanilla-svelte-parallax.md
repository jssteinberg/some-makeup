---
title: Vanilla Svelte Parallax
date: ['2022-03-21']
---

# Vanilla Svelte Parallax

<p style:transform={`translate3d(0, ${scrollY * -.1}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.2}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.3}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.4}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.5}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.6}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.7}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.8}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -.9}px, 0)`}></p>
<p style:transform={`translate3d(0, ${scrollY * -1}px, 0)`}></p>

<style>
	p {
		background: maroon;
		height: 5vh;
	}
</style>

<svelte:window bind:scrollY />

<script>
	let scrollY = 0;
</script>
