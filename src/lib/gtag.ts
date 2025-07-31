export const GA_TRACKING_ID = "G-3HSXW3LWQ0";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
