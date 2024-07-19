import { NextPage } from "next";

interface Props {}

const DefaultUserAnalyticPage: NextPage<Props> = ({}) => {
  return (
    <div className="bg-red-800 p-4">
      <p>
        This is default page when page is rendered when using parallel route
        that have unmatched route
      </p>
      <h1>Default page for user analytics</h1>
    </div>
  );
};

export default DefaultUserAnalyticPage;
