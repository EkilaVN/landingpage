import notFoundImage from "@/assets/images/not-found-page.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/layout";

const NotFound = () => {
  return (
    <Layout>
      <main className="flex min-h-screen items-center">
        <div className="max-w-small mx-auto w-[80%]">
          <h1 className="mb-2 text-6xl font-bold leading-normal md:text-8xl">Oops!</h1>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="text-xl font-medium leading-normal md:text-3xl">
                We can&apos;t seem to find the page <br /> you&apos;re looking for.
              </p>
              <p className="mt-2 text-base font-medium text-red-600 md:text-xl">Error code: 404</p>
              <Link href="/" passHref>
                <Button className="mt-4">Got to home</Button>
              </Link>
            </div>
            <Image src={notFoundImage} alt="Not found page" className="block w-full md:w-1/2" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NotFound;
