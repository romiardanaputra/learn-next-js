import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Folder1Example: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>folder1 example of intercepting route</h1>
      <Link href="/folder1/folder2">Folder2</Link>
    </div>
  );
};

export default Folder1Example;
