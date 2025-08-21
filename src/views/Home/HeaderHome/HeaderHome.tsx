import HighlightComponent from "@/components/ui/highlight";
import RippleButton from "@/components/ui/RippleButton";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import mascot2 from "@/assets/images/mascot/mascot_2.png";

import Image from "next/image";

const HeaderHome = () => (
  <div
    className="relative flex h-[100vh] w-full items-center justify-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "var(--background-image)",
    }}
  >
    <div className="z-10 mx-auto flex h-auto flex-col-reverse items-center justify-between px-4 md:px-10 lg:max-w-[1170px] lg:flex-row xl:w-1/2 2xl:max-w-[1420px]">
      <div className="w-full flex-[60%] flex-col space-y-8">
        <div className="mt-4 flex flex-col items-center text-center text-textColor lg:mt-0">
          <p className="text-xl font-bold text-textMain dark:text-textTriangole md:text-xl 2xl:text-2xl">
            Phát triển bền vững - Hợp tác dài lâu
          </p>
          <p className="text-shadow-lg bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text font-sans text-[36px] font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-[60px] xl:text-[42px] 2xl:text-[84px]">
            Ekila Solutions
          </p>
          <div className="text-shadow-lg my-3 text-lg font-semibold text-textColor md:px-0 md:text-xl lg:leading-[48px] xl:!leading-[50px] 2xl:text-[28px]">
            Cung cấp{" "}
            <HighlightComponent className="inline text-textColor">
              Giải pháp Số toàn diện
            </HighlightComponent>{" "}
            <span className="whitespace-nowrap">
              cho{" "}
              <span className="mt-4 text-[#ed3333] dark:text-[#f0c45c]">
                Cá nhân, Doanh nghiệp và Nhà nước
              </span>
            </span>
          </div>
          <p className="text-shadow-lg mt-4 px-4 text-base md:px-0 2xl:text-xl">
            Ekila Solutions sẽ là người bạn đồng hành giúp bạn hiện thực hóa ý tưởng để tăng trưởng
            bền vững trong thời đại công nghiệp 4.0. Các dịch vụ CNTT của chúng tôi bao gồm phát
            triển{" "}
            <span className="font-semibold">
              Website, Di động, Zalo Mini App, Thiết kế UI/UX, Digital Marketing.
            </span>
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row xl:!mt-14">
          <a href="#my-service" className="flex justify-center">
            <RippleButton
              title="Các dịch vụ của Ekila"
              customClass="font-bold md:p-6 md:py-5 text-base text-white"
              backgroundColor="var(--color-primary)"
            />
          </a>
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
      {/* <div className="flex flex-[40%] justify-center lg:justify-end">
        <div className="relative w-[90%] min-w-40">
          <Image src={mascot2} alt="Avatar" className="w-40 lg:w-full" priority />
        </div>
      </div> */}
    </div>

    <div className="-z-2 absolute bottom-0 left-0 top-0 hidden w-[40%] md:block xl:w-1/4">
      <div className="animated-promo-wrapper relative h-full overflow-hidden opacity-50">
        <div className="animated-promo-loop -my-5 mx-0 flex items-center justify-center gap-5">
          <div className="animated-promo animated-promo-tbone">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755447395/banner-03_wc1k6t.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755774030/banner-04_snjpqo.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
          <div className="animated-promo animated-promo-tbtwo">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755774310/banner_8_angqnc.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755774314/banner_7_awicqm.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
          <div className="animated-promo animated-promo-tbthree">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755774308/banner_10_dlalmb.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755774311/banner_9_etcegy.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
        </div>
      </div>
    </div>

    <div className="-z-2 absolute bottom-0 right-0 top-0 hidden w-[40%] md:block xl:w-1/4">
      <div className="animated-promo-wrapper relative h-full overflow-hidden opacity-50">
        <div className="animated-promo-loop -my-5 mx-0 flex items-center justify-center gap-5">
          <div className="animated-promo animated-promo-tbone">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755703085/banner_1_qkh9xj.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755708878/banner_6_lgd2zz.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
          <div className="animated-promo animated-promo-tbtwo">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755709860/banner_2_zghhik.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755708878/banner_5_rykbur.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
          <div className="animated-promo animated-promo-tbthree">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755710110/banner_3_xewc31.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755709305/banner_4_lknioh.png"
              alt="Avatar"
              width={100}
              height={1500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderHome;
