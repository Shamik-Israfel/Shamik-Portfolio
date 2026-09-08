import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": 'inline; filename="Shamik_Mondal_Resume.pdf"',
        },
      });
    }
    return NextResponse.redirect(new URL("/resume.pdf", request.url));
  } catch {
    return new NextResponse("Resume file not found", { status: 404 });
  }
}
