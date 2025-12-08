"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button as OriginalButton } from "@/components/ui/button";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  customClass?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  title,
  customClass,
  backgroundColor = "transparent",
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [rippleVisible, setRippleVisible] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsTabletOrSmaller(e.matches);
    };

    setIsTabletOrSmaller(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTabletOrSmaller) return;

    const button = buttonRef.current;
    if (button && rippleVisible) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
    }
  };

  const handleMouseEnter = () => {
    if (isTabletOrSmaller) return;

    setRippleVisible(true);
    const button = buttonRef.current;
    if (button) {
      button.style.setProperty("--size", "0px");
    }
  };

  const handleMouseLeave = () => {
    if (isTabletOrSmaller) return;

    setRippleVisible(false);
    const button = buttonRef.current;
    if (button) {
      button.style.setProperty("--size", "0px");
    }
  };

  return (
    <OriginalButton
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ backgroundColor }}
      className={`relative overflow-hidden rounded-full border-2 border-textMain py-3 text-textColor md:px-8 ${customClass} opacity-100 transition-transform hover:bg-opacity-90 lg:hover:scale-105`}
      {...props}
    >
      <span className="pointer-events-none relative z-10">{title || "Hover me"}</span>
      {!isTabletOrSmaller && rippleVisible && (
        <span
          className="pointer-events-none absolute animate-ripple rounded-full bg-textMain"
          style={{
            left: "var(--x)",
            top: "var(--y)",
            width: "var(--size, 400px)",
            height: "var(--size, 400px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </OriginalButton>
  );
};

export default RippleButton;
