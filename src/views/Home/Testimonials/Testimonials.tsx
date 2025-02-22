import TitleSection from "@/components/common/TitleSection";
import TestimonialsContent from "./TestimonialsContent";

const Testimonials = () => (
  <div className="relative mb-20 flex w-full flex-col items-center justify-center space-y-4">
    <TitleSection
      title={"Testimonials"}
      subtitle={"What My Clients Say"}
      description={
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      }
    />
    <TestimonialsContent />
  </div>
);

export default Testimonials;
