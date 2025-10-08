import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }
  return NextResponse.json({ message: "Login successful" }, { status: 201 });
}
