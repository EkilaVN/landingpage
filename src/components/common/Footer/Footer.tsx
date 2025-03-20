import Image from "next/image";
import QRCode from "@/assets/images/qrfb.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import Instagram from "@/assets/svgs/instagram.svg";
import Linkedin from "@/assets/svgs/linkedin.svg";
import Github from "@/assets/svgs/github.svg";

const Footer = () => (
  <BackgroundBeamsWithCollision className="z-0 flex min-h-[480px] w-full items-center justify-center py-6">
    <div className="mx-auto flex h-auto w-full flex-col items-center justify-between space-y-6 px-10 pb-2 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      <div className="mb-3 flex w-full justify-center lg:justify-start">
        <Image
          src="https://marketifythemes.net/html/dizme/img/logo/logo.png"
          alt="Logo"
          className="max-h-[80px] max-w-[150px]"
          width={150}
          height={80}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-16 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:text-start">
        <div className="flex flex-1 flex-col space-y-5">
          <p className="text-xl font-bold uppercase text-textColor">About</p>
          <p className="text-base font-medium text-textSecondary">
            About There are many variations of passages of Lorem Ip available, but the majority have
          </p>
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={QRCode} alt="QR Code" width={128} height={128} />
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-5">
          <p className="text-xl font-bold uppercase text-textColor">Contact me</p>
          <p className="text-base font-medium text-textSecondary">
            <span>Address: </span>135B Tran Hung Dao, District 1, Ho Chi Minh City, Vietnam
          </p>
          <p className="text-base font-medium text-textSecondary before:content-[\\\\e910]">
            <span>Phone: </span>0814488935
          </p>
          <p className="text-base font-medium text-textSecondary">
            <span>Email: </span>htvinh201@gmail.com
          </p>
        </div>
        <div className="flex w-full flex-1 flex-col space-y-5">
          <p className="text-xl font-bold uppercase text-textColor">Explore</p>
          <div className="flex w-full justify-center lg:justify-start">
            <Image src={QRCode} alt="QR Code" className="flex w-32 justify-center" />
          </div>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="text-textColor transition-colors duration-300 hover:text-textMain"
            >
              <Image
                src={FacebookIcon}
                alt=""
                className="invert-0 hover:animate-wobble dark:invert"
              />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="text-textColor transition-colors duration-300 hover:text-textMain"
            >
              <Image src={Instagram} alt="" className="invert-0 hover:animate-wobble dark:invert" />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="text-textColor transition-colors duration-300 hover:text-textMain"
            >
              <Image src={Linkedin} alt="" className="invert-0 hover:animate-wobble dark:invert" />
            </a>
            <a
              href="https://www.facebook.com/tanvinh.huynh.9999/"
              target="_blank"
              className="text-textColor transition-colors duration-300 hover:text-textMain"
            >
              <Image src={Github} alt="" className="invert-0 hover:animate-wobble dark:invert" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-base text-textColor">
        Developed by{" "}
        <a href="#" className="text-textMain">
          HTVinh
        </a>
      </p>
    </div>
  </BackgroundBeamsWithCollision>
);

export default Footer;
