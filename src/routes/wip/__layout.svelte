<script>
	import { page } from '$app/stores';
</script>

<div class={$page.url.pathname.replace(/^\//, '').replace(/\//g, '-') || 'home'}>
	<slot />
</div>
