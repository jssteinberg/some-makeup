# When Text Overflows

Sometimes text will overflow containers.

```css
.card-title {
	overflow-wrap: anywhere;
}

@supports not (overflow-wrap: anywhere) {
	.card-title {
		word-break: break-word;
	}
}
```

Should these be for document or will it cause side-effects?:

```css
:root {
	overflow-wrap: anywhere;
}

@supports not (overflow-wrap: anywhere) {
	:root {
		word-break: break-word;
	}
}
```
