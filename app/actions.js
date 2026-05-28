"use server";

import { prisma } from "../lib/prisma";

import { revalidatePath } from "next/cache";

export async function createUser(formData) {
  const name = formData.get("name");

  await prisma.user.create({
    data: {
      name,
    },
  });

  revalidatePath("/users");
}
