<script>
	import { page } from '$app/stores';

	const links = [
		{
			label: 'Introduction',
			href: '/style/info'
		},
		{
			label: 'Fix CSS',
			href: '/style/info/fix'
		}
		/* { */
		/* 	label: 'Space & Flow CSS', */
		/* 	href: '/style/space-flow-css', */
		/* }, */
	];
</script>

<article>
	<header>
		{#if $page.routeId === `style/info`}
			<h1><a href="/style">makeup-style</a> <strong><a href="/style/info">in-depth</a></strong></h1>
		{:else}
			<h2><a href="/style">makeup-style</a> <strong><a href="/style/info">in-depth</a></strong></h2>
		{/if}

		<ol>
			{#each links as item, i}
				<li>
					<a
						href={item.href}
						sveltekit:prefetch
						class="touch-target"
						aria-current={$page.url.pathname === item.href ? `page` : undefined}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ol>
	</header>

	<slot />
</article>

<style>
	header {
		--bg-9: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .9);
		--bg-75: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .75);

		background: linear-gradient(
			var(--bg-9),
			var(--bg-75),
			transparent
		);
		margin-block-end: 1rem;
		overflow-x: auto;
		padding-inline: var(--view-inline);

		display: flex;
		align-items: center;
		gap: 1em;

		position: sticky;
		top: 0;
		z-index: 1;
	}

	header * {
		white-space: nowrap;
	}

	h1,
	h2 {
		font-size: 1em;
		font-weight: normal;
		line-height: inherit;
		margin: 0;
	}

	header ol {
		list-style: inside decimal;
		margin: 0;
		padding: 0;

		display: flex;
		gap: 1em;
	}

	[aria-current] {
		text-decoration: none;
	}
</style>
