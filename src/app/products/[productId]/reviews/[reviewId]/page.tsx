"use client";
import { NextPage } from "next";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

const getRandomValue = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetail: NextPage<Props> = ({ params }) => {
  const random = getRandomValue(2);
  if (random === 1) {
    throw new Error("Oops review tidak ditemukan!");
  }
  return (
    <div>
      <h1>
        Product {params.productId} review {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
