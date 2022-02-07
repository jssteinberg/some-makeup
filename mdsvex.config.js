const config = {
  layout: {
    //read: '/src/libs/MdsvexReadingLayout.svelte',
    _: '/src/libs/MdsvexLayout.svelte',
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
};

export default config;
