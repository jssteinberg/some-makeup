<div class="dropdown-wrapper">
	<input
		id="dropdown-toggle"
		type="checkbox"
		value="toggle"
		aria-controls="dropdown-content"
		aria-expanded="true"
	/>
	<label for="dropdown-toggle">Toggle</label>

	<div id="dropdown-content">
		<slot />
	</div>
</div>

<style>
	.dropdown-wrapper:not(:focus-within) #dropdown-content,
	#dropdown-toggle:not(:checked) ~ #dropdown-content {
		display: none;
	}
</style>
