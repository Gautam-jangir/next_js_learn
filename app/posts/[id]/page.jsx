async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response.json();
}

export default async function Post({ params }) {
  const {id} = await params;
  const post = await getPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
