import { NextPage } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
  };
}

const NotFound: NextPage<Props> = ({ params }) => {
  // example custom 404 not found page 
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h2>Product {params.productId} Is Not Found</h2>
    </div>
  );
};

export default NotFound;
