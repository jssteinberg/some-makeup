<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, "$1");
	const data = Object.keys(markdownFiles)
		.map((path) => {
			return {
				filePath: path,
				slug: getSlug(path),
				path: `/${getSlug(path)}`,
				title: markdownFiles[path].metadata?.title || getSlug(path),
				metadata: markdownFiles[path].metadata,
			};
		})
		.filter((item) => !["index"].includes(item.fileSlug));

	export async function load() {
		return {
			props: {
				posts: data,
			},
		};
	}
</script>

<script>
	import "../libs/app.css";
	import { page } from '$app/stores';

	export let posts;
</script>

<main class="{$page.path.replace(/^\//, '')}">
	{#if $page.path === '/'}
		<h1>Some Makeup</h1>
	{/if}

	<slot />
</main>

<footer class="footer">
	<h2>Nav</h2>
	<ul>
		{#each posts as post}
		<li>
			<a
				aria-current={$page.path === post.path ? 'page' : undefined}
				href={post.path}
				sveltekit:prefetch
				>

				{#if post.metadata?.date}
					<span class="date">
						<time>{post.metadata.date[0]}</time><span class="visually-hidden">:</span>
					</span>
				{/if}

				{post.title}

			</a>
		</li>
		{/each}
	</ul>

	<p>
		<a sveltekit:prefetch href="/">Some makeup</a> {new Date().getFullYear()}
	</p>
</footer>

<style>
	:global(h1),
	h2,
	a {
		font-family: var(--mono-font, monospace);
		font-weight: normal;
		text-align: center;
		text-transform: uppercase;
	}

	main > :global(*),
	footer {
		margin-inline-start: auto;
		margin-inline-end: auto;	
		padding-inline-start: 5vw;
		padding-inline-end: 5vw;	
		width: min(100%, 40rem);
	}

	main {
		margin: calc(2 * var(--spacer, 1em)) 0;
		text-align: center;
	}

	:global(hr) {
		--block-start-size: calc(3 * var(--spacer, 1rem));
		border: none;
		position: relative;
		margin: var(--block-start-size) auto;
	}

	:global(hr::before),
	p::before,
	.footer::before {
		--block-start-size: calc(3 * var(--spacer, 1rem));

		content: '';
		display: block;
		background: currentColor;
		width: var(--spacer, 1rem); height: var(--spacer, 1rem);
		margin: var(--block-start-size) auto;
	}

	.footer {
		font-size: 16px;
		font-family: var(--mono-font, monospace);
		text-align: center;
	}

	.footer ul {
		list-style: none;
		padding: 0;
	}

	a {
		--a-min-size: calc(3 * var(--spacer, 1rem));
		display: inline-grid;
		align-items: center;
		min-height: var(--a-min-size);
		min-width: var(--a-min-size);
	}

	ul a:not(:is(:hover,:focus,[aria-current])) {
		text-decoration: none;
	}

	.date {
		font-size: .8em;
	}
</style>
