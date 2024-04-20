import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";
export default function Home() {
  return (
    <main>
      <h1>Home world</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
