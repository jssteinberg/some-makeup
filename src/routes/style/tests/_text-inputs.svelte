<section class="text-inputs">
	<h2>Text Inputs</h2>

	<section>
		<h3><code>input[type="text"]</code></h3>

		<label for="name">Name (4 to 8 characters):</label>
	
		<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" placeholder="text" />
	</section>

	<section>
		<h3><code>input[type="search"]</code></h3>
		<label for="site-search">Search the site:</label>
		<input type="search" id="site-search" name="q">
	
		<button>Search</button>
	</section>

	<section>
		<h3><code>input[type="email"]</code></h3>
		<label for="email">Enter your globex.com email:</label>
	
		<input type="email" id="email"
			pattern=".+@globex\.com" size="30" required>
	</section>

	<section>
		<h3><code>input[type="tel"]</code></h3>
		<label for="phone">Enter your phone number:</label>
	
		<input type="tel" id="phone" name="phone"
			 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			 required>
	
		<small>Format: 123-456-7890</small>
	</section>

	<section>
		<h3><code>input[type="url"]</code></h3>
		<label for="url">Enter an https:// URL:</label>
	
		<input type="url" name="url" id="url"
			 placeholder="https://example.com"
			 pattern="https://.*" size="30"
			 required>
	</section>

	<section>
		<h3><code>input[type="password"]</code></h3>
	
		<label for="pass">Password (8 characters minimum):</label>
		<input type="password" id="pass" name="password"
			 minlength="8" required>
	</section>

	<section>
		<h3><code>input[type="number"]</code></h3>
		<label for="tentacles">Number of tentacles (10-100):</label>
	
		<input type="number" id="tentacles" name="tentacles"
			 min="10" max="100">
	</section>

	<section>
		<h3><code>input[type="time"]</code></h3>
		<label for="appt">Choose a time for your meeting:</label>
	
		<input type="time" id="appt" name="appt"
			 min="09:00" max="18:00" required>
	
		<small>Office hours are 9am to 6pm</small>
	</section>

	<section>
		<h3><code>input[type="week"]</code></h3>
		<label for="week">Choose a week in May or June:</label>
	
		<input type="week" name="week" id="camp-week"
			 min="2018-W18" max="2018-W26" required>
	</section>

	<section>
		<h3><code>input[type="month"]</code></h3>
		<label for="start">Start month:</label>
	
		<input type="month" id="start" name="start"
			 min="2018-03" value="2018-05">
	</section>

	<section>
		<h3><code>input[type="date"]</code></h3>
		<label for="start">Start date:</label>
	
		<input type="date" id="start" name="trip-start"
			value="2018-07-22"
			min="2018-01-01" max="2018-12-31">
	</section>

	<section>
		<h3><code>input[type="datetime-local"]</code></h3>
		<label for="meeting-time">Choose a time for your appointment:</label>
	
		<input type="datetime-local" id="meeting-time"
			name="meeting-time" value="2018-06-12T19:30"
			min="2018-06-07T00:00" max="2018-06-14T00:00">
	</section>
</section>

<style>
	/* input::file-selector-button, */
	/* input::-webkit-file-upload-button { */
	/* 	background: blue; */
	/* 	color: white; */
	/* 	border: none; */
	/* } */
</style>
