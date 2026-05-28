"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
