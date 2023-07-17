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

export const getRelatedPosts = (relatedSlugs: string, posts: any[]) => {
  const slugs = relatedSlugs.split(", ");
  return posts
    .map((p) => {
      if (slugs.includes(p.frontmatter.slug)) return p.frontmatter;
      return;
    })
    .filter(Boolean);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
