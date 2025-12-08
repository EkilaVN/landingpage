"use client";

import { useEffect, useRef } from "react";
import { useLoadingBar } from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function RouteLoadingHandler() {
  const { start, complete } = useLoadingBar();
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]");

      if (link && link.getAttribute("href")?.startsWith("/")) {
        start();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [start]);

  useEffect(() => {
    if (prevPath.current !== null && prevPath.current !== pathname) {
      complete();
    }
    prevPath.current = pathname;
  }, [pathname, complete]);

  return null;
}
