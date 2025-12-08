import { cn } from "@/lib/utils";

type TitlePageProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const TitlePage = ({ title, subtitle, className }: TitlePageProps) => (
  <>
    <p
      className={cn(
        "mx-4 my-6 bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text font-sans text-xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:my-8 md:text-3xl xl:mx-0 xl:px-10 2xl:text-4xl",
        className
      )}
    >
      {title}
    </p>
    <p className="mx-4 mb-4 text-sm md:mb-6 md:text-lg xl:mx-0 xl:px-10">{subtitle}</p>
  </>
);

export default TitlePage;
