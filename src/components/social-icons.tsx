import { Github, Linkedin, Mail } from "lucide-react";

interface IProps {}

const SocialIcons: React.FC<IProps> = () => {
  return (
    <div className="mt-4 md:mt-8 flex items-center gap-4">
      <a
        className="block h-7 w-7 text-zinc-500 hover:text-teal-700 md:h-8 md:w-8"
        href="https://www.linkedin.com/in/m-amirazmi/"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        className="block h-7 w-7 text-zinc-500 hover:text-teal-700 md:h-8 md:w-8"
        href="https://github.com/m-amirazmi"
        target="_blank"
      >
        <Github />
      </a>
      <a
        className="block h-7 w-7 text-zinc-500 hover:text-teal-700 md:h-8 md:w-8"
        href="mailto:m.amirazmi@hotmail.com"
        target="_blank"
      >
        <Mail />
      </a>
    </div>
  );
};

export default SocialIcons;
