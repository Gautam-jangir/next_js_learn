"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserForm({ id, currentName }) {
  const [name, setName] = useState(currentName);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name }),
    });
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}
