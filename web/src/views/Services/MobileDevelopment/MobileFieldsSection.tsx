"use client";

import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";
import React from "react";

const MobileFieldsSection = () => {
  const [heightItem1, setHeightItem1] = React.useState<number[]>([106, 154, 106]);
  const [heightItem2, setHeightItem2] = React.useState<number[]>([136, 154, 76]);
  const [heightItem3, setHeightItem3] = React.useState<number[]>([106, 154, 106]);
  const [heightItem4, setHeightItem4] = React.useState<number[]>([136, 154, 76]);

  return (
    <div className="mb-10 mt-16 flex w-full flex-col items-center justify-center">
      <TitleSection
        title={"Lĩnh vực"}
        subtitle={"Phát triển ứng dụng di động cho nhiều ngành công nghiệp khác nhau"}
        description=""
      />
      <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 xl:px-10">
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <div
            className={`relative w-auto overflow-hidden rounded-bl-lg rounded-br-lg transition-all duration-300`}
            style={{ height: `${heightItem1[0]}px` }}
            onMouseOver={() => setHeightItem1([164, 106, 96])}
            onMouseLeave={() => setHeightItem1([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Healthcare
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749274106/healthcare_djmthy.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative transition-all duration-300 h-[${heightItem1[1]}px] w-auto overflow-hidden rounded-lg`}
            style={{ height: `${heightItem1[1]}px` }}
            onMouseOver={() => setHeightItem1([96, 174, 96])}
            onMouseLeave={() => setHeightItem1([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Education & Learning
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749274056/education_iygupu.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative transition-all duration-300 h-[${heightItem1[2]}px] w-auto overflow-hidden rounded-tl-lg rounded-tr-lg`}
            style={{ height: `${heightItem1[2]}px` }}
            onMouseOver={() => setHeightItem1([96, 106, 164])}
            onMouseLeave={() => setHeightItem1([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Logistics & Vận tải
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749277936/logistics_bmwi0f.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <div
            className={`relative w-auto overflow-hidden rounded-bl-lg rounded-br-lg transition-all duration-300`}
            style={{ height: `${heightItem2[0]}px` }}
            onMouseOver={() => setHeightItem2([166, 139, 61])}
            onMouseLeave={() => setHeightItem2([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Bán lẻ & Tiêu dùng
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749278492/retail_rwgdbz.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative w-auto overflow-hidden rounded-lg transition-all duration-300`}
            style={{ height: `${heightItem2[1]}px` }}
            onMouseOver={() => setHeightItem2([126, 174, 66])}
            onMouseLeave={() => setHeightItem2([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              F&B - Food and Beverage
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280034/f_b_yqrar1.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative w-auto overflow-hidden rounded-tl-lg rounded-tr-lg transition-all duration-300`}
            style={{ height: `${heightItem2[2]}px` }}
            onMouseOver={() => setHeightItem2([106, 124, 136])}
            onMouseLeave={() => setHeightItem2([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Branding thương hiệu
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280486/branding_dfbulk.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
          <div
            className={`relative w-auto overflow-hidden rounded-bl-lg rounded-br-lg transition-all duration-300`}
            style={{ height: `${heightItem3[0]}px` }}
            onMouseOver={() => setHeightItem3([164, 106, 96])}
            onMouseLeave={() => setHeightItem3([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Dịch vụ công
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280186/dvc_jfizm3.webp"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative w-auto overflow-hidden rounded-lg transition-all duration-300`}
            style={{ height: `${heightItem3[1]}px` }}
            onMouseOver={() => setHeightItem3([96, 174, 96])}
            onMouseLeave={() => setHeightItem3([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Nông - Lâm - Ngư nghiệp
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280334/nong-lam-ngu_lhxvuo.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative w-auto overflow-hidden rounded-tl-lg rounded-tr-lg transition-all duration-300`}
            style={{ height: `${heightItem3[2]}px` }}
            onMouseOver={() => setHeightItem3([96, 106, 164])}
            onMouseLeave={() => setHeightItem3([106, 154, 106])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Loyalty - Giữ chân khách hàng
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280113/loyalty_fdl2ci.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4">
          <div
            className={`relative w-auto overflow-hidden rounded-bl-lg rounded-br-lg transition-all duration-300`}
            style={{ height: `${heightItem4[0]}px` }}
            onMouseOver={() => setHeightItem4([166, 139, 51])}
            onMouseLeave={() => setHeightItem4([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Công nghệ thông tin
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749280877/IT_k0gj0m.jpg"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative transition-all duration-300 h-${heightItem4[1]} w-auto overflow-hidden rounded-lg`}
            style={{ height: `${heightItem4[1]}px` }}
            onMouseOver={() => setHeightItem4([126, 174, 66])}
            onMouseLeave={() => setHeightItem4([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Sự kiện & Truyền thông
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749282885/events_emvm2e.webp"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className={`relative w-auto overflow-hidden rounded-tl-lg rounded-tr-lg transition-all duration-300`}
            style={{ height: `${heightItem4[2]}px` }}
            onMouseOver={() => setHeightItem4([106, 124, 136])}
            onMouseLeave={() => setHeightItem4([136, 154, 76])}
          >
            <p
              className="absolute left-3 top-4 z-[1] text-lg font-bold text-white"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              CRM
            </p>
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1749282942/crm_oaepmj.png"
              alt="Fields"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFieldsSection;
