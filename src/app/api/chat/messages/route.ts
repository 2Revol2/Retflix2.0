import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "asc" },
    take: 10,
  });

  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { text, authorId } = await req.json();

  const newMessage = await prisma.message.create({
    data: { text, authorId },
  });

  return NextResponse.json(newMessage, { status: 200 });
}
