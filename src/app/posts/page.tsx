import { getPosts } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

export default async function Posts() {
  const postList = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {postList.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <article>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={160}
                  height={90}
                />
                <p>{post.createdAt}</p>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
                <p>{post.tag}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
