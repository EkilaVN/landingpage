import CommitInfo from "@/views/Home/CommitInfo/CommitInfo";
import HeaderHome from "@/views/Home/HeaderHome/HeaderHome";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <HeaderHome />
      <div className="relative flex w-full flex-col items-center justify-evenly px-5 md:px-7 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <CommitInfo />
      </div>
    </div>
  );
}
