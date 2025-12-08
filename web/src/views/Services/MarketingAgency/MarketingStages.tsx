import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import { FaHeadset } from "react-icons/fa6";
import { TbWorldStar } from "react-icons/tb";
import { RiTimerFlashLine } from "react-icons/ri";
import { FaSpaceAwesome } from "react-icons/fa6";

const stages = [
  {
    title: "Giai đoạn 1",
    icon: <FaHeadset />,
    subtitle: "Tìm hiểu thông tin",
    heading: "Liên hệ tư vấn",
    description: `Giai đoạn kết nối đầu tiên, ngay khi bạn liên hệ tư vấn, chúng tôi sẽ liên hệ lại nhanh nhất có thể và đặt lịch hẹn gặp để tìm hiểu nhu cầu thực tế của doanh nghiệp`,
    img: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750954848/mkt-stage1_jrag8p.png",
  },
  {
    title: "Giai đoạn 2",
    icon: <TbWorldStar />,
    subtitle: "Kết nối",
    heading: "Lập kế hoạch & Báo giá",
    description: `Dựa trên thông tin từ khách hàng, Ekila sẽ phân tích nhu cầu và chuẩn bị báo giá chi tiết kèm theo kế hoạch triển khai. Tất cả sẽ trình bày trong lần gặp thứ hai để bạn nắm bắt lộ trình và chiến lược phù hợp`,
    img: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750954844/mkt-stage2_uentuv.png",
  },
  {
    title: "Giai đoạn 3",
    icon: <RiTimerFlashLine />,
    subtitle: "Triển khai",
    heading: "Triển khai chiến dịch",
    description: `Ekila tiến hành triển khai các chiến dịch theo kế hoạch. Triển khai chiến dịch đúng lộ trình, cập nhật liên tục, đồng hành cùng khách hàng và linh hoạt xử lý mọi tình huống phát sinh`,
    img: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750954841/mkt-stage3_jdhofq.png",
  },
  {
    title: "Giai đoạn 4",
    icon: <FaSpaceAwesome />,
    subtitle: "Báo cáo",
    heading: "Đo lường & Theo dõi",
    description: `Ekila sẽ theo dõi hiệu quả chiến dịch và cung cấp báo cáo chi tiết. Chúng tôi sẽ phân tích dữ liệu, đánh giá kết quả và đề xuất điều chỉnh cần thiết để tối ưu hóa hiệu quả chiến dịch trong tương lai`,
    img: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750955165/mkt-stage4_v95t01.png",
  },
];

export default function MarketingStages() {
  return (
    <div className="relative my-12 flex w-full flex-col items-center px-4 md:my-24 xl:px-10">
      <TitleSection
        title="Bứt phá"
        subtitle="Lộ trình Tiếp thị số theo tiêu chuẩn tối ưu"
        description="Mỗi chiến dịch Digital Marketing tại Ekila đều được cá nhân hóa theo mục tiêu và mô hình doanh nghiệp của bạn. Chúng tôi lắng nghe, đồng hành và xây dựng chiến lược phù hợp nhất để tạo ra hiệu quả tối đa. Bạn có thể tham khảo quy trình tổng quan dưới đây để hình dung cách Ekila giúp chiến dịch Digital của bạn bứt phá mạnh mẽ"
      />
      <div className="grid grid-cols-2 justify-center gap-6 pb-8 md:grid-cols-4">
        {stages.map((stage, index) => (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4"
            key={index}
          >
            <div className="flex flex-col items-center">
              <h2 className="mb-1 text-xl font-bold text-textTriangole">{stage.title}</h2>
              <p className="mb-6 text-[15px] text-textSecondary">{stage.subtitle}</p>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl text-textSecondary dark:border-textSecondary">
                {stage.icon}
              </div>
            </div>
            <div
              key={index}
              className="relative h-full w-full max-w-sm rounded-tl-xl rounded-tr-xl bg-gradient-to-t from-white to-[#f4f4f4] p-6 text-center transition-transform duration-300 before:absolute before:-top-7 before:left-1/2 before:-translate-x-1/2 before:border-[16px] before:border-transparent before:border-b-[#f4f4f4] before:content-[''] hover:scale-105 dark:from-[#0e0e0e] dark:to-[#4b4f5c] dark:before:border-b-[#4b4f5c]"
            >
              <div className="mb-4 h-52 w-auto">
                <Image
                  src={stage.img}
                  alt={stage.title}
                  width={240}
                  height={240}
                  className="mx-auto h-full w-auto object-contain"
                />
              </div>
              <h4 className="mb-3 mt-1 text-lg font-bold">{stage.heading}</h4>
              <p className="text-sm leading-6 text-textSecondary">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
