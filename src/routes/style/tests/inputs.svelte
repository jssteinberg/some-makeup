<h1>inputs</h1>

<section>
	<h2><code>textarea</code></h2>

	<p>…should inherit <code>font-family</code>.</p>

	<textarea>{`Some text in textarea`}</textarea>
</section>

<ButtonSection />


<section>
	<h2><code>optgroup</code></h2>

	<label for="dino-select">Choose a dinosaur:</label>
	<select id="dino-select">
			<optgroup label="Theropods">
					<option>Tyrannosaurus</option>
					<option>Velociraptor</option>
					<option>Deinonychus</option>
			</optgroup>
			<optgroup label="Sauropods">
					<option>Diplodocus</option>
					<option>Saltasaurus</option>
					<option>Apatosaurus</option>
			</optgroup>
	</select>
</section>

<style>
	/* textarea { */
	/* 	font-family: inherit; */
	/* } */
</style>

<script>
	import ButtonSection from "./_button.svelte";
</script>
