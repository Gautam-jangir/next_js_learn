import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  const data = await request.formData();

  const file = data.get("file");

  if (!file) {
    return Responze.json({ error: "No file uploaded" });
  }

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const uploadPath = path.join(process.cwd(), "public/uploads", file.name);

  await fs.writeFile(uploadPath, buffer)

  return Response.json({
    message: "File uploaded",
    filename: file.name
  });
}
