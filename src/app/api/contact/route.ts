import { NextRequest, NextResponse } from "next/server";

// Define the contact form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  budget?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin bắt buộc" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Email không hợp lệ" }, { status: 400 });
    }

    // Log the contact form data (you can replace this with your actual logic)
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      budget: data.budget || "Không nêu rõ",
      timestamp: new Date().toISOString(),
    });

    // Here you can add your business logic:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send to third-party services

    // Example: Save to database (uncomment when you have database setup)
    // await saveContactToDatabase(data);

    // Example: Send email notification (uncomment when you have email service)
    // await sendEmailNotification(data);

    // Return success response
    return NextResponse.json(
      {
        message: "Thông tin đã được gửi thành công",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json({ error: "Có lỗi xảy ra khi xử lý yêu cầu" }, { status: 500 });
  }
}

// Optional: Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({ message: "Contact API endpoint is working" }, { status: 200 });
}
