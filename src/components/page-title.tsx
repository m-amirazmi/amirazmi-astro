interface IProps {
  title?: string;
}

const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      </div>
    </section>
  );
};

export default PageTitle;
