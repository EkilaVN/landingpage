"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const contents = [
  {
    img: "https://lanit.com.vn/wp-content/uploads/2023/10/mobile-app-la-gi-1.jpg",
    subTitle: "Mở rộng kênh kết nối với khách hàng",
    title: "Khách hàng luôn trong tầm tay của bạn",
    content:
      "Ứng dụng di động cho phép doanh nghiệp tiếp cận khách hàng mọi lúc, mọi nơi. Trong thời đại mà người dùng dành phần lớn thời gian trên điện thoại, việc hiện diện trên thiết bị di động giúp bạn duy trì sự kết nối liên tục, từ đó tăng cơ hội chuyển đổi và giữ chân khách hàng hiệu quả hơn.",
  },
  {
    img: "https://lanit.com.vn/wp-content/uploads/2023/10/mobile-app-la-gi-1.jpg",
    subTitle: "App hiện trên màn hình chính, không cần mở trình duyệt",
    title: "Hiện diện liên tục – điều mà website không làm được",
    content:
      "Không giống như website chỉ hoạt động khi được truy cập, mobile app luôn “nằm sẵn” trong điện thoại của người dùng. Chỉ một chạm là khách hàng đã có thể mở app – nhanh hơn, thuận tiện hơn. Điều này giúp thương hiệu hiện diện liên tục và dễ dàng hơn trong tâm trí khách hàng.",
  },
  {
    img: "https://lanit.com.vn/wp-content/uploads/2023/10/mobile-app-la-gi-1.jpg",
    subTitle: "App tận dụng được camera, GPS, thông báo đẩy…",
    title: "Tạo trải nghiệm cá nhân hóa sâu hơn website",
    content:
      "Ứng dụng di động có thể tích hợp sâu với thiết bị như gửi thông báo đẩy (push notification), định vị GPS, quét mã QR hoặc đăng nhập bằng vân tay. Website không thể làm điều này hiệu quả. Điều đó giúp doanh nghiệp tạo ra những tương tác thông minh và sát nhu cầu người dùng hơn.",
  },
  {
    img: "https://lanit.com.vn/wp-content/uploads/2023/10/mobile-app-la-gi-1.jpg",
    subTitle: "Gửi thông điệp trực tiếp đến khách hàng",
    title: "Tương tác chủ động – lợi thế lớn so với website",
    content:
      "Với app, bạn có thể gửi thông báo đẩy trực tiếp đến điện thoại khách hàng để giới thiệu sản phẩm mới, chương trình khuyến mãi hoặc lời nhắc đặt hàng. Đây là hình thức marketing chủ động, nhanh chóng, không làm phiền như email và hiệu quả hơn quảng cáo banner trên web.",
  },
  {
    img: "https://lanit.com.vn/wp-content/uploads/2023/10/mobile-app-la-gi-1.jpg",
    subTitle: "Một số chức năng của app có thể sử dụng offline",
    title: "Tính linh hoạt cao – ngay cả khi mất mạng",
    content:
      "Mobile app có thể được thiết kế để hoạt động ở chế độ ngoại tuyến (offline) – một điểm mà website không thể đáp ứng. Người dùng vẫn có thể truy cập dữ liệu đã lưu, xem lịch sử, thực hiện các thao tác cơ bản. Điều này đặc biệt hữu ích trong các ngành như logistics, bán hàng, hoặc du lịch.",
  },
];

const MobileSubHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <div className="relative mb-12 mt-4 px-4 md:mb-24 md:mt-6 xl:px-10">
      <div className="flex w-full flex-col gap-y-6 md:gap-6 lg:flex-row">
        <div className="flex w-full flex-1 rounded-2xl md:hidden lg:block">
          <Image
            src={contents[currentIndex].img}
            alt="Mobile App Visual"
            width={664}
            height={436}
            className="h-full w-full rounded-2xl transition-all duration-700 ease-in-out md:w-auto"
          />
        </div>
        <div
          className="flex flex-1 flex-col justify-between space-y-6 rounded-2xl border p-6 text-center transition-all duration-700 ease-in-out dark:border-[#333333] lg:text-start"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            key={currentIndex}
            className="flex animate-slide-up flex-col justify-between space-y-6"
          >
            <div className="flex flex-col space-y-3">
              <p className="text-lg font-bold text-textMain lg:text-xl">
                {contents[currentIndex].subTitle}
              </p>
              <p className="border-b bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text pb-7 text-xl font-bold text-transparent dark:border-[#333333] dark:from-neutral-50 dark:to-neutral-400 lg:text-2xl">
                {contents[currentIndex].title}
              </p>
            </div>
            <p className="text-sm leading-7 text-textSecondary lg:text-[15px]">
              {contents[currentIndex].content}
            </p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start">
            {contents.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex ? "scale-125 bg-colorTriangole" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSubHeader;
