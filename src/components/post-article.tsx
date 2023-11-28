import type { IPost } from "@/lib/types";
import { dateFormat, slugify } from "@/lib/utils";
import { Bookmark, Calendar } from "lucide-react";

interface IProps extends IPost {
  children: any;
}

const PostArticle: React.FC<IProps> = ({
  category,
  coverColor,
  image,
  pubDate,
  tags,
  title,
  author,
  children,
}) => {
  return (
    <article className="col-span-2">
      <div
        className="mb-8 flex items-center justify-center rounded-xl"
        style={{ backgroundColor: coverColor }}
      >
        {image && (
          <figure className="w-12/12 md:w-6/12 h-auto overflow-hidden rounded-xl object-cover">
            <img src={image} alt={title} width={1600} height={900} />
          </figure>
        )}
      </div>
      <div className="md:col-10 mb-12 text-center">
        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
        <div className="text-text mt-4 flex flex-wrap items-center justify-center text-zinc-800 dark:text-zinc-200">
          <div className="mx-3 mt-2 flex flex-wrap items-center font-medium">
            <figure>
              <img
                alt={author}
                className="mr-2 h-6 w-6 rounded-full"
                width={50}
                height={50}
                src="/images/hero.webp"
              />
            </figure>
            <span>{author}</span>
          </div>
          <div className="mx-3 mt-2 flex flex-wrap items-center font-medium gap-1">
            <Calendar size={20} />
            <span>{dateFormat(pubDate)}</span>
          </div>
          <a
            href={`/category/${slugify(category)}`}
            className="mx-3 mt-2 flex flex-wrap items-center hover:bg-teal-200 pr-4 pl-3 py-1.5 rounded-lg bg-teal-100 gap-1 hover:text-primary font-medium capitalize text-zinc-800"
          >
            <Bookmark size={20} />
            <span>{category}</span>
          </a>
        </div>
      </div>
      <div className="article prose prose-lg prose-green min-w-full md:prose-xl">
        {children}
      </div>
      <div className="mt-8">
        {tags?.map((tag) => (
          <a
            href={`/tags/${slugify(tag)}`}
            className="mb-2 mr-2 inline-block rounded border border-teal-700 px-2 py-0.5 text-sm text-teal-700 hover:bg-teal-100 font-medium"
          >
            {tag}
          </a>
        ))}
      </div>
    </article>
  );
};

export default PostArticle;
