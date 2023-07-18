export interface MetaTagsProps {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  imageUrl?: string;
}

export interface PostFrontMatter {
  title: string;
  slug: string;
  excerpt: string;
  date: Date;
  author: string;
  label: string[];
  status: string;
  related?: string;
}
