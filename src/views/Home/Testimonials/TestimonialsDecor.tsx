"use client";
import { fadeRightAnimationVariants } from "@/lib/InitEffect";
import { motion } from "framer-motion";
import React from "react";

const TestimonialsDecor = () => {
  return (
    <motion.img
      src={"https://marketifythemes.net/html/dizme/img/brushes/news/2.png"}
      alt="Deco1"
      className="absolute -top-20 right-0 -z-10 lg:block"
      variants={fadeRightAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
  );
};

export default TestimonialsDecor;
