import { HTTPError } from "ky";

import api from "@/services/kyInstance";

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  budget?: string;
}

// API response interface
export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Submit contact form to API
export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  try {
    const result = await api
      .post("contact-forms", {
        json: {
          data: data,
        },
      })
      .json<{ success: boolean; message: string; error?: string }>();

    return {
      success: true,
      message: result.message || "Thông tin đã được gửi thành công",
    };
  } catch (error) {
    console.log("Error submitting contact form:", error);
    // Handle ky HTTP errors
    if (error instanceof HTTPError) {
      try {
        const errorData = await error.response.json();
        console.log("Error response data:", errorData);

        // Handle different error response formats
        let errorMessage = "Có lỗi xảy ra khi gửi thông tin";

        if (typeof errorData === "string") {
          errorMessage = errorData;
        } else if (errorData && typeof errorData === "object") {
          // Handle various error object formats
          if (errorData.error) {
            errorMessage =
              typeof errorData.error === "string"
                ? errorData.error
                : errorData.error.message || errorMessage;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.details) {
            errorMessage = Array.isArray(errorData.details)
              ? errorData.details[0]?.message || errorMessage
              : errorData.details;
          }
        }

        return {
          success: false,
          message: "",
          error: errorMessage,
        };
      } catch (parseError) {
        console.log("Error parsing error response:", parseError);
        return {
          success: false,
          message: "",
          error: "Có lỗi xảy ra khi gửi thông tin",
        };
      }
    }

    // Handle other types of errors
    let errorMessage = "Có lỗi xảy ra khi gửi thông tin";

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else if (error && typeof error === "object") {
      // Handle error objects
      const errorObj = error as Record<string, unknown>;
      if (typeof errorObj.message === "string") {
        errorMessage = errorObj.message;
      } else if (errorObj.error) {
        errorMessage =
          typeof errorObj.error === "string"
            ? errorObj.error
            : errorObj.error &&
                typeof errorObj.error === "object" &&
                errorObj.error !== null &&
                "message" in errorObj.error &&
                typeof (errorObj.error as { message?: unknown }).message === "string"
              ? (errorObj.error as { message: string }).message
              : errorMessage;
      }
    }

    return {
      success: false,
      message: "",
      error: errorMessage,
    };
  }
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation utility (Vietnamese phone numbers)
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+84|84|0)[1-9][0-9]{8,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

// Form validation utility
export const validateContactForm = (data: ContactFormData): string | null => {
  if (!data.name.trim()) {
    return "Vui lòng nhập tên của bạn";
  }

  if (data.email && !validateEmail(data.email)) {
    return "Email không hợp lệ";
  }

  if (!data.phone.trim()) {
    return "Vui lòng nhập số điện thoại";
  }

  if (!validatePhone(data.phone)) {
    return "Số điện thoại không hợp lệ";
  }

  if (!data.message.trim()) {
    return "Vui lòng nhập mô tả dự án";
  }

  if (data.message.trim().length < 10) {
    return "Mô tả dự án phải có ít nhất 10 ký tự";
  }

  return null;
};
