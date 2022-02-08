<script>
	import { onDestroy } from 'svelte';
	import './app-accent-hue.css';

	export let hue = 0;
	const className = 'accent-hue';
	const setNewCssColors = ({ accentHue }) => {
		if (typeof document === 'undefined') return false;
		document.documentElement.style.setProperty('--accent-hue', accentHue);
		document.documentElement.classList.add(className);
		return true;
	};

	onDestroy(() =>
		typeof document !== 'undefined' ? document.documentElement.classList.remove(className) : false
	);

	$: {
		setNewCssColors({ accentHue: hue });
	}
</script>
