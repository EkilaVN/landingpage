import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import mascot3 from "@/assets/images/mascot/mascot_3.png";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { MdOutlineForest, MdOutlineAppShortcut } from "react-icons/md";
import { TbWorldStar } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";
import { GoGift } from "react-icons/go";

const fields = [
  {
    title: "Bán lẻ & Tiêu dùng",
    icon: <BsShop />,
  },
  {
    title: "F&B - Food and Beverage",
    icon: <IoFastFoodOutline />,
  },
  {
    title: "Loyalty - Giữ chân khách hàng",
    icon: <GoGift />,
  },
  {
    title: "Dịch vụ công",
    icon: <RiPoliceBadgeLine />,
  },
  {
    title: "Logistics & Vận tải",
    icon: <PiTrain />,
  },
  {
    title: "Giáo dục & Đào tạo",
    icon: <IoSchoolOutline />,
  },
  {
    title: "Nông - Lâm - Ngư Nghiệp",
    icon: <MdOutlineForest />,
  },
  {
    title: "Branding thương hiệu",
    icon: <TbWorldStar />,
  },
  {
    title: "Công nghệ thông tin",
    icon: <MdOutlineAppShortcut />,
  },
];

const FieldsSection = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center rounded-md px-4 md:my-24 xl:px-10">
      <TitleSection
        title={"Lĩnh vực"}
        subtitle={"Ekila hỗ trợ mọi doanh nghiệp"}
        description="Ekila luôn tìm tòi và tiếp cận đa lĩnh vực để mang đến góc nhìn toàn diện cho doanh nghiệp của bạn."
      />
      <div className="w-full rounded-2xl">
        <div className="flex h-full w-full rounded-2xl bg-[url('https://res.cloudinary.com/deizfnbwc/image/upload/v1748853853/fields_bg_wzqxzc.png')] bg-cover bg-center dark:bg-[url('https://res.cloudinary.com/deizfnbwc/image/upload/v1748856583/fields_bg_dark_a5ltvg.png')] md:h-[570px]">
          <div className="hidden flex-1 items-center justify-center md:flex">
            <Image src={mascot3} alt="mascot" className="w-2/3" />
          </div>
          <div className="relative flex w-full flex-1 justify-center px-4 dark:bg-black md:pr-0 xl:px-10">
            <div
              className="relative w-full overflow-y-scroll"
              style={{ scrollbarGutter: "stable" }}
            >
              {fields.map((item, idx) => (
                <div
                  className="my-4 flex items-center gap-6 rounded-xl border border-gray-200 bg-backgroundMain p-6 text-lg font-semibold md:text-xl"
                  key={idx}
                >
                  <span className="text-3xl text-colorTriangole">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1748857767/blur_top_vqicox.webp"
              alt="blur Top"
              width={100}
              height={92}
              className="absolute top-4 hidden w-full px-2 md:block xl:px-10"
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1748857766/blur_bot_pxlc3a.webp"
              alt="blur Top"
              width={100}
              height={92}
              className="absolute -bottom-2 hidden w-full px-2 md:block xl:px-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldsSection;
