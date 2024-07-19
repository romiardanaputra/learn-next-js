import { NextPage } from "next";

interface Props {}

const DashboardLoading: NextPage<Props> = ({}) => {
  return (
    <div className="p-4 bg-purple-800">
      <h1>
        Loading Dashboard Content... (while the content is rendered the loading
        page is invoked)
      </h1>
    </div>
  );
};

export default DashboardLoading;
