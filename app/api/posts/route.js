import { prisma } from "../../../lib/prisma";

export async function POST(request) {
  const body = await request.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      userId: body.userId,
    },
  });

  return Response.json(post);
}

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
    },
  });

  return Response.json(posts);
}
