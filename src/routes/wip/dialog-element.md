---
title: "The `<dialog>` Element"
---

# The `<dialog>` Element

<p><button on:click={toggle}>Open</button></p>

<dialog {open}>
  <p>Greetings, one and all!</p>

  <form method="dialog">
    <button on:click={toggle}>OK</button>
  </form>
</dialog>

<script>
	let open = false;

	const toggle = () => open = !open;
</script>
