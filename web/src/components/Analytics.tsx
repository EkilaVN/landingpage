"use client";

import { useEffect } from "react";
import { pageview } from "@/lib/gtag";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}
