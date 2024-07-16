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
    </div>
  );
};

export default ProductDetail;
