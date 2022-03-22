<div aria-hidden>
	<style lang="scss">
		@use '../line-height.css';

		main :is(
			div, header, nav, footer,
			address, datalist, details, fieldset, pre, table,
			canvas, embed, figure, iframe, object, video,
			dl, ol, ul,
			blockquote, p
		) {
			line-height: calc(1 + var(--added-lead));
		}
	</style>
</div>
