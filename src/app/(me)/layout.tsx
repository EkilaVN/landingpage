import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center bg-[--color-background]">
      <ScrollToTopButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
