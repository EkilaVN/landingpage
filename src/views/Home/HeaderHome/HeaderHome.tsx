import Avatar from "@/assets/images/avatar.png";
import HighlightComponent from "@/components/ui/highlight";
import RippleButton from "@/components/ui/RippleButton";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const HeaderHome = () => (
  <div
    className="flex h-[100vh] w-full items-center justify-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "var(--background-image)",
    }}
  >
    <div className="mx-auto flex h-auto w-full flex-col-reverse items-center justify-between px-10 lg:max-w-[1170px] lg:flex-row 2xl:max-w-[1420px]">
      <div className="w-full flex-1 flex-col space-y-8">
        <div className="mt-4 flex flex-col text-center text-textColor lg:mt-0 lg:text-left">
          <p className="text-xl font-bold text-textMain md:text-2xl 2xl:text-5xl">
            Hello, I&apos;m
          </p>
          <p className="bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text font-sans text-[42px] font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-[60px] 2xl:text-[80px]">
            Hutavi Huynh
          </p>
          <div className="text-lg font-semibold text-textColor md:px-0 md:text-xl 2xl:text-2xl">
            <HighlightComponent className="inline text-textColor">
              Software Developer and Designer
            </HighlightComponent>{" "}
            <span className="whitespace-nowrap">
              from <span className="mt-4 text-[#ed3333] dark:text-[#f0c45c]">Vietnam</span>
            </span>
          </div>
          <p className="mt-4 px-4 text-base md:px-0 md:text-lg 2xl:text-xl">
            I&apos;m a software developer and also a creative designer based in Vietnam. I&apos;m
            deeply passionate and fully committed to my work.
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row lg:justify-start lg:gap-0 lg:space-x-20">
          <Link href={"/about"} className="flex justify-center">
            <RippleButton
              title="About me"
              customClass="font-bold md:p-6 md:py-5 text-base w-[120px]"
            />
          </Link>
          <div className="flex items-center justify-center space-x-6 text-center text-textColor duration-0">
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
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end">
        <div className="relative w-[65%] min-w-40">
          <Image src={Avatar} alt="Avatar" className="w-full" />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderHome;
