import { NextPage } from "next";

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetail: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
      <p>Some details of product {params.productId}</p>
    </div>
  );
};

export default ProductDetail;
