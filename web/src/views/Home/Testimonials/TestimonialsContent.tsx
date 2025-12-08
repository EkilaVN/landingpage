"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const FEEDBACKS = [
  {
    name: "Van Nguyen",
    company: "ATM Clothing",
    avatar: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746113660/Van_Nguyen_ukcfly.png",
    content:
      "Đội ngũ từ Ekila Solutions rất nhiệt tình và dễ thương, luôn sẵn sàng hỗ trợ mình trong quá trình làm việc. Mình rất hài lòng với sản phẩm mà Ekila Solutions đã làm cho mình và cả chính sách đồng hành sau bàn giao từ họ. Cảm ơn Ekila Solutions rất nhiều!",
  },
  {
    name: "Dinh Manh",
    company: "VNCEF - Quỹ Giáo Dục Nhi Đồng Việt Nam",
    avatar: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746114480/Dinh_Manh_yb9oea.png",
    content:
      "Mình thấy quy trình làm việc của Ekila Solutions rất chuyên nghiệp và bài bản. Họ đã giúp Welegend xây dựng một trang web rất đẹp và dễ sử dụng giúp tiếp cận khách hàng một cách hiệu quả. Cảm ơn Ekila Solutions đã đồng hành cùng mình trong suốt quá trình này.",
  },
  {
    name: "Nguyen Vu",
    company: "Công an tỉnh Thái Bình",
    avatar: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633913/dvc_xnielt.png",
    content:
      "Mình rất hài lòng với sản phẩm mà Ekila Solutions đã xây dựng, nó đã góp phần thúc đẩy quá trình Chuyển đổi số Quốc gia một cách hiệu quả. Đội ngũ Ekila khá chuyên nghiệp và tận tâm, luôn sẵn sàng hỗ trợ mình ngay cả trước, trong và sau khi hoàn thành sản phẩm.",
  },
  {
    name: "Nguyen Hieu",
    company: "Osaka Food & Drink",
    avatar:
      "https://res.cloudinary.com/deizfnbwc/image/upload/c_pad,b_gen_fill,ar_1:1/v1746115737/logo_new_jqvza1.png",
    content:
      "Ekila Solutions đã tư vấn và cung cấp giải pháp phần mềm chuyên biệt hóa cho nhà hàng Osaka Food & Drink. Họ đã giúp nhà hàng xây dựng ứng dụng Zalo Mini App rất đẹp và dễ sử dụng giúp tiếp cận và giữ chân khách hàng một cách hiệu quả.",
  },
];

const TestimonialsContent = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative hidden flex-1 lg:block">
        <Avatar className="absolute -left-12 top-4 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/2_preview_rev_1.png"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-20 right-12 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/3.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-28 left-2 h-10 w-10">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/1.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute right-4 top-5 h-16 w-16">
          <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <span className="absolute -left-28 bottom-24 h-8 w-8 rounded-full border-4 border-[#ca3333]"></span>
        <span className="absolute left-12 top-28 h-14 w-14 rounded-full border-4 border-[#ace72d]"></span>
        <span className="absolute bottom-2 left-11 h-6 w-6 rounded-full bg-[#e47c20]"></span>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="flex w-full flex-col justify-around lg:w-[60%]"
      >
        <CarouselContent>
          {FEEDBACKS.map((feedback, index) => (
            <CarouselItem key={index} className="flex flex-col space-y-12 p-5 lg:p-4">
              <div className="flex justify-center">
                <svg
                  xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="796 698 200 200"
                  className="h-12 w-12 lg:h-14 lg:w-14"
                  fill="#00c8ff"
                >
                  <g>
                    <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path>
                    <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path>
                  </g>
                </svg>
              </div>
              <p className="mt-10 text-center text-lg italic text-textSecondary lg:text-xl">
                {feedback.content}
              </p>
              <div className="my-9 flex w-full justify-center gap-5">
                <Avatar className="h-14 w-14">
                  <AvatarImage className="rounded-full" src={feedback.avatar} />
                  <AvatarFallback>VH</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-textColor lg:text-xl">{feedback.name}</p>
                  <p className="text-base text-textSecondary lg:text-lg">{feedback.company}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="relative hidden flex-1 lg:block">
        <Avatar className="absolute left-12 top-4 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/5.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-4 left-2 h-10 w-10">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/6.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute -right-2 bottom-20 h-16 w-16">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/7.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <span className="absolute -right-28 top-24 h-8 w-8 rounded-full border-4 border-[#ca3333]"></span>
        <span className="absolute right-11 top-28 h-14 w-14 rounded-full border-4 border-[#ac2fee]"></span>
        <span className="absolute -right-11 bottom-2 h-6 w-6 rounded-full bg-[#3fb5ff]"></span>
      </div>
    </div>
  );
};

export default TestimonialsContent;
