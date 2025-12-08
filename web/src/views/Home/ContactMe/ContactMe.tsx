"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import ContactUs from "@/assets/images/Contact_us.webp";
import Phone from "@/assets/svgs/phone.svg";
import Mail from "@/assets/svgs/mail.svg";
import ContactMeDecor from "./ContactMeDecor";
import TitleSection from "@/components/common/TitleSection";
import RippleButton from "@/components/ui/RippleButton";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import {
  submitContactForm,
  validateContactForm,
  type ContactFormData,
} from "@/services/contactService";

const ContactMe = () => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  });

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate form
    const validationError = validateContactForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        // Success
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          budget: "",
        });

        // Auto hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const errorMsg = result.error || "Có lỗi xảy ra khi gửi thông tin";
        setError(typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg));
      }
    } catch (err) {
      console.log("Catch error:", err);
      let errorMessage = "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.";

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      } else if (err && typeof err === "object") {
        // Handle error objects that might be passed directly
        const errorObj = err as Record<string, unknown>;
        if (typeof errorObj.message === "string") {
          errorMessage = errorObj.message;
        } else {
          errorMessage = JSON.stringify(err);
        }
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative mb-20 flex w-[100vw] justify-center">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-[100%] skew-y-12"
        )}
      />
      <ContactMeDecor />
      <div className="relative flex w-full flex-col px-5 md:px-7 lg:max-w-[1170px] lg:px-10 2xl:max-w-[1420px]">
        <div className="z-10 my-20 flex w-full flex-col items-center">
          <TitleSection
            title={"Nếu bạn có ý tưởng"}
            subtitle={"Ekila luôn lắng nghe nhu cầu của bạn"}
            description={
              "Hãy để lại thông tin, Ekila sẽ liên hệ với bạn ngay. Hoặc gọi điện trực tiếp cho chúng tôi để được tư vấn giải pháp Tiết kiệm - Sáng tạo - Hiệu quả."
            }
          />
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
            <div className="flex flex-1 flex-col space-y-4 py-10 lg:p-4 lg:py-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="rounded-md border border-green-200 bg-green-50 p-3">
                    <p className="text-sm text-green-600">
                      Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn sớm nhất.
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tên của bạn (*)"
                    className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="SĐT (*)"
                    className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Bạn đang muốn xây dựng Website, Ứng dụng mobile, Zalo Mini App hay tìm kiếm một chiến dịch Marketing cho doanh nghiệp... Hãy để lại mô tả cơ bản, chúng tôi sẽ giúp bạn hiện thực chúng! (*)"
                  className="h-36 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40 md:h-32"
                  required
                />
                <Input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Ngân sách mong đợi của bạn"
                  className="h-12 text-base font-medium text-textColor focus:border-textMain dark:placeholder-orange-100/40"
                />
                <div className="pt-4" onClick={handleSubmit}>
                  <RippleButton
                    type="submit"
                    title={isLoading ? "Đang gửi..." : "Gửi ngay"}
                    customClass="h-12 text-base font-semibold rounded-md"
                    disabled={isLoading}
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4">
              <Image src={ContactUs} alt="ContactUs" className="w-[80%]" />
              <div className="flex w-[80%] flex-col gap-4 text-base">
                <div className="flex gap-2">
                  {/* <Image
                    src={Map}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  /> */}
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">
                      Hoạt động từ 9:00 sáng đến 22:00 tối, từ Thứ Hai đến Thứ Bảy
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={Phone}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">+84 583 8383 76</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={Mail}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-textColor">info@ekila.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
