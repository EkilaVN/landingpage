import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  markdownContent?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  category,
  title,
  description,
  markdownContent,
  buttonLabel = "Xem thêm",
  buttonLink = "#",
}) => {
  const handleClick = () => {
    sessionStorage.setItem(buttonLink.split("/")[2], JSON.stringify(markdownContent));
  };

  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-backgroundMain md:h-auto md:flex-col md:gap-10 lg:h-[440px] lg:flex-row lg:gap-20">
      {/* Image section */}
      <div className="w-full overflow-hidden rounded-lg lg:h-full lg:min-w-[602px] lg:max-w-[602px]">
        <Image
          src={imageSrc}
          alt={title}
          width={602}
          height={440}
          loading="lazy"
          decoding="async"
          className="h-auto max-h-[300px] w-full rounded-lg object-cover md:max-h-none lg:h-full"
        />
      </div>

      {/* Content section */}
      <div className="w-full">
        <span className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 p-0.5 text-sm font-medium text-gray-500 dark:text-white">
          <span className="inline-block rounded-[6px] bg-backgroundMain px-2 py-1">{category}</span>
        </span>
        <h3 className="mt-6 text-2xl font-bold text-gray-700 dark:text-white md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-sm text-textSecondary md:text-base">{description}</p>
        <Link
          href={buttonLink}
          onClick={handleClick}
          className="mt-6 inline-block rounded-md bg-textMain px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
