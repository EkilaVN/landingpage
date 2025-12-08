"use client";
import Image from "next/image";
import QRCode from "@/assets/images/qrfb.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useThemeStore } from "@/hooks/zustand/themeStore";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import Instagram from "@/assets/svgs/instagram.svg";
import Linkedin from "@/assets/svgs/linkedin.svg";
import Github from "@/assets/svgs/github.svg";
import logo from "@/assets/images/logo/logo.png";
import logo_complex from "@/assets/images/logo/logo_complex.png";

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <BackgroundBeamsWithCollision className="z-0 flex min-h-[480px] w-full items-center justify-center py-6">
      <div className="mx-auto flex h-auto w-full flex-col items-center justify-between space-y-8 px-10 pb-2 lg:max-w-[1170px] 2xl:max-w-[1420px]">
        <div className="mb-3 flex w-full justify-center lg:justify-start">
          <Image
            src={theme === "light" ? logo : logo_complex}
            alt="Logo"
            priority
            className="h-16 w-auto"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-y-16 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-5 lg:text-start">
          <div className="flex flex-1 flex-col">
            <p className="mb-5 text-2xl font-bold text-textColor">
              Phát triển bền vững - Hợp tác dài lâu
            </p>
            <p className="mb-2 text-base font-medium text-textSecondary">
              Công ty TNHH Ekila Solutions
            </p>
            {/* <p className="text-base font-medium text-textSecondary">GPDKKD số 1102095450</p> */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.facebook.com/ekila.vn"
                target="_blank"
                className="text-textColor transition-colors duration-300 hover:text-textMain"
              >
                <Image
                  src={FacebookIcon}
                  alt=""
                  className="invert-0 hover:animate-wobble dark:invert"
                />
              </a>
              {/* <a
                href="https://www.facebook.com/tanvinh.huynh.9999/"
                target="_blank"
                className="text-textColor transition-colors duration-300 hover:text-textMain"
              >
                <Image
                  src={Instagram}
                  alt=""
                  className="invert-0 hover:animate-wobble dark:invert"
                />
              </a> */}
              <a
                href="https://www.linkedin.com/company/ekila-solutions"
                target="_blank"
                className="text-textColor transition-colors duration-300 hover:text-textMain"
              >
                <Image
                  src={Linkedin}
                  alt=""
                  className="invert-0 hover:animate-wobble dark:invert"
                />
              </a>
              {/* <a
                href="https://www.facebook.com/tanvinh.huynh.9999/"
                target="_blank"
                className="text-textColor transition-colors duration-300 hover:text-textMain"
              >
                <Image src={Github} alt="" className="invert-0 hover:animate-wobble dark:invert" />
              </a> */}
            </div>
          </div>
          <div className="flex flex-1 flex-col space-y-5">
            <p className="text-xl font-bold uppercase text-textColor">Liên hệ</p>
            <p className="text-base font-medium text-textSecondary">
              <span>Địa chỉ: </span>1041/62 Trần Xuân Soạn, phường Tân Hưng, Quận 7, TPHCM
            </p>
            <p className="text-base font-medium text-textSecondary before:content-[\\\\e910]">
              <span>Điện thoại: </span>0824 704 789
            </p>
            <p className="text-base font-medium text-textSecondary">
              <span>Email: </span>info@ekila.vn
            </p>
          </div>
          <div className="flex w-full flex-1 flex-col space-y-5">
            <p className="text-xl font-bold uppercase text-textColor">Trụ sở chính</p>
            <p className="text-base font-medium text-textSecondary">
              <span>Địa chỉ: </span>Số 942, ấp Lộc Tiền, xã Mỹ Lộc, huyện Cần Giuộc, tỉnh Long An
            </p>
            <p className="text-base font-medium text-textSecondary before:content-[\\\\e910]">
              <span>Điện thoại: </span>05 8383 8376
            </p>
            {/* <div className="flex w-full justify-center lg:justify-start">
              <Image src={QRCode} alt="QR Code" className="flex w-32 justify-center" />
            </div> */}
          </div>
        </div>
        <p className="text-base text-textColor">© 2025 Công Ty TNHH Ekila Solutions</p>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
