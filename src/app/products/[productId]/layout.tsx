import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const ProductDetailLayout: NextPage<Props> = ({ children }) => {
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
