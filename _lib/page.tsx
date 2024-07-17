import { NextPage } from "next";

interface Props {}

const PrivateRoute: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>Private route could not be viewed in browser</h1>
    </div>
  );
};

export default PrivateRoute;
