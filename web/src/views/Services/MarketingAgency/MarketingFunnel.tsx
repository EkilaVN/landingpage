import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

const MarketingFunnel = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title={"Thu hút - Chuyển đổi - Giữ chân"}
        subtitle={"Tăng trưởng đột phá với chiến lược Phễu Marketing chuẩn hoá từ Ekila"}
        description="Tại Ekila, chúng tôi xây dựng chiến lược Phễu Marketing bài bản cho doanh nghiệp: từ thu hút bằng nội dung hấp dẫn, chăm sóc qua email/Zalo, đến chuyển đổi bằng chiến dịch quảng cáo hiệu quả."
      />
      <div className="relative flex w-full flex-col justify-between gap-6 px-4 md:flex-row md:px-0">
        <Image
          src="https://res.cloudinary.com/deizfnbwc/image/upload/v1750958645/marketing-funnel_wh6evx.png"
          alt="marketing funnel"
          width={3134}
          height={1646}
          className="h-auto w-full object-cover md:max-h-none lg:h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MarketingFunnel;
