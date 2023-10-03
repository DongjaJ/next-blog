import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  title: string;
  summary: number;
  image: string;
  tag: string;
  createdAt: string;
};

export async function getPosts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getPost(id: string): Promise<Product | undefined> {
  const products = await getPosts();
  return products.find((item) => item.id === id);
}

export async function getTitle(id: string) {
  const post = await getPost(id);
  return post?.title;
}
