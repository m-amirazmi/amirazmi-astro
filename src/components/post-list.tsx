import type { IPost } from "@/lib/types";
import PostItem from "./post-item";

interface IProps {
  title?: string;
  posts: IPost[];
}

const PostList: React.FC<IProps> = ({ posts, title }) => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        {title && <h2 className="text-2xl font-semibold mb-3">{title}</h2>}
        <div className="gap-x-4 gap-y-8 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0 md:gap-y-16 md:grid-cols-2">
          {posts.map((i, k) => (
            <PostItem key={k} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
