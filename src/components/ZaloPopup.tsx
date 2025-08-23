"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ZaloPopupProps {
  delay?: number; // Delay in milliseconds
  zaloOAUrl?: string; // Zalo OA URL
}

const ZaloPopup: React.FC<ZaloPopupProps> = ({
  delay = 7000,
  zaloOAUrl = "https://zalo.me/2637985617420627751",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("zalo-popup-shown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShouldShow(true);
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    // Mark popup as shown for this session
    sessionStorage.setItem("zalo-popup-shown", "true");
  };

  const handleContactClick = () => {
    // Open Zalo OA in new tab
    window.open(zaloOAUrl, "_blank");
    handleClose();
  };

  if (!shouldShow) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div
        className={`fixed left-1/2 top-1/2 z-50 h-auto w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white shadow-2xl transition-all duration-300 xl:mx-4 ${
          isVisible ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="h-full w-full rounded-2xl text-center">
          <div className="h-full w-full rounded-2xl">
            <Image
              src="https://res.cloudinary.com/deizfnbwc/image/upload/v1755933367/dvc_ads_banner_hqx6bu.jpg"
              alt="Zalo Banner"
              width={2160}
              height={1215}
              loading="lazy"
              className="rounded-2xl"
            />
          </div>

          {/* Action Buttons */}
          <div className="bottom-8 left-20 flex flex-col gap-3 p-3 sm:flex-row xl:absolute xl:w-[40%] xl:p-0">
            <button
              onClick={handleContactClick}
              className="flex flex-1 items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-blue-600 lg:py-4 lg:text-base"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.31-.99L22 22l-1.01-5.69C21.65 15 22 13.54 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              Liên hệ tư vấn
            </button>

            <button
              onClick={handleClose}
              className="flex-1 rounded-lg bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-700 shadow transition-colors duration-200 hover:bg-gray-300 lg:py-4 lg:text-base"
            >
              Để sau
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-5 -top-5 h-14 w-14 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute -bottom-3 -right-5 h-14 w-14 rounded-full bg-blue-200 opacity-30"></div>
      </div>
    </>
  );
};

export default ZaloPopup;
