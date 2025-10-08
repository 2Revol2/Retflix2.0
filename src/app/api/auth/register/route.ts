import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    return NextResponse.json({ message: "Username already exists" }, { status: 409 });
  }

  const user = await prisma.user.create({ data: { username, password } });
  return NextResponse.json(user, { status: 201 });
}
