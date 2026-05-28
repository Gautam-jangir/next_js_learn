import LogoutButton from "../../components/LogoutButton";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  if(!session) {
    return <h1>Not authenticated</h1>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome {session.user.name}
      </p>
      <LogoutButton />
    </div>
  )
}