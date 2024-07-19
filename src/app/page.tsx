import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="flex gap-4 px-4">
        <Link href="/blog">Blog</Link>
        <Link href="/products">Product</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
