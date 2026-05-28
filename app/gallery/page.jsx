import Image from "next/image";

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>

      <Image src="/uploads/image_2.jpg" width={400} height={300} alt="Cat" />
    </div>
  );
}
