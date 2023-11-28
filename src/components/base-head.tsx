import "@fontsource-variable/jost";
import "@fontsource-variable/open-sans";
import "@/styles/global.css";

interface IProps {
  title: string;
  description?: string;
  generator?: string;
}

const BaseHead: React.FC<IProps> = ({ title, description, generator }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="generator" content={generator} />
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
    </>
  );
};

export default BaseHead;
