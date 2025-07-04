import SplashCursor from "@/components/ui/SplashCursor";
import CommitInfo from "@/views/Home/CommitInfo/CommitInfo";
import ContactMe from "@/views/Home/ContactMe/ContactMe";
import CustomerSlider from "@/views/Home/CustomerSlider/CustomerSlider";
import HeaderHome from "@/views/Home/HeaderHome/HeaderHome";
import HighlightBlogs from "@/views/Home/HighlightBlogs/HighlightBlogs";
import HireMe from "@/views/Home/HireMe/HireMe";
import MyServices from "@/views/Home/MyServices/MyServices";
import Portfolio from "@/views/Home/Portfolio/Portfolio";
import SubscribeNewsletter from "@/views/Home/SubscribeNewsletter/SubscribeNewsletter";
import Testimonials from "@/views/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SplashCursor />
      <HeaderHome />
      <div className="relative flex w-full flex-col items-center justify-evenly px-5 md:px-7 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <CommitInfo />
        <HireMe />
        {/* <Portfolio /> */}
        <MyServices />
        <HighlightBlogs />
        <CustomerSlider />
        <Testimonials />
        {/* <SubscribeNewsletter /> */}
        <ContactMe />
      </div>
    </div>
  );
}
