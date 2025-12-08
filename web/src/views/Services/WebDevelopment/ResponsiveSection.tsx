import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

const ResponsiveSection = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title={"Tương thích"}
        subtitle={"Tiếp cận Khách hàng"}
        description="MỌI LÚC - MỌI NƠI - MỌI THIẾT BỊ"
      />
      <div className="relative flex w-full flex-col justify-between gap-6 px-4 md:flex-row md:px-0">
        <Image
          src="https://res.cloudinary.com/deizfnbwc/image/upload/v1748852714/responsive_session_dark_su1xnu.png"
          alt="responsive web design"
          width={800}
          height={400}
          className="hidden aspect-[11/6] h-auto w-full object-cover dark:block md:max-h-none lg:h-full"
        />
        <Image
          src="https://res.cloudinary.com/deizfnbwc/image/upload/v1748852111/responsive_session_light_xwllhf.jpg"
          alt="responsive web design"
          width={800}
          height={400}
          className="aspect-[11/6] h-auto w-full object-cover dark:hidden md:max-h-none lg:h-full"
        />
      </div>
    </div>
  );
};

export default ResponsiveSection;
