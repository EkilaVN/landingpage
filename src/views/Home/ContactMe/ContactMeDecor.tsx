"use client";
import { fadeInAnimationVariants } from "@/lib/InitEffect";
import { motion } from "framer-motion";
import React from "react";

const ContactMeDecor = () => {
  return (
    <motion.img
      src={"https://marketifythemes.net/html/dizme/img/brushes/contact/1.png"}
      alt="Deco1"
      className="absolute -top-20 left-0"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    />
  );
};

export default ContactMeDecor;
