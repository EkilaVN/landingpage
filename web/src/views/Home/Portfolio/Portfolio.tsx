import TitleSection from "@/components/common/TitleSection";
import PortfolioDecor from "./PortfolioDecor";
import PortfolioSectionList from "./PortfolioSectionList";

const portfolioItems = [
  {
    id: 1,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    type: "Web",
  },
  {
    id: 2,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    type: "App",
  },
  {
    id: 3,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    type: "Design",
  },
  {
    id: 4,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    type: "Other",
  },
  {
    id: 5,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    type: "Web",
  },
  {
    id: 6,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    type: "App",
  },
];

const tabs = ["All", "Web", "App", "Design", "Other"];

const Portfolio = () => {
  return (
    <div className="relative w-full">
      <PortfolioDecor />
      <div className="z-10 my-20 flex w-full flex-col items-center">
        <TitleSection
          title="Chất lượng - Hiệu quả"
          subtitle="Dự án tiêu biểu"
          description="Ekila Solutions vinh dự đồng hành cùng Quý khách hàng trong hành trình xây dựng giải pháp và phát triển bền vững"
          className="mb-8"
        />
        <PortfolioSectionList portfolioItems={portfolioItems} tabs={tabs} />
      </div>
    </div>
  );
};

export default Portfolio;
