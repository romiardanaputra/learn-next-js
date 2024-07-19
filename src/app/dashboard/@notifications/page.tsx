import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Notification: NextPage<Props> = ({}) => {
  return (
    <div className="p-4 bg-yellow-500">
      <h1>Notification parallel route</h1>
      {/* this route will cause error because @users now is unrouted */}
      <Link href="/dashboard/archived">archived</Link>
    </div>
  );
};

export default Notification;
