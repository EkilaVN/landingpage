"use client";
import { motion } from "framer-motion";
import Deco3 from "@/assets/images/deco3.png";
import Deco4 from "@/assets/images/deco4.png";
import { fadeInAnimationVariants, fadeRightAnimationVariants } from "@/lib/InitEffect";

const PortfolioDecor = () => {
  return (
    <>
      <motion.img
        src={Deco3.src}
        alt=""
        className="absolute left-5 top-10"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
      <motion.img
        src={Deco4.src}
        alt=""
        className="absolute -right-24 bottom-0 z-[-1] hidden lg:block"
        variants={fadeRightAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
    </>
  );
};

export default PortfolioDecor;
