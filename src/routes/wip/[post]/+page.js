export async function load({ params }) {
	const post = await import(`../${params.post}.md`);
	const meta = post.metadata;
	const content = post.default;

	return {
		content,
		title: meta?.title,
		date: meta?.date,
	};
}
