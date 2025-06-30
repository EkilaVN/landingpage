import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import MyServiceDecor from "./MyServiceDecor";
import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import ContactMeDecor from "../ContactMe/ContactMeDecor";
import { PATHS } from "@/constants/route";

const SERVICES = [
  {
    title: "Xây dựng Website",
    description:
      "Ekila Solutions chuyên phát triển các trang web high-tech riêng biệt cho từng doanh nghiệp, tạo nên những trang web độc đáo và thân thiện. Với quy trình tinh gọn từ thiết kế đến thực thi, Ekila mang lại trải nghiệm mượt mà, giúp doanh nghiệp của bạn thu hút tối đa sự quan tâm của khách hàng mục tiêu.",
    image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749464934/web-service_reqoc8.png",
    path: PATHS.SERVICES.WEB_DEVELOPMENT,
  },
  {
    title: "Phát triển Ứng dụng di động",
    description:
      "Ekila Solutions cung cấp dịch vụ phát triển ứng dụng di động chuyên nghiệp, tạo ra các ứng dụng tùy chỉnh và trực quan, nâng cao trải nghiệm người dùng và thúc đẩy sự tương tác. Từ ý tưởng đến khi ra mắt, Ekila đảm bảo ứng dụng của bạn đáp ứng đầy đủ nhu cầu kinh doanh và nổi bật trên thị trường.",
    image:
      "https://res.cloudinary.com/deizfnbwc/image/upload/v1749464932/mobile-service_dyzoyl.png",
    path: PATHS.SERVICES.MOBILE_DEVELOPMENT,
  },
  {
    title: "Phát triển Zalo Mini App",
    description:
      "Ekila Solutions chuyên phát triển Zalo Mini App tối ưu cho các Doanh nghiệp và Nhà nước, giúp tiếp cận hàng triệu người dùng Zalo một cách hiệu quả. Với tính năng tùy chỉnh linh hoạt, Ekila mang đến giải pháp hoàn hảo để doanh nghiệp mở rộng kênh tương tác, gia tăng chuyển đổi và nâng cao trải nghiệm khách hàng ngay trong hệ sinh thái Zalo.",
    image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1749464927/zma-service_kjpmut.png",
    path: PATHS.SERVICES.ZMA_DEVELOPMENT,
  },
  {
    title: "Marketing Agency",
    description:
      "Ekila Solutions cung cấp dịch vụ chiến lược truyền thông và tiếp thị số, xây dựng các chiến dịch hiệu quả nhằm nâng cao mức độ nhận diện và tương tác của thương hiệu. Phương pháp của Ekila đảm bảo một chiến lược hiệu quả, được tùy chỉnh phù hợp với mục tiêu kinh doanh của từng doanh nghiệp.",
    image:
      "https://res.cloudinary.com/deizfnbwc/image/upload/v1749464910/design-service_chfdsr.png",
    path: PATHS.SERVICES.MARKETING_AGENCY,
  },
  // {
  //   title: "Dịch vụ Thiết kế (Design)",
  //   description:
  //     "Ekila Solutions mang đến giải pháp thiết kế toàn diện từ nhận diện thương hiệu, giao diện người dùng đến ấn phẩm truyền thông. Với tư duy thẩm mỹ hiện đại và hiểu biết sâu sắc về trải nghiệm người dùng, chúng tôi giúp doanh nghiệp thể hiện bản sắc một cách ấn tượng và nhất quán.",
  //   image:
  //     "https://res.cloudinary.com/deizfnbwc/image/upload/v1749464929/marketing-service_ftqiqr.png",
  // },
];

const MyServices = () => (
  <div className="relative flex w-full justify-center md:w-[100vw]">
    <div className="">
      <MyServiceDecor />
      <ContactMeDecor />
    </div>

    <div className="relative my-20 flex w-full flex-col px-4 md:px-10 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      <div className="flex w-full justify-center">
        <TitleSection
          title={"Dịch vụ"}
          subtitle={"Ekila cung cấp gì cho khách hàng"}
          description={
            "Giải pháp Website, Mobile App, Zalo Mini App và Marketing toàn diện để thu hút khách hàng và thúc đẩy tăng trưởng doanh nghiệp từ Ekila Solutions"
          }
          className="px-4"
        />
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-10 text-textColor lg:grid-cols-2">
        {SERVICES.map((service, index) => (
          <Link key={index} href={service.path}>
            <CardContainer className="inter-var">
              <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={service.image}
                    height="1000"
                    width="1000"
                    className="h-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                    loading="lazy"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default MyServices;
