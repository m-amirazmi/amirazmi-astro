import "@fontsource-variable/jost";
import "@fontsource-variable/open-sans";
import "@/styles/global.css";

interface IProps {
  title: string;
  description?: string;
  generator?: string;
  image?: string;
  pageUrl?: string;
}

const BaseHead: React.FC<IProps> = ({
  title,
  description = "Welcome to amirazmi.dev. Here can learn more about me and what I have been doing in the frontend development space.",
  generator,
  image,
  pageUrl = "https://amirazmi.dev",
}) => {
  const imageUrl = "https://amirazmi.dev" + image;
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="generator" content={generator} />
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="450" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default BaseHead;
