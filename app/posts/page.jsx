import Link from "next/link";

async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
