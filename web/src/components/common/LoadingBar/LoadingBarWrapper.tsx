"use client";

import { LoadingBarContainer } from "react-top-loading-bar";

export default function LoadingBarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LoadingBarContainer
      props={{
        color: "var(--color-triangole)",
        height: 3,
      }}
    >
      {children}
    </LoadingBarContainer>
  );
}
