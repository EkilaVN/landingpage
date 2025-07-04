import HighlightComponent from "@/components/ui/highlight";
import RippleButton from "@/components/ui/RippleButton";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import mascot2 from "@/assets/images/mascot/mascot_2.png";

import Image from "next/image";

const HeaderHome = () => (
  <div
    className="flex h-[100vh] w-full items-center justify-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "var(--background-image)",
    }}
  >
    <div className="mx-auto flex h-auto w-full flex-col-reverse items-center justify-between px-4 md:px-10 lg:max-w-[1170px] lg:flex-row 2xl:max-w-[1420px]">
      <div className="w-full flex-[60%] flex-col space-y-8">
        <div className="mt-4 flex flex-col text-center text-textColor lg:mt-0 lg:text-left">
          <p className="text-xl font-bold text-textMain md:text-xl 2xl:text-2xl">
            Phát triển bền vững - Hợp tác dài lâu
          </p>
          <p className="bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text font-sans text-[42px] font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-[60px] 2xl:text-[80px]">
            Ekila Solutions
          </p>
          <div className="my-3 text-lg font-semibold text-textColor md:px-0 md:text-xl 2xl:text-2xl">
            Cung cấp{" "}
            <HighlightComponent className="inline text-textColor">
              Giải pháp Số toàn diện
            </HighlightComponent>{" "}
            <span className="whitespace-nowrap">
              cho{" "}
              <span className="mt-4 text-[#ed3333] dark:text-[#f0c45c]">
                Cá nhân và Doanh nghiệp
              </span>
            </span>
          </div>
          <p className="mt-4 px-4 text-base md:px-0 2xl:text-lg">
            Ekila Solutions sẽ là người bạn đồng hành giúp bạn hiện thực hóa ý tưởng để tăng trưởng
            bền vững trong thời đại công nghiệp 4.0. Các dịch vụ CNTT của chúng tôi bao gồm phát
            triển{" "}
            <span className="font-semibold">
              Website, Di động, Zalo Mini App, Thiết kế UI/UX, Digital Marketing.
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row lg:justify-start lg:gap-0 lg:space-x-20">
          <a
            href="https://www.facebook.com/ekila.vn"
            target="__blank"
            className="flex justify-center"
          >
            <RippleButton
              title="Nhận tư vấn miễn phí"
              customClass="font-bold md:p-6 md:py-5 text-base"
            />
          </a>
          {/* <div className="flex items-center justify-center space-x-6 text-center text-textColor duration-0">
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="hover:text-textMain"
            >
              <SiInstagram size={25} />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="hover:text-textMain"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="hover:text-textMain"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="hover:text-textMain"
            >
              <SiGithub size={25} />
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex flex-[40%] justify-center lg:justify-end">
        <div className="relative w-[90%] min-w-40">
          <Image src={mascot2} alt="Avatar" className="w-40 lg:w-full" priority />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderHome;
