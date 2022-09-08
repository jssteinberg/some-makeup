<section class="button">
	<h2><code>button</code></h2>

	<p>…should inherit <code>font-family</code>.</p>
	<p>…should not affect <code>line-height</code>.</p>

	<p>
		A <button>button</button> is difficult to use out of the box inline. It has
		a lot of default browser styling, and for most sites that use buttons, they
		are styled specifically. How much correction does a <button>button</button> need?
	</p>

	<p>It works better out of the box in a block without normal text:</p>

	<button>Button</button>

	<h2><code>input[type="button"]</code></h2>

	<input class="favorite styled" type="button" value="Add to favorites" />

	<h2><code>input[type="reset"]</code></h2>
	<input type="reset" value="Reset" />

	<h2><code>input[type="submit"]</code></h2>
	<input type="submit" value="Submit" />

	<h2><code>input[type="file"]</code></h2>
	<label for="avatar">Choose a profile picture:</label>

	<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
</section>

<style>
	/* input::file-selector-button, */
	/* input::-webkit-file-upload-button { */
	/* 	background: blue; */
	/* 	color: white; */
	/* 	border: none; */
	/* } */
</style>
