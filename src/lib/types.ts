export interface IPost {
  title: string;
  description: string;
  pubDate: string;
  image: string;
  category: string;
  tags: string[];
  coverColor: string;
  author?: string;
  slug?: string;
  deactivate: boolean;
}
