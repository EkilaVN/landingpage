import GradientBar from "@/components/common/GradientBar/GradientBar";
import ContactMe from "@/views/Home/ContactMe/ContactMe";
import MarketingSubHeader from "@/views/Services/MarketingAgency/MarketingSubHeader";
import MarketingServices from "@/views/Services/MarketingAgency/MarketingServices";
import MarketingStrategy from "@/views/Services/MarketingAgency/MarketingStrategy";
import MarketingStages from "@/views/Services/MarketingAgency/MarketingStages";
import MarketingFunnel from "@/views/Services/MarketingAgency/MarketingFunnel";

const MarketingAgency = () => {
  return (
    <div className="mt-16 px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] xl:px-0 2xl:max-w-[1420px]">
      <GradientBar />
      <div className="flex w-full flex-col items-center justify-center">
        <MarketingSubHeader />
        <MarketingStrategy />
        <MarketingFunnel />
        <MarketingServices />
        <MarketingStages />
        <ContactMe />
      </div>
    </div>
  );
};

export default MarketingAgency;
