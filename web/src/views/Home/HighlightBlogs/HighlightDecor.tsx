"use client";
import { motion } from "framer-motion";
import { fadeInAnimationVariants, fadeRightAnimationVariants } from "@/lib/InitEffect";

const HighlightDecor = () => {
  return (
    <>
      <motion.img
        src={"https://marketifythemes.net/html/dizme/img/brushes/news/2.png"}
        alt="Deco1"
        className="absolute -top-20 right-0 lg:block"
        variants={fadeRightAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
      <motion.img
        src="https://marketifythemes.net/html/dizme/img/brushes/news/1.png"
        alt="Deco2"
        className="absolute -top-40 left-10 z-50 md:top-24"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
    </>
  );
};

export default HighlightDecor;
