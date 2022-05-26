export const sortPosts = (posts, sortBy = "date", order = "desc") => {
	if (sortBy === 'date') {
		return order === 'desc'
			? posts.sort((a, b) => (a.date[0] > b.date[0] ? -1 : 1))
			: posts.sort((a, b) => (a.date[0] < b.date[0] ? -1 : 1))
	}

	return posts
}
