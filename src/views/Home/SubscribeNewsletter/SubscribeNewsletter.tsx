"use client";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { Input } from "@/components/ui/input";
import RippleButton from "@/components/ui/RippleButton";
import { cn } from "@/lib/utils";

const SubscribeNewsletter = () => (
  <div className="relative mb-32 flex min-h-[300px] w-full items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat lg:p-20">
    <AnimatedGridPattern
      numSquares={50}
      maxOpacity={0.1}
      duration={1}
      repeatDelay={1}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      )}
    />
    <div className="flex w-full flex-col justify-between gap-y-10 lg:flex-row">
      <div className="flex flex-1 flex-col space-y-3 font-semibold text-textColor">
        <p className="text-xl">Subscribe Now</p>
        <p className="bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text font-sans text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600">
          Get My Newsletter
        </p>
        <p className="text-neutral-3=]00 text-base">
          Get latest news, updates, tips and tricks in your inbox
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-sm flex-col items-start gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="h-12 text-base font-medium text-textColor"
          />
          <RippleButton title="Send Now" customClass="h-12 text-base font-semibold rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

export default SubscribeNewsletter;
