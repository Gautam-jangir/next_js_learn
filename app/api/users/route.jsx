import { prisma } from "../../../lib/prisma";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

// export async function GET() {
//   const data = await fs.readFile(filePath, "utf-8");
//   const users = JSON.parse(data);
//   return Response.json(users);
// }

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}

// export async function POST(request) {
//   const body = await request.json();

//   const data = await fs.readFile(filePath, "utf-8");

//   const users = JSON.parse(data);

//   const maxId =
//     users.length > 0 ? Math.max(...users.map((user) => user.id)) : 0;

//   const newUser = {
//     id: maxId + 1,
//     name: body.name,
//   };

//   users.push(newUser);

//   await fs.writeFile(filePath, JSON.stringify(users, null, 2));

//   return Response.json({
//     message: "User created",
//     data: newUser,
//   });
// }

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.create({ data: { name: body.name } });

  return Response.json(user);
}


// export async function PUT(request) {
//   const body = await request.json();

//   const data = await fs.readFile(filePath, "utf-8");

//   const users = JSON.parse(data);

//   const updateUsers = users.map((user) => {
//     if (user.id === body.id) {
//       return {
//         ...user,
//         name: body.name,
//       };
//     }
//     return user;
//   });

//   await fs.writeFile(filePath, JSON.stringify(updateUsers, null, 2));

//   return Response.json({ message: "User updated" });
// }


export async function PUT(request) {
  const body = await request.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: body.id
    },
    data: {
      name: body.name
    }
  })

  return Response.json(updatedUser);
}

// export async function DELETE(request) {
//   const body = await request.json();

//   const data = await fs.readFile(filePath, "utf-8");

//   const users = JSON.parse(data);

//   const fileredUsers = users.filter((user) => user.id !== body.id);

//   await fs.writeFile(filePath, JSON.stringify(fileredUsers, null, 2));
//   return Response.json({ message: "User deleted" });
// }


export async function DELETE(request) {
  const body = await request.json();

  const deletedUser = await prisma.user.delete({
    where: {
      id: body.id
    }
  })

  return Response.json(deletedUser);
}

