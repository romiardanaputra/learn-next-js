import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const ArchivedNotification: NextPage<Props> = ({}) => {
  return (
    <div className="bg-yellow-600 p-4">
      <h1>Archived Notifications</h1>
      <Link href="/dashboard">Back to dashboard</Link>
    </div>
  );
};

export default ArchivedNotification;
