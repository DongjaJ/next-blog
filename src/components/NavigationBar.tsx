import Link from "next/link";

export default function NavigationBar() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="font-bold text-2xl">
        <Link href="/">Dongja Blog</Link>
      </h1>
      <nav className="flex gap-2">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
