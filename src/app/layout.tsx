import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
