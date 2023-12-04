import { Home } from "lucide-react";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center max-w-6xl p-4 mx-auto">
        <a href="/" aria-label="Homepage" className="flex gap-1">
          <span className="logo text-4xl font-semibold tracking-wider">AA</span>
          <span className="h-2 w-2 bg-primary rounded-full animate-bounce self-end mb-[6px]"></span>
        </a>
        <div className="ml-auto flex items-center gap-6">
          <a
            href="/"
            aria-label="Homepage"
            className="text-muted-foreground hover:text-primary"
          >
            <Home size={18} />
          </a>
          <a
            className="font-medium text-muted-foreground hover:text-primary"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="font-medium text-muted-foreground hover:text-primary"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
