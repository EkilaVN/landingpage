import TitleSection from "@/components/common/TitleSection";

const processes = [
  {
    title: "Phân tích và chiến lược",
    content:
      "Ekila khởi đầu bằng việc thấu hiểu tầm nhìn và mục tiêu của bạn, đảm bảo đồng bộ giữa mục tiêu ứng dụng và nhu cầu kinh doanh. Giai đoạn này bao gồm nghiên cứu thị trường, xây dựng chân dung người dùng và phân tích đối thủ cạnh tranh — tạo nền tảng vững chắc cho toàn bộ dự án.",
  },
  {
    title: "Thiết kế & Tạo mẫu",
    content:
      "Đội ngũ thiết kế của Ekila áp dụng nguyên tắc thiết kế lấy người dùng làm trung tâm để xây dựng giao diện trực quan (UI) và trải nghiệm hấp dẫn (UX). Ekila tạo khung và nguyên mẫu tương tác nhằm hình dung rõ chức năng, đảm bảo luồng trải nghiệm mượt mà trước khi bước vào giai đoạn phát triển.",
  },
  {
    title: "Phát triển ứng dụng",
    content:
      "Chúng tôi sử dụng các công nghệ tiên tiến như React, Flutter, Ruby, Python và Node.js để xây dựng ứng dụng hiệu suất cao, an toàn và dễ mở rộng. Quy trình phát triển tuân thủ các chuẩn mã hóa và kiến trúc phần mềm tốt nhất, đảm bảo chức năng mạnh mẽ và dễ bảo trì.",
  },
  {
    title: "Kiểm tra & Đảm bảo chất lượng",
    content:
      "Chúng tôi áp dụng quy trình đảm bảo chất lượng toàn diện với các bước kiểm thử đơn vị, tích hợp và chấp nhận người dùng (UAT). Giai đoạn kiểm thử kỹ lưỡng này đảm bảo ứng dụng hoạt động ổn định, hiệu suất cao và thân thiện với người dùng trên mọi thiết bị và hệ điều hành.",
  },
  {
    title: "Ra mắt sản phẩm & Hỗ trợ vận hành",
    content:
      "Sau khi ra mắt, chúng tôi cung cấp dịch vụ hỗ trợ liên tục với các bản cập nhật và nâng cấp tính năng, đảm bảo ứng dụng của bạn luôn thích ứng với nhu cầu người dùng và xu hướng thị trường.",
  },
];

const DevelopmentProcess = () => {
  const CardItem = (title: string, content: string) => (
    <div
      className="w-full min-w-[250px] flex-1 px-4 pb-6 transition-all hover:-translate-y-1 hover:shadow-lg md:min-w-[300px]"
      key={title}
    >
      <div className="my-4 h-1 w-full rounded-full bg-gradient-to-r from-purple-300 via-blue-200 to-white dark:from-purple-700 dark:via-blue-400" />
      <h3 className="my-5 h-16 text-base font-bold md:text-lg">{title}</h3>
      <p className="text-sm leading-6 md:text-[15px]">{content}</p>
    </div>
  );

  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title={"Quy trình tối ưu"}
        subtitle={"Quy trình phát triển sản phẩm tại Ekila Solutions"}
        description=""
      />
      <div className="relative flex w-[calc(100vw-16px)] flex-col justify-between gap-6 px-4 lg:px-0 xl:w-full">
        <div className="flex gap-2 overflow-x-auto lg:gap-4">
          {processes.map((item) => CardItem(item.title, item.content))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
