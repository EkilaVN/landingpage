import GradientBar from "@/components/common/GradientBar/GradientBar";
import TitlePage from "@/components/common/TitlePage";
import MobileSubHeader from "@/views/Services/MobileDevelopment/MobileSubHeader";
import WhyChooseUs from "@/components/common/WhyChooseUs/WhyChooseUs";
import ContactMe from "@/views/Home/ContactMe/ContactMe";
import DevServiceKit from "@/views/Services/MobileDevelopment/DevServiceKit";
import MobileFieldsSection from "@/views/Services/MobileDevelopment/MobileFieldsSection";
import EkilaTechnical from "@/components/common/EkilaTechnical/EkilaTechnical";
import DevelopmentProcess from "@/components/common/DevelopmentProcess/DevelopmentProcess";

const MobileDevelopment = () => {
  return (
    <div className="mt-16 md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      <GradientBar />
      <TitlePage
        title="Phát Triển Ứng Dụng Điện Thoại"
        subtitle="Không chỉ là một ứng dụng – đó là trải nghiệm mang dấu ấn riêng, thân thiện với người dùng và tạo ấn tượng mạnh mẽ."
      />
      <div className="flex w-full flex-col items-center justify-center">
        <MobileSubHeader />
        <DevServiceKit />
        <MobileFieldsSection />
        <DevelopmentProcess />
        <EkilaTechnical />
        <WhyChooseUs platform="Mobile App" />
        <ContactMe />
      </div>
    </div>
  );
};

export default MobileDevelopment;
