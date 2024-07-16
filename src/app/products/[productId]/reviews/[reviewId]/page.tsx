import { NextPage } from "next";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetail: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>
        Product {params.productId} review {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
