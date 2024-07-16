import { NextPage } from "next";

interface Props {}

const Products: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>Products</h1>
      <div>product 1</div>
      <div>product 2</div>
      <div>product 3</div>
    </div>
  );
};

export default Products;
