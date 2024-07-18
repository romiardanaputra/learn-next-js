"use client";
import { NextPage } from "next";

interface Props {
  error: Error;
  // revovering from errors
  reset: () => void;
}

const ErrorProductDetails: NextPage<Props> = ({ error, reset }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default ErrorProductDetails;
