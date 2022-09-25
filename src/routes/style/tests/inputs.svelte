<script>
	import ButtonSection from "./_button.svelte";
	import TextInputs from "./_text-inputs.svelte";
</script>

<h1>Inputs</h1>

<section>
	<h2><code>textarea</code></h2>

	<p>…should inherit <code>font-family</code>.</p>

	<textarea>{`Some text in textarea`}</textarea>
</section>

<ButtonSection />

<section>
	<h2><code>optgroup</code></h2>

	<label for="dino-select">Choose a dinosaur:</label>
	<br />
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

<section>
	<h2>Other Form Elements</h2>

	<fieldset>
		<legend>Choose your favorite monster</legend>

		<input type="radio" id="kraken" name="monster" />
		<label for="kraken">Kraken</label><br />

		<input type="radio" id="sasquatch" name="monster" />
		<label for="sasquatch">Sasquatch</label><br />

		<input type="radio" id="mothman" name="monster" />
		<label for="mothman">Mothman</label>
	</fieldset>
</section>

<TextInputs />

<style>
	/* h1 ~ :global(*) { */
	/* 	text-transform: uppercase; */
	/* } */
</style>
