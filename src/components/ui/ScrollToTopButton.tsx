"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / docHeight) * 100;
    setScrollYProgress(scrollProgress);
    if (scrollTop > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      className="fixed bottom-6 right-5 z-50 flex flex-col items-center justify-center gap-2 text-textColor"
    >
      <motion.a
        // onClick={scrollToTop}
        href="#"
        className="rotate-[0deg] cursor-pointer text-sm tracking-widest text-textColor [writing-mode:vertical-rl]"
      >
        TO TOP
      </motion.a>
      <div className="relative flex h-[100px] w-[1px] flex-col overflow-hidden bg-gray-300 dark:bg-gray-500">
        <motion.div
          className="absolute -top-0 w-[1px] bg-textColor"
          style={{ height: `${scrollYProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollToTopButton;
