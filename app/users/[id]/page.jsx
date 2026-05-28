import EditUserForm from "../../../components/EditUserFrom";

async function getUser(id) {
  const response = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  const users = await response.json();

  return users.find((user) => user.id === Number(id));
}

export default async function UserPage({params}) {
  const {id} = await params;
  const user = await getUser(id)
  
  if(!user){
    return <h1>User not found</h1>
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <EditUserForm id={user.id} currentName={user.name} />
    </div>
  )
}
