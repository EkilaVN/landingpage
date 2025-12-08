import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import { hexToRGBA } from "@/utils";

const itemList = [
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749991227/build-web-icon_cmzfwd.png",
    title: "Thiết kế website",
    content:
      "Thiết kế website chuẩn SEO, hiển thị tốt trên mọi thiết bị, tốc độ tải nhanh, tối ưu liên tục. Website luôn sẵn sàng – bạn chỉ cần tập trung kinh doanh",
    bgColor: "#f8ecd6",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749991504/writer-icon_yncinu.png",
    title: "Viết bài cho website",
    content:
      "Viết bài chuẩn SEO dựa trên nghiên cứu tâm lý khách hàng, nội dung chất lượng cao, đa ngôn ngữ, thân thiện với Google",
    bgColor: "#defdea",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749991909/fanpage-care-icon_qdc4w1.png",
    title: "Dịch vụ chăm sóc Fanpage",
    content:
      "Viết bài dựa trên nội dung website, kết hợp hình ảnh và biểu tượng nhằm đảm bảo thẩm mỹ và tăng tương tác người dùng",
    bgColor: "#def9fe",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992073/zalo-oa-care-icon_zfbqmv.png",
    title: "Dịch vụ chăm sóc Zalo OA",
    content:
      "Chăm sóc và giữ chân khách hàng qua Zalo OA bằng cách đăng bài, phản hồi tin nhắn và gửi thông báo tự động trên nền tảng Zalo",
    bgColor: "#fad5ef",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992209/ads-fb-icon_wu78zo.png",
    title: "Dịch vụ quảng cáo Facebook",
    content:
      "Vừa phát triển thương hiệu, vừa thu hút khách hàng tiềm năng bằng seeding mạnh trong các hội nhóm – gia tăng cơ hội bán hàng",
    bgColor: "#F1F8D7",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992345/email-mkt-icon_wnxjhz.png",
    title: "Dịch vụ Email Marketing",
    content:
      "Tư vấn và triển khai email marketing từ khâu xây dựng danh sách đến gửi email thu hút khách hàng mới",
    bgColor: "#fee8df",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992577/ads-youtube-icon_uo4fr5.png",
    title: "Dịch vụ quảng cáo Youtube",
    content:
      "Tăng cơ hội bán hàng bằng cách tiếp cận khách hàng qua video, đồng thời xây dựng kênh vững mạnh với lượng subscriber ngày càng tăng",
    bgColor: "#defdea",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992887/zalo-app-icon_ca5iyk.png",
    title: "Thiết kế Zalo Mini App",
    content:
      "Thiết kế Mini App trên Zalo giúp doanh nghiệp tiếp cận hàng triệu người dùng Zalo, nâng cao trải nghiệm khách hàng và tăng cường tương tác",
    bgColor: "#f6f6f6",
  },
  {
    icon: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749992978/app-icon_dxd1ig.png",
    title: "Build & Submit App",
    content:
      "Phát triển ứng dụng iPhone/Android từ website, hướng dẫn vận hành và hỗ trợ đăng tải lên App Store, Play Store",
    bgColor: "#dffdf4",
  },
];

const MarketingServices = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title="Chiến lược"
        subtitle="Dịch vụ triển khai cho chiến dịch Digital Marketing"
        description="Danh sách một số dịch vụ Ekila triển khai hoàn thiện cho một chiến dịch Digital Marketing theo quy mô vừa đến rất lớn"
      />
      <div className="relative flex w-full gap-6 px-4 xl:px-0">
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
          {itemList.map((item) => (
            <div
              className="flex w-full flex-col items-center gap-4 rounded-3xl p-8 transition-transform duration-300 hover:scale-105 lg:max-w-96"
              key={item.title}
              style={{ backgroundColor: hexToRGBA(item.bgColor, 0.8) }}
            >
              <div className="flex h-20 min-h-20 w-20 min-w-20 items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="h-full w-auto"
                />
              </div>
              <div>
                <p className="py-2 text-center text-[15px] font-semibold leading-10 text-black md:text-base">
                  {item.title}
                </p>
                <p className="mt-2 text-center text-[13px] leading-10 text-gray-700 md:text-sm">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
