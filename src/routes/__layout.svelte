<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, "$1");
	const data = Object.keys(markdownFiles)
		.map((path) => {
			return {
				filePath: path,
				slug: getSlug(path),
				path: `${page.path}/${getSlug(path)}`,
				title: markdownFiles[path].metadata?.title || getSlug(path),
				metadata: markdownFiles[path].metadata,
			};
		})
		.filter((item) => !['index'].includes(item.title));

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

	<ul class="posts">
		{#each posts as post}
			<li>
				<a
					id={post.title.toLowerCase()}
					aria-current={$page.path === post.path ? 'page' : undefined}
					href={post.path}
					sveltekit:prefetch
					>

					<span class="post-title link">{post.title}</span>

					{#if post.metadata?.date}
						<span class="date">
							<time>{post.metadata.date[0]}</time>
						</span>
					{/if}

				</a>
			</li>
		{/each}
	</ul>

	<p>
		<a sveltekit:prefetch href="/">Some makeup</a> {new Date().getFullYear()};
		<a href="/about">About</a>
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

	main > :global(:not(:where(hr))),
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
		border: none;
	}

	:global(hr),
	p::before,
	.footer::before {
		--block-start-size: calc(4 * var(--spacer, 1rem));
		--sep-size: calc(2 * var(--spacer, 1rem));

		background: currentColor;
		content: '';
		display: block;
		margin: var(--block-start-size) auto;
		padding: 0;
		width: var(--decor-width); height: var(--sep-size);
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

	.posts a {
		text-decoration: none;
		margin-block-start: calc(2.5 * var(--spacer, 1rem) - var(--decor-width));
	}

	.posts a::before {
		content: '';
		display: block;
		background: currentColor;
		width: var(--decor-width); height: var(--decor-width);
		margin: 0 auto calc(1.5 * var(--spacer, 1rem));
		opacity: .5;
	}

	.posts a:is(:hover,:focus)::before {
		opacity: 1;
		transition: .25s ease-in-out;
	}

	.date {
		font-size: .8em;
	}
</style>
