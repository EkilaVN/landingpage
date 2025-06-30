import GradientBar from "@/components/common/GradientBar/GradientBar";
import TitlePage from "@/components/common/TitlePage";
import WhyChooseUs from "@/components/common/WhyChooseUs/WhyChooseUs";
import ContactMe from "@/views/Home/ContactMe/ContactMe";
import EkilaTechnical from "@/components/common/EkilaTechnical/EkilaTechnical";
import DevelopmentProcess from "@/components/common/DevelopmentProcess/DevelopmentProcess";
import CustomerBenefit from "@/views/Services/ZmaDevelopment/CustomerBenefit";
import BusinessBenefit from "@/views/Services/ZmaDevelopment/BusinessBenefit";
import ZmaFeatures from "@/views/Services/ZmaDevelopment/ZmaFeatures";

const ZMADevelopment = () => {
  return (
    <div className="mt-16 px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] xl:px-0 2xl:max-w-[1420px]">
      <GradientBar />
      <TitlePage
        title="Giải Pháp Zalo Mini App Toàn Diện Cho Doanh Nghiệp"
        subtitle="Ekila đồng hành cung Doanh nghiệp trong quá trình xây dựng và phát triển ứng dụng một cách đơn giản, dễ dàng, linh hoạt và hiệu quả nhất."
      />
      <div className="flex w-full flex-col items-center justify-center">
        <CustomerBenefit />
        <BusinessBenefit />
        <ZmaFeatures />
        <DevelopmentProcess />
        <EkilaTechnical />
        <WhyChooseUs platform="Zalo Mini App" />
        <ContactMe />
      </div>
    </div>
  );
};

export default ZMADevelopment;
