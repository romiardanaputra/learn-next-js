import { NextPage } from "next";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetail: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>Product Detail{params.id}</h1>
    </div>
  );
};

export default ProductDetail;
