"use client";
import { motion } from "framer-motion";
import Deco5 from "@/assets/images/deco5.png";
import Deco6 from "@/assets/images/deco6.png";
import { fadeLeftAnimationVariants, fadeRightAnimationVariants } from "@/lib/InitEffect";

const MyServiceDecor = () => {
  return (
    <>
      <motion.img
        src={Deco5.src}
        alt=""
        className="absolute -top-36 right-0 z-0"
        variants={fadeRightAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      />
      <motion.img
        src={Deco6.src}
        alt=""
        className="absolute -left-24 top-52 z-0"
        variants={fadeLeftAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      />
    </>
  );
};

export default MyServiceDecor;
