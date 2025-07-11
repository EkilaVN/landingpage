import { cn } from "@/lib/utils";

type TitleSectionProps = {
  title: string;
  subtitle: string;
  description?: string | React.ReactNode;
  className?: string;
};

const TitleSection = ({ title, subtitle, description, className }: TitleSectionProps) => (
  <div
    className={cn(
      "mb-10 flex flex-col items-center space-y-3 px-4 md:mb-16 md:px-0 lg:w-2/3",
      className
    )}
  >
    <p className="text-center text-xl font-bold text-textMain lg:text-2xl">{title}</p>
    <p className="bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text px-4 text-center text-3xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-4xl">
      {subtitle}
    </p>
    <p className="text-center text-base text-textSecondary lg:text-lg">{description}</p>
  </div>
);

export default TitleSection;
