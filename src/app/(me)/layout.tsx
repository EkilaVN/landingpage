import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import LoadingBarWrapper from "@/components/common/LoadingBar/LoadingBarWrapper";
import RouteLoadingHandler from "@/components/common/LoadingBar/RouteLoadingHandler";
import Analytics from "@/components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden bg-[--color-background]">
      <ScrollToTopButton />
      <Header />
      <LoadingBarWrapper>
        <RouteLoadingHandler />
        {children}
      </LoadingBarWrapper>
      <Analytics />
      <Footer />
    </div>
  );
}
