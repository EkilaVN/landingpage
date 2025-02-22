import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import MyServiceDecor from "./MyServiceDecor";
import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

const MyServices = () => (
  <div className="relative mb-20 flex w-full justify-center lg:w-[100vw]">
    <MyServiceDecor />
    <div className="relative my-20 flex w-full flex-col px-4 md:px-10 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      <div className="flex w-full justify-center">
        <TitleSection
          title={"Services"}
          subtitle={"What I Do for Clients"}
          description={
            "Most common methods for designing websites that work well on desktop is responsive and adaptive design"
          }
          className="px-4"
        />
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-10 text-textColor lg:grid-cols-2">
        <CardContainer>
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="https://smomedia.vn/wp-content/uploads/2022/04/Landing_pages_screens.webp"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="https://smomedia.vn/wp-content/uploads/2022/04/Landing_pages_screens.webp"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="https://smomedia.vn/wp-content/uploads/2022/04/Landing_pages_screens.webp"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="https://smomedia.vn/wp-content/uploads/2022/04/Landing_pages_screens.webp"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  </div>
);

export default MyServices;
