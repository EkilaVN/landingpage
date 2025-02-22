"use client";

import { motion } from "framer-motion";
import Decor1Src from "@/assets/images/deco1.png";
import Decor2Src from "@/assets/images/deco2.png";
import { fadeInAnimationVariants } from "@/lib/InitEffect";

const MotionDecor = () => (
  <>
    <motion.img
      src={Decor1Src.src}
      alt=""
      className="absolute -left-10 -top-24 z-10 hidden w-[130px] lg:block"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
    <motion.img
      src={Decor2Src.src}
      alt=""
      className="absolute -bottom-20 -right-32 z-10 hidden lg:block"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
  </>
);

export default MotionDecor;
