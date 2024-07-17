import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Product</Link>
    </main>
  );
}
