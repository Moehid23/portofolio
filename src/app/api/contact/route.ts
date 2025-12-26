import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: result.error.flatten() },
        { status: 400 }
      );
    }

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would integrate with EmailJS, Nodemailer, or other email services
    // For now, we simulate a successful response
    
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log error to avoid unused variable warning
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
