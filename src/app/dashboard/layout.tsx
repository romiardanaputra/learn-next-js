import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}

const DashboardLayout: NextPage<Props> = ({
  children,
  notifications,
  users,
  login,
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
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
  ) : (
    login
  );
};

export default DashboardLayout;
