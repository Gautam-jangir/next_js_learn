"use client"

import { useState } from "react"

export default function UploadPage() {
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    const file = e.target.file.files[0];

    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    setMessage(data.message);
  }

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file"/>
        <button type="submit">Upload</button>
      </form>

      <p>{message}</p>
    </div>
  )
}