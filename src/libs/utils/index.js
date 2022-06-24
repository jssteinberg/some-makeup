export const getSlugFromPath = path => path.replace(/.*\/([^/]*)\..*$/, "$1");

export const getPostsFromFiles = (markdownFiles, url) =>
  Object.keys(markdownFiles)
    .map(path => {
      return {
        filePath: path,
        slug: getSlugFromPath(path),
        path: `${url.pathname}/${getSlugFromPath(path)}`.replace(/^\/\//, `/`),
        title:
          markdownFiles[path].metadata?.title ||
          getSlugFromPath(path).replace(/-/, " "),
        metadata: markdownFiles[path].metadata,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title))
    .sort((a, b) => {
      const aDate = new Date(
        a.metadata?.date ? a.metadata.date[0] : `1990-12-20`,
      );
      const bDate = new Date(
        b.metadata?.date ? b.metadata.date[0] : `1990-12-20`,
      );

      return bDate - aDate;
    });
