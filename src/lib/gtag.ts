export const GA_TRACKING_ID = "G-3HSXW3LWQ0";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    process.env.NODE_ENV === "production"
  ) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
