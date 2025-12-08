import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

const EkilaTechnical = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center rounded-md px-4 md:my-24 xl:px-10">
      <TitleSection
        title={"Công nghệ"}
        subtitle={"Công nghệ Ekila đáp ứng"}
        description="Ekila sử dụng các công nghệ tiên tiến nhất để phát triển sản phẩm hiệu quả nhất, đảm bảo hiệu suất và bảo mật cao nhất."
      />
      <div className="w-full rounded-2xl">
        <Image
          src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749378867/ekilatech1_eebv16.png"
          alt="Technical Mobile Development"
          height={703}
          width={1803}
          className="hidden lg:block"
        />
        <Image
          src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749378869/ekilatech2_kqqhlg.png"
          alt="Technical Mobile Development"
          height={703}
          width={1803}
          className="lg:hidden"
        />
      </div>
    </div>
  );
};

export default EkilaTechnical;
