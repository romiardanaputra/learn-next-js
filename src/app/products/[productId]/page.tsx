import { NextPage } from "next";
import { Metadata } from "next";
interface Props {
  params: {
    productId: string;
  };
}

// exmple generate dynamic metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Manga ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetail: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
      <p>Some details of product {params.productId}</p>
    </div>
  );
};

export default ProductDetail;
