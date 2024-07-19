import { NextPage } from "next";

interface Props {}

const DashboardPage: NextPage<Props> = ({}) => {
  return (
    <div className="bg-cyan-800 p-4">
      <h1>This is dashboard page (root page of dashboard)</h1>
    </div>
  );
};

export default DashboardPage;
