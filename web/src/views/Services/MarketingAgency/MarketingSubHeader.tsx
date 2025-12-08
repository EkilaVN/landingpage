import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { LuShapes } from "react-icons/lu";
import { PiGraphFill } from "react-icons/pi";
import RippleButton from "@/components/ui/RippleButton";
import { FaRegHandshake } from "react-icons/fa";

const MarketingSubHeader = () => {
  return (
    <div className="lg:mb-26 relative mb-12 mt-4 md:mb-28 md:mt-10 md:px-4 xl:px-10">
      <div className="flex w-full flex-col gap-y-6 px-4 md:px-0 lg:flex-row">
        <div className="flex flex-[40%] flex-col justify-center space-y-6 lg:pr-[40px] lg:text-start">
          <div className="flex flex-col space-y-3">
            <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-2xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-3xl">
              Dịch Vụ <span className="text-textMain">Digital Marketing</span> Hiệu Quả
            </p>
          </div>
          <p className="text-sm leading-7 text-textSecondary lg:text-base">
            Dịch vụ Digital Marketing của Ekila sẽ giúp doanh nghiệp của bạn lên một tầm cao mới với
            <strong> chiến lược Marketing tổng thể</strong> và hiệu quả. Từ SEO, quảng cáo trực
            tuyến đến quản lý mạng xã hội, tiếp cận hệ sinh thái Zalo trong chăm sóc khách hàng,
            chúng tôi cung cấp giải pháp toàn diện để tăng cường sự hiện diện trực tuyến và thu hút
            khách hàng mục tiêu.
          </p>
          <p className="text-sm leading-7 text-textSecondary lg:text-base">
            Tại Ekila Solutions, dịch vụ <strong>tận tâm là giá trị cốt lõi</strong>. Chúng tôi tập
            trung vào việc xây dựng mối quan hệ lâu dài với khách hàng, với một đội ngũ luôn cam kết
            mang lại sự hài lòng tối đa.
          </p>
          <a
            href="https://www.facebook.com/ekila.vn"
            target="__blank"
            className="flex justify-start"
          >
            <RippleButton
              title="Nhận tư vấn miễn phí"
              customClass="font-bold md:p-6 md:py-5 text-base"
            />
          </a>
        </div>

        <div className="mt-10 flex w-full flex-[60%] justify-center lg:mt-0">
          <div className="flex animate-float-slow flex-col gap-12 rounded-2xl pb-12">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749954837/marketing-subheader_bov5ob.png"
              alt="Marketing Agency Ekila"
              width={1440}
              height={810}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 3 Feature Blocks */}
      <div className="right-0 top-0 flex w-full flex-wrap justify-between gap-6 px-4 lg:absolute lg:top-1/4 lg:w-2/5 xl:px-10">
        {/* Block 1 */}
        <div className="flash-animation-item flex min-w-[160px] flex-1 flex-col items-center rounded-xl bg-backgroundMain p-4 shadow-lg">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-200/40">
            <PiGraphFill className="text-2xl text-pink-500" />
          </div>
          <h3 className="mb-2 text-base font-semibold lg:text-lg">Quảng cáo</h3>
          <p className="text-xs leading-relaxed lg:text-sm">
            Quảng cáo Google, Facebook, Tiktok, Zalo và hơn nữa
          </p>
        </div>

        {/* Block 2 */}
        <div className="flash-animation-item flex min-w-[160px] flex-1 flex-col items-center rounded-xl bg-backgroundMain p-4 shadow-lg">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-200/40">
            <GoGoal className="text-2xl text-cyan-500" />
          </div>
          <h3 className="mb-2 text-base font-semibold lg:text-lg">SEO</h3>
          <p className="text-xs leading-relaxed lg:text-sm">
            SEO có mục tiêu, có kết quả – cam kết Lead & ROI
          </p>
        </div>

        {/* Block 3 */}
        <div className="flash-animation-item flex min-w-[160px] flex-1 flex-col items-center rounded-xl bg-backgroundMain p-4 shadow-lg">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-green-200/40">
            <LuShapes className="text-2xl text-green-500" />
          </div>
          <h3 className="mb-2 text-base font-semibold lg:text-lg">Thương hiệu</h3>
          <p className="text-xs leading-relaxed lg:text-sm">
            Gia tăng nhận diện thương hiệu cho doanh nghiệp mới
          </p>
        </div>

        {/* Block 4 */}
        <div className="flash-animation-item flex min-w-[160px] flex-1 flex-col items-center rounded-xl bg-backgroundMain p-4 shadow-lg">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-200/40">
            <FaRegHandshake className="text-2xl text-yellow-500" />
          </div>
          <h3 className="mb-2 text-base font-semibold lg:text-lg">Khách hàng</h3>
          <p className="text-xs leading-relaxed lg:text-sm">
            Chăm sóc khách hàng tốt hơn, quản lý dễ hơn
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingSubHeader;
