export const collectLabels = (posts) => {
  const labels: string[] = [];
  posts.forEach(({ frontmatter }) => {
    const postLabels = frontmatter.label.split(", ");
    postLabels.forEach((label) => {
      if (!labels.includes(label)) {
        labels.push(label);
      }
    });
  });

  return labels;
};
