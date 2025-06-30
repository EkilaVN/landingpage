"use client";
import BottomTopSlider from "@/components/common/BottomTopSlider/BottomTopSlider";
import TitleSection from "@/components/common/TitleSection";

const CustomerSlider = () => {
  const customers = [
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746632788/atmclothing_m7hknd.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633914/thecoffee_fohude.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633910/freshstore_kmbmyg.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633908/osaka_shtae9.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633913/dvc_xnielt.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633905/viviapp_xikmbi.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633904/tldental_bb1der.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746633903/welegend_rq859w.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746634503/quickfish_hseygg.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746634953/globalbites_rvoetc.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746634946/kimquoctien_jb17id.png",
    },
    {
      name: "",
      image: "https://res.cloudinary.com/deizfnbwc/image/upload/v1746634935/kidtoy_vvhl8m.png",
    },
  ];

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center md:mb-32">
      <TitleSection
        title={"Phát triển bền vững"}
        subtitle={"Khách hàng tiêu biểu"}
        description={"Ekila rất hân hạnh được đồng hành phát triển cùng các doanh nghiệp"}
      />
      <div className="w-full max-w-4xl">
        <BottomTopSlider list={customers} />
      </div>
    </div>
  );
};

export default CustomerSlider;
