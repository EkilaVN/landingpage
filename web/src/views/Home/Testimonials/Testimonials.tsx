import TitleSection from "@/components/common/TitleSection";
import TestimonialsContent from "./TestimonialsContent";

const Testimonials = () => (
  <div className="relative mb-20 flex w-full flex-col items-center justify-center space-y-4">
    <TitleSection
      title={"Khách hàng là trọng tâm"}
      subtitle={"Đánh giá từ khách hàng"}
      description={"Khách hàng nói gì về Ekila Solutions trong hành trình hợp tác và phát triển"}
    />
    <TestimonialsContent />
  </div>
);

export default Testimonials;
