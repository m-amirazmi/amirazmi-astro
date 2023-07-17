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

export const filteredStatus = (posts, status = "published") =>
  posts.filter((p) => p.frontmatter.status === status);
