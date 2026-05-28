import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/about`}>About</Link>
          </li>
          <li>
            <Link href={`/contact`}>Contact</Link>
          </li>
          <li>
            <Link href={`/profile`}>Profile</Link>
          </li>
          <li>
            <Link href={`/settings`}>Settings</Link>
          </li>
          <li>
            <Link href={`/posts`}>Posts</Link>
          </li>
          <li>
            <Link href={`/add-user`}>Add User</Link>
          </li>
          <li>
            <Link href={`/users`}>Users</Link>
          </li>
          <li>
            <Link href={`/server-action-demo`}>Server Action Demo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
