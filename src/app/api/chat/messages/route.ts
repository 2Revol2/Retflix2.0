import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "asc" },
    take: 10,
    include: {
      author: {
        select: {
          username: true,
          createdAt: true,
        },
      },
    },
  });

  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { text, authorId } = await req.json();

  const newMessage = await prisma.message.create({
    data: { text, authorId },
  });

  const count = await prisma.message.count();

  if (count > 100) {
    const oldestMessage = await prisma.message.findFirst({
      orderBy: { createdAt: "asc" },
    });

    if (oldestMessage) {
      await prisma.message.delete({
        where: { id: oldestMessage.id },
      });
    }
  }

  return NextResponse.json(newMessage, { status: 200 });
}
