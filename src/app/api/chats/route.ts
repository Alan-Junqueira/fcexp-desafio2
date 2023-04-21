import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (_request: NextRequest) => {
  const chats = await prisma.chat.findMany();
  return NextResponse.json(chats);
}
export const POST = async (request: NextRequest) => {
  const { message } = await request.json();
  const chat = await prisma.chat.create({
    data: {
      message,
    },
  });

  return NextResponse.json(chat);
}