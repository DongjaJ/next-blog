import Link from "next/link";

export default function NavigationBar() {
  return (
    <header className="flex justify-between">
      <h1>
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
