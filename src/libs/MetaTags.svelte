<script>
	export let data;

	$: title = data?.metaTitle ?? data?.title;
	$: description = data.description;
	$: canonical = data.canonical;
	$: author = data.author;
	$: image = data.image;
	$: keywords = data.keywords;
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta itemprop="name" content={title} />
		<meta property="twitter:title" content={title} />
		<meta property="og:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta itemprop="description" content={description} />
		<meta property="twitter:description" content={description} />
		<meta property="og:description" content={description} />
	{/if}

	{#if canonical}
		<meta name="url" content={canonical} />
		<link rel="canonical" href={canonical} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	{#if image}
		<meta itemprop="image" content={image} />
		<link rel="image_src" href={image} />
		<meta property="twitter:image" content={image} />
		<meta property="og:image" content={image} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
</svelte:head>
