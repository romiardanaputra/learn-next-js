import { NextPage } from "next";

interface Props {}

const DefaultDashboardPage: NextPage<Props> = ({}) => {
  return (
    <div className="bg-cyan-800 p-4">
      <h1>
        This is default page when page is rendered when using parallel route
        that have unmatched route
      </h1>
    </div>
  );
};

export default DefaultDashboardPage;
