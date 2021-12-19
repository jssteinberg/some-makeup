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
		// ignore some slugs
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
	import "../app.css";
	import { page } from '$app/stores';

	export let posts;
</script>

{#if $page.path === '/'}
	<h1>Some Makeup</h1>
{/if}

<main>
	<slot />
</main>

<footer class="footer">
	<h2>Global nav</h2>
	<ol>
		{#each posts as post}
		<li>
			<a
				aria-current={$page.path === post.path ? 'page' : undefined}
				href={post.path}
				>
				{post.title}
			</a>
		</li>
		{/each}
	</ol>

	<p>
		<strong>
			<a href="/">Some makeup</a> {new Date().getFullYear()}
		</strong>
	</p>
</footer>

<style>
	h1,
	h2,
	a {
		font-family: var(--mono-font, monospace);
		font-weight: normal;
		text-align: center;
		text-transform: uppercase;
	}

	main,
	.footer {
		padding: 0 1em;
	}

	.footer,
	main > :global(*) {
		margin-inline-start: auto;
		margin-inline-end: auto;	
		width: min(100%, 40rem);
	}

	h1 {
		margin: calc(2 * var(--spacer, 1em)) 0;
	}

	.footer::before {
		--block-start-size: calc(4 * var(--spacer, 1rem));
		content: '';
		display: block;
		background: currentColor;
		width: var(--spacer, 1rem); height: var(--spacer, 1rem);
		margin: var(--block-start-size) auto calc(.75 * var(--block-start-size));
	}

	.footer {
		font-size: 16px;
		font-family: var(--mono-font, monospace);
		text-align: center;
	}

	ol {
		list-style: none;
		padding: 0;
	}

	a {
		display: inline-grid;
		align-items: center;
		min-height: 48px;
		min-width: 48px;
	}

	a[aria-current] {
		text-decoration: none;
	}
</style>
