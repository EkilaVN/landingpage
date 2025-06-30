import GradientBar from "@/components/common/GradientBar/GradientBar";
import TitlePage from "@/components/common/TitlePage";
import WebSubHeader from "@/views/Services/WebDevelopment/WebSubHeader";
import LowHighTech from "@/views/Services/WebDevelopment/LowHighTech";
import ResponsiveSection from "@/views/Services/WebDevelopment/ResponsiveSection";
import FieldsSection from "@/views/Services/WebDevelopment/FieldsSection";
import WhyChooseUs from "@/components/common/WhyChooseUs/WhyChooseUs";
import ContactMe from "@/views/Home/ContactMe/ContactMe";
import EkilaTechnical from "@/components/common/EkilaTechnical/EkilaTechnical";
import DevelopmentProcess from "@/components/common/DevelopmentProcess/DevelopmentProcess";

const WebDevelopment = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center bg-gray-100 bg-[url('https://res.cloudinary.com/deizfnbwc/image/upload/v1749897008/web-bg_vn9qng.png')] bg-cover bg-center bg-no-repeat dark:bg-gray-900 md:w-[100vw]">
        <div className="mt-16 px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] xl:px-0 2xl:max-w-[1420px]">
          <GradientBar />
          <TitlePage
            title="Xây Dựng Website"
            subtitle="Khởi đầu hành trình số hóa với một website thực sự tối ưu – nơi tốc độ, trải nghiệm và SEO đồng hành cùng bạn!"
          />
          <WebSubHeader />
        </div>
      </div>
      <div className="mt-16 px-4 md:mt-32 lg:mt-48 lg:max-w-[1170px] xl:px-0 2xl:max-w-[1420px]">
        <div className="flex w-full flex-col items-center justify-center">
          <ResponsiveSection />
          <LowHighTech />
          <FieldsSection />
          <DevelopmentProcess />
          <EkilaTechnical />
          <WhyChooseUs platform="Website" />
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
