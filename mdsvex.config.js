const config = {
  layout: {
    typographic: '/src/libs/MdTypographicLayout.svelte',
    _: '/src/libs/MdPageLayout.svelte',
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
};

export default config;
