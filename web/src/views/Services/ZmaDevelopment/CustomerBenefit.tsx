import Image from "next/image";
import { TbApiApp } from "react-icons/tb";
import { SlUserFollowing } from "react-icons/sl";
import { IoFlashOutline } from "react-icons/io5";

const itemList = [
  {
    icon: <TbApiApp />,
    title: "Trải nghiệm nhanh chóng",
    content: "Người dùng dễ dàng truy cập Mini App ngay trên Zalo mà không cần tải ứng",
  },
  {
    icon: <TbApiApp />,
    title: "Giao diện thân thiện",
    content: "Thiết kế tinh gọn phù hợp với nhu cầu và sử dụng dễ dàng",
  },
  {
    icon: <TbApiApp />,
    title: "Tính tiện dụng cao",
    content: "Mini App cho phép liên kết số tài khoản, số điện thoại,... thuận tiện",
  },
  {
    icon: <TbApiApp />,
    title: "Chia sẻ dễ dàng",
    content: "Chia sẻ trực tiếp cho bạn bè, nhóm chat trên Zalo thông qua Link/QR",
  },
  {
    icon: <TbApiApp />,
    title: "Tích hợp sẵn hệ sinh thái Zalo",
    content: "User được trải nghiệm tính năng mạnh mẽ từ Zalo: tin nhắn OA, thông báo đẩy...",
  },
];

const CustomerBenefit = () => {
  return (
    <div className="relative mb-12 mt-10 w-full md:mb-24 md:mt-16 md:px-4 lg:mt-10 xl:px-10">
      <div className="flex w-full flex-col gap-y-6 px-4 md:px-0 lg:flex-row">
        <div className="relative flex w-full flex-1">
          <div className="my-10 mr-16 aspect-square w-full rounded-full bg-backgroundCard" />
          <div className="absolute left-6 w-[45%] animate-float-slow">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749361792/zma1_svqpgk.png"
              alt="zma 1"
              width={645}
              height={1305}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/3 w-[43%] animate-float-medium">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749361790/zma3_rkk2fo.png"
              alt="zma 3"
              width={833}
              height={1343}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="absolute bottom-20 left-2/3 w-[31%] animate-float-fast">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749361792/zma2_k9tc97.png"
              alt="zma 2"
              width={645}
              height={1305}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center space-y-6 text-center lg:pl-[60px] lg:text-start">
          <div className="flex flex-col space-y-3">
            <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-2xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-3xl">
              Lợi ích <span className="text-textMain">Cho Người Dùng</span>
            </p>
          </div>
          <p className="text-sm leading-7 text-textSecondary md:text-base">
            <strong>Zalo Mini App</strong> giúp người dùng dễ dàng truy cập, trải nghiệm nhanh chóng
            đa dạng các dịch vụ và bảo mật cao.
          </p>
          {itemList.map((item) => (
            <div className="flex flex-col items-center gap-4 lg:flex-row" key={item.title}>
              <div className="flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-lg bg-gradient-to-br from-colorPrimary to-colorTriangole hover:bg-gradient-to-tl dark:from-[#4b4f5c] dark:to-black">
                <TbApiApp className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-7 text-textSecondary dark:text-white md:text-base">
                  {item.title}
                </p>
                <p className="text-sm leading-7 text-textSecondary md:text-[15px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}

          <div className="!mt-10 flex flex-col gap-8 md:flex-row">
            <div className="flex min-w-60 flex-1 gap-4 rounded-lg bg-backgroundCard px-6 py-4 shadow">
              <div className="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-full bg-backgroundMain">
                <SlUserFollowing className="text-2xl" />
              </div>
              <div>
                <h3 className="text-start text-2xl font-bold">80+ triệu</h3>
                <p className="text-[15px]">Người dùng Zalo</p>
              </div>
            </div>
            <div className="flex min-w-60 flex-1 gap-4 rounded-lg bg-backgroundCard px-6 py-4 shadow">
              <div className="flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-full bg-backgroundMain">
                <IoFlashOutline className="text-2xl" />
              </div>
              <div>
                <h3 className="text-start text-2xl font-bold">100+</h3>
                <p className="text-[15px]">Tính năng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBenefit;
