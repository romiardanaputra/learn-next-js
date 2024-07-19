"use client";
import { NextPage } from "next";

interface Props {
  error: Error;
}

const DashboardError: NextPage<Props> = ({ error }) => {
  return (
    <div>
      <h1>{error.message}error in dashboard</h1>
    </div>
  );
};

export default DashboardError;
