import SocialIcons from "./social-icons";

interface IProps {}

const Hero: React.FC<IProps> = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl px-4 pt-4 pb-8 md:py-12 mx-auto">
        <div className="flex items-center">
          <div>
            <h1 className="mb-0 md:mb-2 text-3xl font-semibold text-zinc-700 dark:text-white md:text-5xl">
              Muhamad Amir Azmi
            </h1>
            <p className="text-2xl mb-2 font-medium">Frontend Developer</p>
            <p className="hidden md:block text-base max-w-lg text-zinc-500 dark:text-zinc-400">
              A
              <span className="underline font-semibold text-teal-700 mx-1">
                Software Developer
              </span>
              with 4 years of professional experiences in various industries
              using ReactJS and NextJS.
            </p>
            <SocialIcons />
          </div>
          <div className="hidden md:block ml-auto w-80">
            <img
              src="/images/hero.webp"
              alt="Muhamad Amir Azmi"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
