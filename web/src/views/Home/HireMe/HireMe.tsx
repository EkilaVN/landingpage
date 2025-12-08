import RippleButton from "@/components/ui/RippleButton";
import Image from "next/image";
import MotionDecor from "./MotionDecor";

const HireMe = () => {
  return (
    <div className="relative mb-32 mt-12 lg:my-20">
      <MotionDecor />
      <div className="mb-10 flex flex-col space-y-3 lg:mt-8">
        <p className="text-xl font-bold text-textMain lg:text-2xl">Đồng hành - Toàn diện</p>
        <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-3xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-4xl">
          Tại sao khách hàng chọn chúng tôi
        </p>
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:flex-row">
        <div className="flex flex-1 items-end justify-center">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749466170/home-laptop_pymsqj.png"
            alt="Hire me"
            width={2400}
            height={1350}
            className="h-auto w-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-6 text-center lg:pl-[60px] lg:text-start">
          <p className="text-base leading-7 text-textSecondary lg:text-lg">
            Với kinh nghiệm xây dựng và phát triển các dự án thực tế, Ekila Solutions luôn mang đến
            trải nghiệm tốt nhất cho người dùng. Ekila hiểu rằng mỗi dự án là một câu chuyện riêng,
            Ekila sẽ luôn lắng nghe và tận tâm để đảm bảo rằng mọi yêu cầu của bạn đều được thực
            hiện một cách hoàn thiện nhất.
          </p>
          <p className="text-base leading-7 text-textSecondary lg:text-lg">
            Một sản phẩm tốt phải mang lại trải nghiệm người dùng tuyệt vời — đó là lý do đội ngũ
            thiết kế UI/UX của Ekila luôn đặt trải nghiệm người dùng lên hàng đầu trong mọi dự án.
          </p>
          <p className="text-base leading-7 text-textSecondary lg:text-lg">
            Ngoài đội ngũ kỹ sư lập trình và chuyên gia tư vấn giải pháp phần mềm giàu kinh nghiệm,
            Ekila Solutions còn cung cấp dịch vụ <strong>Marketing Agency</strong>, giúp doanh
            nghiệp phát triển toàn diện và bền vững nhờ sự kết hợp hoàn hảo giữa{" "}
            <strong>Công nghệ, Truyền thông và Giải pháp.</strong>
          </p>

          {/* <div className="pt-3">
            <RippleButton title="Về Ekila Solutions" customClass="p-6 text-base font-bold" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HireMe;
