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
				data,
			},
		};
	}
</script>

<script>
	import "../app.css";
	export let data;
</script>

<main>
	<slot />
</main>

<footer class="menu">
	<h2><em>Global nav.</em></h2>
	<ol>
		{#each data as post}
		<li>
			<span aria-hidden="true">›</span>
			<a href={post.slug}>{post.title}</a>
		</li>
		{/each}

		<li>
			<a href="/">Front</a>
		</li>
	</ol>
</footer>

<style>
	main,
	.menu {
		padding: 0 1em;
	}

	.menu {
		font-family: var(--mono-font, monospace);
		font-size: 16px; /* Use px incase page changes :root font-size */

		margin: 4em 0;
		padding-block-start: 1em;
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
</style>
