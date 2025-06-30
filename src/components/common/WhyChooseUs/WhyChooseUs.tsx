import TitleSection from "@/components/common/TitleSection";
import { GrGroup } from "react-icons/gr";
import { GoShieldCheck } from "react-icons/go";
import { LuGlobeLock } from "react-icons/lu";
import { GiCycle } from "react-icons/gi";

const webReasons = [
  {
    title: "Đội ngũ kinh nghiệm",
    description:
      "Các lập trình viên của chúng tôi luôn lựa chọn và ứng dụng công nghệ phù hợp nhất cho từng dự án.",
    icon: <GrGroup />,
  },
  {
    title: "Quy trình Agile",
    description:
      "Quy trình chuẩn chỉnh, kiểm soát chặt chẽ từng giai đoạn, đảm bảo chất lượng đầu ra và đúng tiến độ.",
    icon: <GiCycle />,
  },
  {
    title: "Tối ưu bảo mật",
    description:
      "Tăng cường bảo mật hệ thống, đồng thời cam kết tuyệt đối trong việc bảo vệ thông tin của khách hàng.",
    icon: <LuGlobeLock />,
  },
  {
    title: "Bảo hành trọn đời",
    description:
      "Ekila đồng hành cùng doanh nghiệp trong quá trình vận hành và nâng tầm website một cách bền vững.",
    icon: <GoShieldCheck />,
  },
];

const WhyChooseUs = ({ platform }: { platform: string }) => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title={"Chọn Ekila"}
        subtitle={`Tại sao khách hàng chọn Phát triển ${platform} tại Ekila?`}
        description=""
      />
      <div className="relative flex w-full flex-col justify-between gap-6 px-4 md:flex-row xl:px-0">
        <div className="flex flex-col gap-6 md:flex-row">
          {webReasons.map((item) => (
            <div
              className="flash-animation-item flex min-h-[280px] flex-1 flex-col justify-between rounded-lg bg-backgroundCard p-5 shadow transition-all duration-300 hover:-translate-y-3 md:min-h-[360px]"
              key={item.title}
            >
              <div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="mt-6 text-base">{item.description}</p>
              </div>
              <div className="flex justify-end text-6xl text-colorTriangole">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
