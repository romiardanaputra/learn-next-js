import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Products: NextPage<Props> = ({}) => {
  const productId = 500;
  return (
    <div>
      <Link href="/">Go Home</Link>
      <h1>Products</h1>
      <div className="flex flex-col">
        <Link href="products/1">Product 1</Link>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </div>
    </div>
  );
};

export default Products;
