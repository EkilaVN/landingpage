import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

const dataLeft = [
  {
    title: "Tư vấn phát triển ứng dụng",
    content:
      "Đội ngũ tư vấn giàu kinh nghiệm của Ekila sẽ cùng bạn xác định tầm nhìn và đồng hành xuyên suốt quá trình phát triển theo phương pháp Agile, đảm bảo sản phẩm đáp ứng nhu cầu người dùng lẫn mục tiêu kinh doanh.",
  },
  {
    title: "Phát triển ứng dụng Android",
    content:
      "Mở rộng phạm vi tiếp cận với dịch vụ phát triển ứng dụng Android tùy chỉnh của Ekila. Đội ngũ sử dụng Kotlin và Java để tạo ra các ứng dụng tương thích với nhiều thiết bị và đáp ứng nhu cầu đông đảo người dùng.",
  },
  {
    title: "Phát triển ứng dụng iOS",
    content:
      "Tận dụng tối đa hệ sinh thái Apple với dịch vụ phát triển ứng dụng iOS của chúng tôi. Ekila sử dụng Swift và Objective-C để xây dựng các ứng dụng chất lượng cao, tích hợp mượt mà và vận hành ổn định.",
  },
  {
    title: "Ứng dụng Hybrid",
    content:
      "Dịch vụ phát triển ứng dụng Hybrid của Ekila kết hợp ưu điểm của ứng dụng gốc và web. Với nền tảng như React Native và Flutter, Ekila mang đến giải pháp đa nền tảng nhưng giữ được trải nghiệm như ứng dụng gốc.",
  },
];

const dataRight = [
  {
    title: "UX/UI Wireframe & Design",
    content:
      "Nhóm thiết kế của chúng tôi tạo ra các Wireframe lấy người dùng làm trung tâm và giao diện trực quan, thẩm mỹ bằng Figma và Adobe XD, với trọng tâm là điều hướng mượt mà và trải nghiệm tương tác tối ưu.",
  },
  {
    title: "Ứng dụng Native",
    content:
      "Dịch vụ phát triển ứng dụng Native, tận dụng tối đa API và SDK của thiết bị để mang lại hiệu suất vượt trội và trải nghiệm người dùng chất lượng cao.",
  },
  {
    title: "Ứng dụng Cross-Platform",
    content:
      "Tiếp cận đối tượng rộng hơn với dịch vụ phát triển ứng dụng đa nền tảng bằng Xamarin và Cordova. Ekila đảm bảo hiệu suất ổn định và trải nghiệm người dùng nhất quán trên mọi thiết bị.",
  },
  {
    title: "MVP & Prototyping",
    content:
      "Ekila tạo nguyên mẫu và MVP (Sản phẩm khả thi tối thiểu) nhanh chóng bằng công cụ như InVision, giúp kiểm chứng ý tưởng, thu thập phản hồi sớm và tinh chỉnh giải pháp hiệu quả ngay từ đầu.",
  },
];

const DevServiceKit = () => {
  const CardItem = (title: string, content: string) => (
    <div
      className="w-full flex-1 rounded-lg bg-backgroundCard px-4 py-5 transition-all hover:-translate-y-1 hover:shadow-lg"
      key={title}
    >
      <h3 className="pb-2 text-base font-bold text-textTriangole md:text-lg">{title}</h3>
      <p className="text-sm md:text-[15px]">{content}</p>
    </div>
  );

  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 lg:px-4 xl:px-10">
      <TitleSection
        title={"Phát triển toàn diện"}
        subtitle={"Bộ dịch vụ phát triển ứng dụng di động"}
        description=""
      />
      <div className="relative flex w-full flex-col justify-between gap-6 px-4 lg:px-0">
        <div className="flex flex-col gap-7 lg:flex-row">
          <div className="flex flex-1 flex-col gap-7">
            {dataLeft.map((item) => CardItem(item.title, item.content))}
          </div>
          <div className="flex flex-1 flex-col">
            <div className="w-full rounded-lg bg-backgroundCard px-4 py-5 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="pb-2 text-lg font-bold text-textTriangole">
                Kiểm tra và đảm bảo chất lượng
              </h3>
              <p className="text-[15px]">
                Ekila cam kết chất lượng thông qua các giai đoạn kiểm thử toàn diện — từ thử nghiệm
                đơn vị, tích hợp đến kiểm thử chấp nhận người dùng (UAT) — đảm bảo ứng dụng vận hành
                ổn định và sẵn sàng triển khai.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <div className="m-auto h-10 w-6 bg-[#dae9fd]" />
              <div className="flex-1 px-10 lg:px-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/6871/6871066.png"
                  alt="Mobile Development"
                  height={512}
                  width={512}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-7">
            {dataRight.map((item) => CardItem(item.title, item.content))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevServiceKit;
