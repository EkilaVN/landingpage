import { easeInOut } from "framer-motion";

export const fadeInAnimationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeInOut, delay: 0.2 },
  },
};

export const fadeLeftAnimationVariants = {
  initial: { opacity: 0, scale: 0.8, x: -50 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: easeInOut, delay: 0.2 },
  },
};

export const fadeRightAnimationVariants = {
  initial: { opacity: 0, scale: 0.8, x: 50 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: easeInOut, delay: 0.2 },
  },
};
