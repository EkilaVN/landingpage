import GradientBar from "@/components/common/GradientBar/GradientBar";
import BlogCategory from "@/views/Blog/BlogCategory/BlogCategory";
import TitlePage from "@/components/common/TitlePage";
import BlogList from "@/views/Blog/BlogList/BlogList";

const Blog = () => {
  return (
    <div className="mx-auto mt-16 flex h-auto w-full flex-col md:mt-20 lg:max-w-[1170px] xl:mt-32 2xl:max-w-[1420px]">
      <GradientBar />
      <TitlePage
        title="Chào mừng đến với Ekila blog"
        subtitle="Đội ngũ Ekila luôn nghiên cứu để mang công nghệ tiên tiến nhất đến với khách hàng."
      />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full px-4 xl:px-10">
          <BlogCategory />
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
