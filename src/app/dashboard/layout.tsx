import { NextPage } from "next";
import React from "react";
import DashboardTemplate from "./template";

interface Props {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}

const DashboardLayout: NextPage<Props> = ({
  children,
  notifications,
  users,
}) => {
  return (
    <>
      {/* <DashboardTemplate>
        <div>
          <h1>The top hierearchy (Dashboard Layout)</h1>
          {children}
          <div>{notifications}</div>
          <div>{users}</div>
        </div>
      </DashboardTemplate> */}

      <div className="bg-pink-800 p-4">
        <h1>The top hierearchy (Dashboard Layout)</h1>
        {children}
        <div>{notifications}</div>
        <div>{users}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
