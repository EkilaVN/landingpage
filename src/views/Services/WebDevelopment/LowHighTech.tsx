import TitleSection from "@/components/common/TitleSection";
import { ImInsertTemplate } from "react-icons/im";
import { TbSourceCode } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

const lowTechList = [
  "Chi phí xây dựng thấp",
  "Phù hợp với cá nhân hoặc doanh nghiệp nhỏ có ít nhu cầu",
  "Triển khai nhanh, ít tốn thời gian",
  "Dễ dàng tự quản lý nếu là website tĩnh nhỏ",
  "Phù hợp cho các trang giới thiệu đơn giản (CV, portfolio, landing mini)",
  "Có thể chạy tốt trên các hosting rẻ tiền",
  "Thích hợp cho thử nghiệm ý tưởng hoặc MVP",
];

const highTechList = [
  "Tối ưu tốc độ và hiệu suất hoạt động",
  "Giao diện hiện đại, chuẩn UX/UI, tạo ấn tượng chuyên nghiệp",
  "Linh hoạt tùy biến, dễ mở rộng theo quy mô doanh nghiệp",
  "Dễ quản trị qua CMS, tiết kiệm thời gian vận hành",
  "Tích hợp mạnh mẽ với các hệ thống khác: CRM, chatbot, thanh toán...",
  "Bảo mật cao, cập nhật thường xuyên",
  "Luôn sẵn sàng nâng cấp công nghệ mới",
];

const LowHighTech = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center px-4 md:my-24 xl:px-10">
      <TitleSection
        title={"Tiết kiệm"}
        subtitle={"Công nghệ linh hoạt"}
        description={
          "Ekila luôn thấu hiểu những áp lực về chi phí mà doanh nghiệp phải đối mặt. Vì vậy, chúng tôi luôn đề cao tính phù hợp và tiết kiệm, tránh mọi lãng phí không cần thiết, với hai giải pháp linh hoạt để khách hàng lựa chọn."
        }
      />
      <div className="flex w-full flex-col justify-between gap-6 px-4 md:flex-row md:px-0">
        <div className="flex w-full flex-1 flex-col">
          <h3 className="text-center text-lg font-bold">Website Low-Tech</h3>
          <div className="mt-6 flex flex-col gap-3">
            {lowTechList.map((item) => (
              <div className="flex items-center gap-4" key={item}>
                <span>
                  <FaCheckCircle className="text-base text-colorTriangole" />
                </span>
                <span className="text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-1 justify-center gap-2">
          <div className="flex h-full min-h-44 flex-col justify-between bg-gradient-to-br from-colorPrimary to-colorTriangole p-4 text-white transition-all duration-500 hover:bg-gradient-to-tl">
            <ImInsertTemplate className="text-xl" />
            <span className="text-sm font-bold">Low-Tech</span>
          </div>
          <div className="flex h-full min-h-44 flex-col justify-between bg-colorPrimary bg-gradient-to-tl from-colorPrimary to-colorTriangole p-4 text-white transition-all duration-500 hover:bg-gradient-to-br">
            <TbSourceCode className="text-2xl" />
            <span className="text-sm font-bold">High-Tech</span>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <h3 className="text-center text-lg font-bold">Website High-Tech</h3>
          <div className="mt-6 flex flex-col gap-3">
            {highTechList.map((item) => (
              <div className="flex items-center gap-4" key={item}>
                <span>
                  <FaCheckCircle className="text-base text-colorTriangole" />
                </span>
                <span className="text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowHighTech;
