<script>
	import { onDestroy } from "svelte";
	import "./gradient-post-style.css";

	export let hue = 180;

	const className = "gradient-post-style";
	const setCss = ({ baseHue }) => {
		if (typeof document === "undefined") return false;
		document.documentElement.style.setProperty("--gradient-base-hue", baseHue);
		document.documentElement.classList.add(className);
		return true;
	};

	$: {
		setCss({
			baseHue: typeof hue === "number" ? hue : 180,
		});
	}

	onDestroy(() =>
		typeof document !== "undefined"
			? document.documentElement.classList.remove(className)
			: false
	);
</script>
