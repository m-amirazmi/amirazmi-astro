import type { IPost } from "@/lib/types";
import { dateFormat, slugify } from "@/lib/utils";

interface IProps extends IPost {}

const PostItem: React.FC<IProps> = ({
  category,
  coverColor,
  description,
  image,
  pubDate,
  tags,
  title,
  author,
  slug,
}) => {
  return (
    <article className="flex w-full cursor-pointer flex-col items-start">
      <div className="relative mb-4 block">
        {image && (
          <a href={`/blog/${slug}/`}>
            <figure className="h-auto w-auto overflow-hidden rounded-lg object-cover">
              <img src={image} alt={title} width={960} height={480} />
            </figure>
          </a>
        )}
        {category && (
          <a
            href={`/blog?category=${slugify(category)}`}
            className="absolute -bottom-4 right-4 z-10 rounded-lg bg-teal-100 px-3 py-1.5 font-medium capitalize text-zinc-800 hover:bg-teal-200"
          >
            {category}
          </a>
        )}
      </div>
      <div className="flex items-center gap-x-4 text-xs text-zinc-900 dark:text-white">
        <span>{dateFormat(pubDate)}</span>
      </div>
      <div className="relative">
        <h2 className="mt-2 text-xl font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-white">
          <a href={`/blog/${slug}/`}>{title}</a>
        </h2>
        <p className="mt-2 line-clamp-3 leading-6 text-zinc-600">
          {description}
        </p>
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex gap-2 text-zinc-600">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded border border-teal-700 px-2 py-0.5 text-sm text-teal-700 hover:bg-teal-100 font-medium"
            >
              <a href={`/blog?tag=${slugify(tag)}`}>{tag}</a>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default PostItem;
