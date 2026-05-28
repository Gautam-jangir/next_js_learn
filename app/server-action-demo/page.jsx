import { createUser } from "../actions";

export default function ServerActionDemo() {
  return (
    <div>
      <h1>Server Actions</h1>
      <form action={createUser}>
        <input 
          type="text" 
          name="name"
          placeholder="Enter name"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}