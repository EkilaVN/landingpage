import Image from "next/image";
import HighlightDecor from "./HighlightDecor";
import { Timeline } from "@/components/ui/timeline";

// const data = [
//   {
//     title: "Bước 1",
//     content: (
//       <div>
//         <p className="mb-8 text-xl font-bold text-neutral-800 dark:text-neutral-200">
//           Nghiên Cứu Và Phân Tích
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <Image
//             src="https://assets.aceternity.com/templates/startup-1.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/templates/startup-2.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/templates/startup-3.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/templates/startup-4.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Early 2023",
//     content: (
//       <div>
//         <p className="mb-8 text-lg font-normal text-neutral-800 dark:text-neutral-200">
//           I usually run out of copy, but when I see content this big, I try to integrate lorem
//           ipsum.
//         </p>
//         <p className="mb-8 text-lg font-normal text-neutral-800 dark:text-neutral-200">
//           Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some
//           more example of beautiful designs I built.
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <Image
//             src="https://assets.aceternity.com/pro/hero-sections.png"
//             alt="hero template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/features-section.png"
//             alt="feature template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/pro/bento-grids.png"
//             alt="bento template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/cards.png"
//             alt="cards template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "2022",
//     content: (
//       <div>
//         <p className="mb-4 text-base font-normal text-neutral-800 dark:text-neutral-200">
//           Deployed 5 new components on Aceternity today
//         </p>
//         <div className="mb-8">
//           <div className="flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
//             ✅ Card grid component
//           </div>
//           <div className="flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
//             ✅ Startup template Aceternity
//           </div>
//           <div className="flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
//             ✅ Random file upload lol
//           </div>
//           <div className="flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
//             ✅ Himesh Reshammiya Music CD
//           </div>
//           <div className="flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
//             ✅ Salman Bhai Fan Club registrations open
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <Image
//             src="https://assets.aceternity.com/pro/hero-sections.png"
//             alt="hero template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/features-section.png"
//             alt="feature template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/pro/bento-grids.png"
//             alt="bento template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//           <Image
//             src="https://assets.aceternity.com/cards.png"
//             alt="cards template"
//             width={500}
//             height={500}
//             className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
//           />
//         </div>
//       </div>
//     ),
//   },
// ];

const data = [
  {
    title: "Nghiên Cứu Và Phân Tích",
    content: (
      <div>
        {/* <p className="mb-8 text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Nghiên Cứu Và Phân Tích
        </p> */}
        <p className="mb-8 text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Tổ chức các cuộc họp và khảo sát để xác định nhu cầu và mục tiêu của khách hàng, đảm bảo
          giải pháp phần mềm phát triển phù hợp và mang lại giá trị thực tiễn.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755711599/customer_analystic_l6apwk.avif"
            alt="startup template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746176304/meet_tj9mpu.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Lập Kế Hoạch Và Thiết Kế",
    content: (
      <div>
        <p className="mb-8 text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Xác định các bước triển khai, tài nguyên cần thiết và tạo ra các bản thiết kế chi tiết cho
          phần mềm, đây được xem là bước quan trọng nhất nhằm đảm bảo rằng sản phẩm cuối cùng đáp
          ứng đầy đủ yêu cầu và mong đợi của khách hàng.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1745336072/DSC06808_oi64y8.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746180384/designdiagram_sv18pm.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746183395/wireframe_sdlnp4.webp"
            alt="bento template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746183542/gantt-chart_eyezgi.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Xây dựng sản phẩm",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-neutral-800 dark:text-neutral-200">
          Phát triển và lập trình phần mềm dựa trên các thiết kế đã được phê duyệt, nhằm tạo ra một
          sản phẩm chất lượng cao, đáp ứng đầy đủ yêu cầu và tiêu chuẩn của khách hàng.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755711599/it_build_mxzhlt.avif"
            alt="hero template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746184546/website_opdujf.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kiểm Tra Chất Lượng Và Nghiệm Thu",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-neutral-800 dark:text-neutral-200">
          Kiểm tra, đánh giá chất lượng phần mềm theo các tiêu chí đã thỏa thuận, đảm bảo sản phẩm
          đáp ứng yêu cầu trước khi chính thức chuyển giao sản phẩm.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746185695/qa_tbwrlr.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746186044/tester_z26fqh.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Bàn Giao Và Bảo Trì",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-neutral-800 dark:text-neutral-200">
          Chuyển giao phần mềm hoàn thiện cho khách hàng, bao gồm việc cung cấp tài liệu hướng dẫn,
          đào tạo người dùng và hỗ trợ kỹ thuật cần thiết để đảm bảo khách hàng sử dụng sản phẩm
          hiệu quả.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/c_pad,b_gen_fill,w_1024,h_683/v1746197130/Khu%CC%9Bo%CC%9Bng_Tra%CC%82%CC%80n_Duy_A_flat_design_illustration_of_a_person_sitting_at_85f0cbee-c662-433e-af80-3545a51de7bd_jiygfs.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <Image
            src="https://res.cloudinary.com/deizfnbwc/image/upload/v1746198678/bangiao_djsyex.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-24 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
        </div>
      </div>
    ),
  },
];

const HighlightBlogs = () => {
  return (
    <div className="relative flex w-full">
      <HighlightDecor />
      <div className="relative z-10 my-20 flex w-full flex-col items-center px-4 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default HighlightBlogs;
