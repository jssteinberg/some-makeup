<div class="wrapper">
	<button
		aria-controls="simple-dropdown-content"
	>
		Toggler
	</button>

	<div id="simple-dropdown-content" class="content">
		<slot />
	</div>
</div>

<style>
	.content {
		display: none;
	}

	button:hover ~ .content,
	.wrapper:focus-within .content {
		display: block;
	}
</style>
