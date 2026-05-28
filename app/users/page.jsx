import {prisma} from "../../lib/prisma"
import Link from "next/link";
import DeleteButton from "../../components/DeleteButton";

async function getUsers() {
  return prisma.user.findMany();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
          <DeleteButton id={user.id} />
        </div>
      ))}
    </div>
  );
}
