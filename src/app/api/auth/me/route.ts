import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; username: string };
    return NextResponse.json({ userId: decoded.userId, username: decoded.username });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
