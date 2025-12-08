import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import { hexToRGBA } from "@/utils";
import RippleButton from "@/components/ui/RippleButton";

const itemList = [
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750867386/mkt-branding_ehwozy.png",
    title: "Niềm Tin Thương Hiệu",
    content:
      "Khi thương hiệu của bạn được nhận diện một cách đúng đắn và nhất quán, khách hàng không chỉ dễ dàng ghi nhớ mà còn chủ động tìm đến bạn, tạo nên sự gắn kết tự nhiên và bền vững theo thời gian.",
    bgColor: "#f4f9df",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750867382/mkt-finance_iq7x25.png",
    title: "Bứt Tốc Doanh Thu",
    content:
      "Ngay cả một chiến dịch Digital Marketing ngắn hạn, nếu được triển khai đúng cách, cũng có thể tạo ra sự bùng nổ về doanh thu và mở rộng tệp khách hàng một cách nhanh chóng.",
    bgColor: "#defdea",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1750867380/mkt-target_eu5wlm.png",
    title: "Tăng Trưởng Khách Hàng",
    content:
      "Chiến dịch Digital Marketing không chỉ thúc đẩy doanh số mà còn giúp bạn xây dựng kho dữ liệu khách hàng, từ đó triển khai các hoạt động chăm sóc và giữ chân khách hàng một cách hiệu quả và bền vững.",
    bgColor: "#fde1f5",
  },
];

const MarketingStrategy = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center px-4 md:my-24 xl:px-10">
      <TitleSection
        title="Bứt phá"
        subtitle="Digital Marketing là chìa khóa bứt phá trong kỷ nguyên số"
        description="Triển khai Digital Marketing sớm giúp doanh nghiệp phát triển nhanh, bền vững và cạnh tranh tốt hơn với nền tảng cho tăng trưởng dài hạn"
      />
      <a
        href="https://www.facebook.com/ekila.vn"
        target="__blank"
        className="-mt-4 mb-12 flex justify-start"
      >
        <RippleButton
          title="Nhận tư vấn miễn phí"
          customClass="font-bold md:p-6 md:py-5 text-base"
        />
      </a>
      <div className="relative flex w-full gap-6 px-4 xl:px-0">
        <div className="grid w-full grid-cols-1 gap-6 px-4 xl:grid-cols-3 xl:px-0">
          {itemList.map((item) => (
            <div
              key={item.title}
              className="perspective group relative h-[320px] w-full flex-1 rounded"
            >
              <div
                className="flip-card h-full w-full rounded"
                style={{ backgroundColor: hexToRGBA(item.bgColor, 0.8) }}
              >
                {/* Front side */}
                <div className="flip-card-inner flex flex-col items-center justify-center gap-4 p-6">
                  <div className="h-28 w-32 animate-float-slow ease-in-out">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="h-full w-auto"
                    />
                  </div>
                  <p className="text-center text-lg font-bold leading-7 text-black md:text-xl">
                    {item.title}
                  </p>
                </div>

                {/* Back side */}
                <div className="flip-card-inner flip-card-back flex flex-col items-center justify-center p-6">
                  <p className="text-center text-sm leading-7 text-gray-800 md:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingStrategy;
