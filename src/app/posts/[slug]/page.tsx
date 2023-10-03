import { getPost, getTitle } from "@/service/post";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const title = await getTitle(slug);
  return {
    title: `제품의 이름: ${title ?? ""}`,
  };
}

export default async function PostDetail({ params: { slug } }: Props) {
  const post = await getPost(slug);
  if (!post) {
    redirect("/posts");
  }

  return (
    <section className="flex-grow">
      <Image src={post.image} alt={post.title} width={300} height={300} />
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <p>{post.tag}</p>
    </section>
  );
}
