import Link from "next/link";
import DeleteButton from "../../components/DeleteButton";

async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users", {
    next: {
      revalidate: 10
    }
  });
  const text = await response.text();
  console.log(text)
  return JSON.parse(text)
  // return response.json();
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
