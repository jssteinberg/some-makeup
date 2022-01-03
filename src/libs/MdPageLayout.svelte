<script>
	export let title = 'Knut';
	export let lang;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div {lang}>
	<slot />
</div>
