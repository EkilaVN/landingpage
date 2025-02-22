import { Input } from "@/components/ui/input";
import ContactUs from "@/assets/images/Contact_us.webp";
import Phone from "@/assets/svgs/phone.svg";
import Mail from "@/assets/svgs/mail.svg";
import Map from "@/assets/svgs/map.svg";
import ContactMeDecor from "./ContactMeDecor";
import TitleSection from "@/components/common/TitleSection";
import RippleButton from "@/components/ui/RippleButton";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

const ContactMe = () => {
  return (
    <div className="relative mb-20 flex w-[100vw] justify-center">
      <ContactMeDecor />
      <div className="relative flex w-full flex-col px-5 md:px-7 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <div className="z-10 my-20 flex w-full flex-col items-center">
          <TitleSection
            title={"Contact Me"}
            subtitle={"I Want To Hear From You"}
            description={
              "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
            }
          />
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
            <div className="flex flex-1 flex-col space-y-4 py-10 lg:p-4 lg:py-0">
              <div className="flex flex-wrap gap-3">
                <Input
                  type="text"
                  placeholder="Name"
                  className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                />
                <Input
                  type="text"
                  accept="number"
                  placeholder="Your phone"
                  className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                />
              </div>
              <Textarea
                placeholder="Write your message here."
                className="h-32 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
              />
              <div className="pt-4">
                <RippleButton
                  title="Submit Now"
                  customClass="h-12 text-base font-semibold rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4">
              <Image src={ContactUs} alt="ContactUs" className="w-[80%]" />
              <div className="flex w-[80%] flex-col gap-4 text-base">
                <div className="flex gap-2">
                  <Image src={Map} alt="" />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">
                      1234 Street Name, City Name, United States
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={Phone} alt="" />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">+84 81 4488 935</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image src={Mail} alt="" />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">htvinh201@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div className="w-full"></div>;
};

export default ContactMe;
