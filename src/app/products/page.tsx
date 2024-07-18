"use client"
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const getRandomValue = (count: number) => {
  return Math.floor(Math.random() * count);
};

const Products: NextPage<Props> = ({}) => {
  // const random = getRandomValue(2);
  // if(random === 1){
  //   throw new Error("Error ini muncul dari root page products");
  // }

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
