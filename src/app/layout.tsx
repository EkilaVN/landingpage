import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import Analytics from "@/components/Analytics";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ekila Solutions - Cung cấp Giải pháp Số toàn diện cho Cá nhân và Doanh nghiệp",
  description: "Ekila Solutions - Cung cấp Giải pháp Số toàn diện cho Cá nhân và Doanh nghiệp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
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

        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
