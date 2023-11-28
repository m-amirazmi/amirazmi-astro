interface IProps {}

const Footer: React.FC<IProps> = () => {
  const today = new Date();
  return (
    <footer className="mt-auto">
      &copy; {today.getFullYear()} Muhamad Amir Azmi. All rights reserved.
    </footer>
  );
};

export default Footer;
