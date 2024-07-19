import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const DashboardTemplate: NextPage<Props> = ({ children }) => {
  return (
    <div className="bg-gray-400 p-4">
      {/* this will remounted foe each slot availabels */}
      <h1>This is dashboard template</h1>
      {children}
    </div>
  );
};

export default DashboardTemplate;
