"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/hooks/zustand/themeStore";
import RippleButton from "@/components/ui/RippleButton";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import Sun from "@/assets/svgs/Sun.svg";
import Moon from "@/assets/svgs/moon.svg";

export const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useThemeStore();
  const pathname = usePathname();

  const [bgColor, setBgColor] = useState("transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (scrollY.get() > 50) {
      setBgColor(newTheme === "light" ? "#ffffff" : "#2b2d33");
    } else {
      setBgColor("transparent");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_HTVinh_FullStack_Office.pdf";
    link.download = "My_CV.pdf";
    link.click();
  };

  useMotionValueEvent(scrollY, "change", (latestY) => {
    if (latestY > 50) {
      setBgColor(theme === "light" ? "#ffffff" : "#2b2d33");
    } else {
      setBgColor("transparent");
    }
  });

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.5s ease",
      }}
      className="fixed top-0 z-30 flex h-14 w-full justify-center px-4 shadow-sm lg:h-[70px]"
    >
      <div className="flex w-full items-center justify-between sm:px-3 md:px-6 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <Image
          src="https://marketifythemes.net/html/dizme/img/logo/logo.png"
          alt="Logo"
          width={150}
          height={80}
          priority
          className="h-auto w-auto"
        />

        {!isMenuOpen ? (
          <AlignJustify className="size-6 lg:hidden" onClick={() => setIsMenuOpen(true)} />
        ) : (
          <X className="size-6 lg:hidden" onClick={() => setIsMenuOpen(false)} />
        )}

        <AnimatePresence>
          {(isMenuOpen || !isMobile) && (
            <motion.ul
              initial={isMobile ? { x: "100%" } : { x: 0 }}
              animate={{ x: 0 }}
              exit={isMobile ? { x: "100%" } : { x: 0 }}
              className={`${
                !isMobile ? "hidden" : "flex"
              } absolute right-0 top-12 mt-[8px] w-full flex-col justify-center gap-4 overflow-hidden bg-white px-4 py-5 text-base font-semibold text-textColor dark:bg-[#2b2d33] sm:px-3 md:px-6 lg:static lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:py-0 lg:dark:bg-transparent`}
            >
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-textMain ${pathname === item.path ? "text-textMain" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <div
                  onClick={handleChangeTheme}
                  className="flex transform cursor-pointer items-center rounded-lg p-[6px] duration-200 hover:bg-[#f0f0f068] dark:hover:bg-[#3a3b3f5a]"
                >
                  {theme === "dark" ? (
                    <Image src={Moon} width={20} height={20} alt={""} />
                  ) : (
                    <Image src={Sun} width={20} height={20} alt={""} />
                  )}
                </div>
              </li>
              <li>
                <RippleButton
                  title="Download CV"
                  customClass="font-semibold p-5 text-base"
                  onClick={handleDownloadCV}
                />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;
