"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/hooks/zustand/themeStore";
import RippleButton from "@/components/ui/RippleButton";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import Sun from "@/assets/svgs/Sun.svg";
import Moon from "@/assets/svgs/moon.svg";
import logo from "@/assets/images/logo/logo.png";
import logo_complex from "@/assets/images/logo/logo_complex.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { PATHS } from "@/constants/route";

export const menuItems = [
  { label: "Trang chủ", path: PATHS.HOME },
  {
    label: "Dịch vụ",
    submenu: [
      { label: "Xây dựng website", path: PATHS.SERVICES.WEB_DEVELOPMENT },
      { label: "Phát triển Ứng dụng điện thoại", path: PATHS.SERVICES.MOBILE_DEVELOPMENT },
      { label: "Phát triển Zalo Mini App", path: PATHS.SERVICES.ZMA_DEVELOPMENT },
      { label: "Marketing Agency", path: PATHS.SERVICES.MARKETING_AGENCY },
      // { label: "UI/UX/Graphic Design", path: "/services/ui-ux-graphic-design" },
    ],
  },
  { label: "Dự án", path: PATHS.PORTFOLIO },
  // { label: "Blog", path: PATHS.BLOG },
];

const Header = () => {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useThemeStore();
  const pathname = usePathname();

  const [bgColor, setBgColor] = useState("transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

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

  const isParentActive = (item: (typeof menuItems)[number]): boolean => {
    if (item.submenu) {
      console.log(pathname);
      return item.submenu.some((sub) => pathname === sub.path);
    }
    return pathname === item.path;
  };

  useMotionValueEvent(scrollY, "change", (latestY) => {
    if (latestY > 50) {
      setBgColor(theme === "light" ? "#ffffff" : "#2b2d33");
    } else {
      setBgColor("transparent");
    }
  });

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: easeInOut } },
  };

  useEffect(() => {
    const isPortfolioPage = pathname.includes(PATHS.PORTFOLIO);
    const haveSlug = pathname.split("/").length > 2;
    if (isPortfolioPage && haveSlug) {
      setTheme("light");
    } else {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setTheme(savedTheme);
    }
  }, [pathname, setTheme]);

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.5s ease",
      }}
      className="fixed top-0 z-30 flex h-14 w-full justify-center px-4 shadow-sm lg:h-[70px]"
    >
      <div className="flex w-full items-center justify-between lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <Link href={PATHS.HOME} className="flex items-center gap-2">
          <Image
            src={theme === "light" ? logo : logo_complex}
            alt="Logo"
            width={110}
            height={36}
            priority
            className="hidden md:block"
          />
          <Image
            src={theme === "light" ? logo : logo_complex}
            alt="Logo"
            width={80}
            height={30}
            priority
            className="md:hidden"
          />
        </Link>

        {!isMenuOpen ? (
          <AlignJustify className="size-6 lg:hidden" onClick={() => setIsMenuOpen(true)} />
        ) : (
          <X className="size-6 lg:hidden" onClick={() => setIsMenuOpen(false)} />
        )}

        <AnimatePresence>
          {(isMenuOpen || !isMobile) && (
            <motion.ul
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${
                !isMobile ? "hidden" : "flex"
              } absolute right-0 top-12 mt-[8px] w-full flex-col justify-center gap-7 bg-white px-4 py-5 text-base font-semibold text-textColor dark:bg-[#2b2d33] lg:static lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:py-0 lg:dark:bg-transparent xl:px-0`}
            >
              {menuItems.map((item) => (
                <li key={item.label} className="group relative">
                  {item.submenu ? (
                    <div className="group relative">
                      <button
                        onClick={() => {
                          if (isMobile) toggleSubmenu(item.label);
                        }}
                        className={`flex w-full items-center justify-between gap-1 py-2 ${
                          isParentActive(item) ? "text-textMain dark:text-textTriangole" : ""
                        } hover:text-textMain dark:hover:text-textTriangole`}
                      >
                        <span>{item.label}</span>
                        <IoMdArrowDropdown
                          className={`text-2xl transition-transform duration-300 ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`${
                          isMobile
                            ? activeSubmenu === item.label
                              ? "block"
                              : "hidden"
                            : "absolute right-0 top-full z-20 hidden group-hover:block"
                        }`}
                      >
                        <ul className="flex-col gap-2 rounded-md bg-white p-3 text-sm shadow-lg dark:bg-[#2b2d33] lg:min-w-[280px]">
                          {item.submenu.map((sub) => (
                            <li key={sub.path}>
                              <Link
                                href={sub.path}
                                className={`block px-2 py-2 hover:text-textMain dark:hover:text-textTriangole ${
                                  pathname === sub.path
                                    ? "text-textMain dark:text-textTriangole"
                                    : ""
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`hover:text-textMain dark:hover:text-textTriangole ${
                        isParentActive(item) ? "text-textMain dark:text-textTriangole" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
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
                <a
                  href="https://www.facebook.com/ekila.vn"
                  target="__blank"
                  className="flex justify-center"
                >
                  <RippleButton title="Tư vấn ngay" customClass="font-semibold p-5 text-base" />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;
