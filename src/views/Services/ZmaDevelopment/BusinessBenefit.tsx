import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import { IoMdCheckbox } from "react-icons/io";
import {
  MdConnectWithoutContact,
  MdOutlineSavings,
  MdOutlineCampaign,
  MdOutlineLoyalty,
} from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";
import { GiCycle } from "react-icons/gi";

const itemListLeft = [
  {
    icon: <MdConnectWithoutContact className="text-4xl text-white" />,
    title: "Tiếp cận hàng triệu người dùng Zalo",
    content: "Dễ dàng chuyển đổi Mini App, không cần tải ứng dụng",
  },
  {
    icon: <RiUserStarLine className="text-4xl text-white" />,
    title: "Nâng cao trải nghiệm khách hàng",
    content: "Khách hàng dễ dàng trải nghiệm đa dịch vụ chỉ trên 1 ứng dụng duy nhất",
  },
  {
    icon: <GiCycle className="text-4xl text-white" />,
    title: "Kênh Re-Marketing mới 0 đồng",
    content: "Chăm sóc khách hàng một cách tiện lợi trên Zalo thông qua Zalo OA, ZNS",
  },
];

const itemListRight = [
  {
    icon: <MdOutlineSavings className="text-2xl text-white" />,
    title: "Tiết kiệm chi phí",
    content: "Tiết kiệm chi phí đầu tư, thời gian và nhân lực vận hành ứng dụng",
  },
  {
    icon: <MdOutlineCampaign className="text-2xl text-white" />,
    title: "Marketing hiệu quả",
    content: "Tận dạng mạng xã hội, đòn bẩy quảng bá thương hiệu trên Zalo",
  },
  {
    icon: <MdOutlineLoyalty className="text-2xl text-white" />,
    title: "Khách hàng trung thành",
    content: "Giữ chân khách hàng bằng các chương trình khuyến mãi, tích điểm",
  },
];

const slogans = [
  "Đầu tư ít - Hiệu quả cao",
  "Tăng doanh thu - Giảm chi phí",
  "Tăng tương tác – Giữ chân lâu",
];

const BusinessBenefit = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title={"Mini App"}
        subtitle={"Khai mở kênh tiếp cận mới cho doanh nghiệp"}
        description=""
      />
      <div className="relative flex w-full flex-col gap-6 rounded-3xl bg-backgroundCard px-4 md:px-0 lg:flex-row">
        <div className="flex flex-[38%] flex-col items-end gap-10 p-8">
          {itemListLeft.map((item) => (
            <div
              className="flex w-full flex-col items-center gap-4 lg:max-w-80 lg:items-end"
              key={item.title}
            >
              <div className="flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-gradient-to-br from-colorPrimary to-colorTriangole hover:bg-gradient-to-tl">
                {item.icon}
              </div>
              <div>
                <p className="text-center text-[15px] font-semibold leading-7 text-textSecondary dark:text-white md:text-base lg:text-end">
                  {item.title}
                </p>
                <p className="mt-2 text-center text-sm leading-7 text-textSecondary md:text-[15px] lg:text-end">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex flex-[24%] flex-col items-center">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749361790/zma4_ggkidj.png"
            alt="zma 1"
            width={645}
            height={1305}
            className="-top-8 h-auto w-1/2 object-contain lg:absolute lg:w-full"
          />
        </div>
        <div className="flex flex-[38%] flex-col items-center justify-between p-6 lg:items-start">
          <div className="flex flex-col space-y-3">
            <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-2xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-3xl">
              Lợi ích{" "}
              <span className="text-textMain dark:text-colorTriangole">Cho Doanh Nghiệp</span>
            </p>
          </div>
          <div className="my-8 flex flex-col gap-2 text-sm leading-7 text-textSecondary md:text-base">
            {slogans.map((item) => (
              <div className="flex items-center gap-3 text-base" key={item}>
                <span>
                  <IoMdCheckbox className="text-xl text-textMain dark:text-colorTriangole" />
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {itemListRight.map((item) => (
              <div
                className="flex flex-col items-center gap-9 lg:max-w-[330px] lg:flex-row lg:items-start"
                key={item.title}
              >
                <div className="flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-lg bg-colorTriangole bg-gradient-to-br from-colorPrimary to-colorTriangole hover:bg-gradient-to-tl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-center text-[15px] font-semibold leading-7 text-textSecondary dark:text-white md:text-base lg:text-start">
                    {item.title}
                  </p>
                  <p className="mt-2 text-center text-sm leading-7 text-textSecondary md:text-[15px] lg:text-start">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBenefit;
