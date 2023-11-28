interface IProps {}

const Footer: React.FC<IProps> = () => {
  const today = new Date();
  return (
    <footer className="mt-auto max-w-6xl mx-auto w-full px-4">
      <div className="border-t mt-12 border-zinc-100 dark:border-zinc-900 py-4 text-center text-sm">
        &copy; {today.getFullYear()} Muhamad Amir Azmi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
