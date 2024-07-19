import { NextPage } from "next";

interface Props {}

const Notification: NextPage<Props> = ({}) => {
  return (
    <div className="p-4 bg-yellow-500">
      <h1>Notification parallel route</h1>
    </div>
  );
};

export default Notification;
