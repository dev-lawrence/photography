interface TitleProps {
  title: string;
  subtitle?: string;
  isCenter?: boolean;
}

const Title = ({ title, isCenter, subtitle }: TitleProps) => {
  return (
    <div
      className={`mb-[1.5rem] ${isCenter === true ? "mx-auto max-w-[800px] text-center" : ""}`}
    >
      <h2
        className={`relative mb-1 text-600 font-700 capitalize leading-[1.1] after:absolute after:left-0 after:top-[-0.1rem] after:-z-10 after:size-[40px] after:rounded-full after:bg-primary/80 md:text-650 ${isCenter === true ? "after:left-[50%] after:translate-x-[-50%]" : ""}`}
      >
        {title}
      </h2>
      <p className="text-foreground/50">{subtitle}</p>
    </div>
  );
};

export default Title;
