import { NextPage } from "next";

interface Props {
  modal: React.ReactNode;
  children: React.ReactNode;
}

const PhotoFeedLayout: NextPage<Props> = ({ modal, children }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default PhotoFeedLayout;
