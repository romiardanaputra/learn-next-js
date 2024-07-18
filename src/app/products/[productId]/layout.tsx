"use client";
import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const getRandomValue = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailLayout: NextPage<Props> = ({ children }) => {
  const random = getRandomValue(2);
  if (random === 1) {
    throw new Error("Oops loading product error!");
  }
  return (
    <div>
      <h2>product detail layout</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        iure, maiores qui animi veritatis, perferendis assumenda consectetur
        doloremque sequi ipsa, libero quis labore corporis dolores minima beatae
        atque eum maxime!
      </p>
      <p>for example this one is carousel</p>
      {children}
    </div>
  );
};

export default ProductDetailLayout;
