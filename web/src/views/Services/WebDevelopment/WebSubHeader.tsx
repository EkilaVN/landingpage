import Image from "next/image";
import logo_single_trans from "@/assets/images/logo/logo_single_trans.png";
import { MdScreenSearchDesktop } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { GoGoal } from "react-icons/go";

const websiteKeywords = [
  "Accessility",
  "Browser-side",
  "Content Display",
  "Graphical User Interface",
  "Server-side",
  "Security",
  "Performance",
  "API Programing",
];

const WebSubHeader = () => {
  return (
    <div className="relative mb-12 mt-4 md:mb-28 md:mt-10 md:px-4 lg:mb-36 xl:px-10">
      <div className="flex w-full flex-col gap-y-6 px-4 md:px-0 lg:flex-row">
        <div className="flex w-full flex-1">
          <div className="flex flex-col gap-12 rounded-2xl border-2 border-dashed border-colorPrimary p-8 pb-12">
            <div className="flex gap-4">
              <div className="min-w-11 rounded-full bg-gradient-to-r from-colorPrimary to-colorTriangole p-2.5">
                <Image
                  src={logo_single_trans}
                  alt="Logo Single"
                  width={15}
                  height={15}
                  className="h-full w-auto"
                />
              </div>
              <div className="w-full text-sm">
                <h3 className="pb-1 font-semibold text-textSecondary">Ekila Solutions</h3>
                <p className="font-light text-textSecondary">Phát triển Website</p>
              </div>
            </div>
            <div className="relative flex flex-wrap justify-center rounded-md border-[3px] border-[#e1e1e1] px-6 py-12 dark:border-[#272728]">
              {websiteKeywords.map((item) => (
                <div
                  className="m-1 inline-block rounded-md bg-[#e1e1e1] p-1.5 text-xs text-textMain dark:bg-[#272728] dark:text-textTriangole"
                  key={item}
                >
                  {item}
                </div>
              ))}
              <div className="absolute -top-5 left-1/2 w-32 -translate-x-1/2 rounded-sm bg-purple-700 p-3 text-sm font-bold text-white">
                Front-End
              </div>
              <div className="absolute -bottom-5 left-1/2 w-32 -translate-x-1/2 rounded-sm bg-colorPrimary p-3 text-sm font-bold text-white">
                Back-End
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-6 text-center lg:pl-[60px] lg:text-start">
          <div className="flex flex-col space-y-3">
            <p className="text-lg font-bold text-textMain lg:text-xl">
              Website chuẩn – Hiện diện rõ – Khách hàng nhớ
            </p>
            <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-2xl">
              Đánh thức thương hiệu của bạn trong thế giới số với dịch vụ phát triển website chuẩn
              chỉnh!
            </p>
          </div>
          <p className="text-sm leading-7 text-textSecondary lg:text-base">
            Ekila Solutions là đối tác đáng tin cậy trong lĩnh vực phát triển web, chuyên sâu cả
            front-end và back-end để đảm bảo giải pháp toàn diện.
          </p>
          <p className="text-sm leading-7 text-textSecondary lg:text-base">
            Tại Ekila Solutions, dịch vụ tận tâm là giá trị cốt lõi. Chúng tôi tập trung vào việc
            xây dựng mối quan hệ lâu dài với khách hàng, với một đội ngũ luôn cam kết mang lại sự
            hài lòng tối đa. Từ tư vấn ban đầu đến triển khai và hỗ trợ sau dự án, chúng tôi luôn
            theo đuổi sự xuất sắc trong từng bước đi.
          </p>
        </div>
      </div>

      {/* 3 Feature Blocks */}
      <div className="-bottom-90 left-0 mt-12 flex w-full flex-wrap justify-between gap-8 md:px-4 lg:absolute xl:px-10">
        {/* Block 1 */}
        <div className="flash-animation-item flex min-w-[260px] flex-1 flex-col items-start rounded-xl bg-backgroundMain p-8 shadow-lg">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-200/30">
            <TfiRulerPencil className="text-4xl text-yellow-500" />
          </div>
          <h3 className="mb-4 text-xl font-semibold">Tối ưu UI/UX</h3>
          <p className="text-[15px] leading-relaxed lg:text-base">
            Giao diện website thể hiện tuyệt vời trên mọi thiết bị, sử dụng dễ dàng và thấu hiểu tâm
            lý người dùng, đây là thế mạnh của Ekila.
          </p>
        </div>

        {/* Block 2 */}
        <div className="flash-animation-item flex min-w-[260px] flex-1 flex-col items-start rounded-xl bg-backgroundMain p-8 shadow-lg">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-200/30">
            <GoGoal className="text-4xl text-cyan-500" />
          </div>
          <h3 className="mb-4 text-xl font-semibold">Tối ưu hiệu suất</h3>
          <p className="text-[15px] leading-relaxed lg:text-base">
            Tối ưu hóa tốc độ tải trang và hiệu suất, giúp website của bạn vượt trội về mặt SEO và
            trải nghiệm người dùng.
          </p>
        </div>

        {/* Block 3 */}
        <div className="flash-animation-item flex min-w-[260px] flex-1 flex-col items-start rounded-xl bg-backgroundMain p-8 shadow-lg">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200/30">
            <MdScreenSearchDesktop className="text-4xl text-purple-500" />
          </div>
          <h3 className="mb-4 text-xl font-semibold">Tối ưu bảo mật</h3>
          <p className="text-[15px] leading-relaxed lg:text-base">
            Bảo mật cao cấp và độ tin cậy tuyệt đối, đảm bảo website của bạn luôn an toàn và hoạt
            động ổn định 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebSubHeader;
