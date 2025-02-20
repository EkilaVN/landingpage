import HireImg from "@/assets/images/2_preview_rev_1.png";
import Decor1 from "@/assets/images/deco1.png";
import Decor2 from "@/assets/images/deco2.png";
import RippleButton from "@/components/ui/RippleButton";
import { fadeInAnimationVariants } from "@/lib/InitEffect";
import { motion } from "framer-motion";
import Image from "next/image";

const HireMe = () => (
  <div className="relative my-24">
    <motion.img
      src={Decor1.src}
      alt=""
      className="absolute -left-10 -top-24 z-30 hidden w-[130px] lg:block"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
    <motion.img
      src={Decor2.src}
      alt=""
      className="absolute -bottom-20 -right-32 z-30 hidden lg:block"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
    <div className="flex w-full flex-col gap-y-6 lg:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <Image src={HireImg.src} alt="Hire me" width={600} />
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-6 text-center lg:pl-[60px] lg:text-start">
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-bold text-textMain lg:text-2xl">I&apos;m a Developer</p>
          <p className="bg-gradient-to-b from-neutral-600 to-neutral-800 bg-clip-text text-3xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 lg:text-4xl">
            I Can Design Web - App and Develop Any Thing You Want
          </p>
        </div>
        <p className="text-base leading-7 text-textSecondary lg:text-lg">
          Hello there! I&apos;m a web designer, and I&apos;m very passionate and dedicated to my
          work. With 20 years experience as a professional web developer, I have acquired the skills
          and knowledge necessary to make your project a success. I enjoy every step of the design
          process, from discussion and collaboration.
        </p>

        <div className="pt-3">
          <RippleButton title="Hire Me" customClass="p-6 text-base font-bold" />
        </div>
      </div>
    </div>
  </div>
);

export default HireMe;
