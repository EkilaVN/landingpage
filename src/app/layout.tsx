import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ekila Solutions - Giải pháp Chuyển đổi Số toàn diện | Zalo Mini App, Website, Mobile App, Marketing",
    template: "%s | Ekila Solutions",
  },
  description:
    "Ekila Solutions cung cấp giải pháp chuyển đổi số toàn diện cho Cá nhân, Doanh nghiệp và Nhà nước. Chuyên thiết kế website, phát triển ứng dụng mobile, Zalo Mini App và chiến lược marketing số. Liên hệ ngay để nhận tư vấn miễn phí!",
  keywords: [
    "Ekila",
    "Ekila Solutions",
    "chuyển đổi số",
    "thiết kế website",
    "phát triển ứng dụng",
    "mobile app",
    "Zalo Mini App",
    "Zalo chuyển đổi số",
    "Cơ quan nhà nước",
    "marketing số",
    "digital transformation",
    "web development Vietnam",
    "app development",
    "digital marketing",
    "UI/UX design",
    "e-commerce",
    "business solutions",
  ],
  authors: [{ name: "Ekila Solutions" }],
  creator: "Ekila Solutions",
  publisher: "Ekila Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ekila.vn"), // Replace with your actual domain
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Ekila Solutions - Giải pháp Chuyển đổi Số toàn diện",
    description:
      "Chuyên cung cấp dịch vụ thiết kế website, phát triển ứng dụng mobile, Zalo Mini App và giải pháp marketing số cho Cá nhân, Doanh nghiệp và Nhà nước. Đội ngũ chuyên nghiệp, giá cả hợp lý, hỗ trợ 24/7.",
    url: "https://ekila.vn", // Replace with your actual domain
    siteName: "Ekila Solutions",
    images: [
      {
        url: "https://res.cloudinary.com/deizfnbwc/image/upload/v1755927619/Ekila_Solutions_-_Open_Graph_vjpdpg.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Ekila Solutions - Giải pháp Chuyển đổi Số",
      },
      {
        url: "https://res.cloudinary.com/deizfnbwc/image/upload/v1755928456/logo_no-bg_kl0bg5.png", // Add square version
        width: 600,
        height: 600,
        alt: "Ekila Solutions Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekila Solutions - Giải pháp Chuyển đổi Số toàn diện",
    description:
      "Chuyên thiết kế website, phát triển app mobile, Zalo Mini App và marketing số. Liên hệ ngay để nhận tư vấn miễn phí!",
    images: ["https://res.cloudinary.com/deizfnbwc/image/upload/v1755928456/logo_no-bg_kl0bg5.png"], // Add your Twitter card image
    creator: "@ekilasolutions", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZX56vfOM5MCTWZaEwQTUd9AOky0jDpu8epFmJXGsDY0", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code", // If using Yandex
    // yahoo: "your-yahoo-verification-code", // If using Yahoo
  },
  category: "technology",
  classification: "Business Services",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    title: "Ekila Solutions",
    statusBarStyle: "default",
    capable: true,
  },
  applicationName: "Ekila Solutions",
  appLinks: {
    web: {
      url: "https://ekila.vn", // Replace with your actual domain
      should_fallback: true,
    },
  },
  bookmarks: ["https://ekila.vn"],
  archives: ["https://ekila.vn/blog"],
  assets: ["https://ekila.vn/portfolio"],
  generator: "Next.js",
  abstract:
    "Ekila Solutions - Đối tác tin cậy trong hành trình chuyển đổi số của Doanh nghiệp và Cơ quan nhà nước. Cung cấp giải pháp công nghệ toàn diện từ website, mobile app, Zalo Mini App đến chiến lược marketing số.",
  other: {
    "msapplication-TileColor": "#2d89ef",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-title": "Ekila Solutions",
    "application-name": "Ekila Solutions",
    "msapplication-tooltip": "Ekila Solutions - Giải pháp chuyển đổi số",
    "fb:admins": "100014937931401", // Replace with your Facebook admin ID
    // "fb:app_id": "your-facebook-app-id", // Replace with your Facebook app ID
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <head>
        {/* Additional Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ekila Solutions",
              description:
                "Công ty chuyên cung cấp giải pháp chuyển đổi số toàn diện cho Doanh nghiệp và Cơ quan nhà nước",
              url: "https://ekila.vn",
              logo: "https://res.cloudinary.com/deizfnbwc/image/upload/v1755929430/1._EKILA_Gradient_np0mgw.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84583838376",
                contactType: "customer service",
                availableLanguage: ["Vietnamese", "English"],
                areaServed: "VN",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "VN",
                addressLocality: "Ho Chi Minh City",
                addressRegion: "Ho Chi Minh",
                streetAddress: "Tran Xuan Soan",
              },
              sameAs: [
                "https://www.facebook.com/ekilasolutions",
                "https://zalo.me/2637985617420627751",
                "https://www.linkedin.com/company/ekila-solutions",
              ],
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              knowsAbout: [
                "Web Development",
                "Mobile App Development",
                "Zalo Mini App",
                "Digital Marketing",
                "UI/UX Design",
                "Digital Transformation",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development",
                      description: "Thiết kế và phát triển website chuyên nghiệp",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "Phát triển ứng dụng di động iOS và Android",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Zalo Mini App",
                      description: "Phát triển Zalo Mini App cho doanh nghiệp",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description: "Chiến lược marketing số và quảng cáo trực tuyến",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${openSans.variable} relative min-h-screen antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3HSXW3LWQ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HSXW3LWQ0');
          `}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
