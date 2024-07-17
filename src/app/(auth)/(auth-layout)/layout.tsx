import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>Welcome to page login/register/forgot password</p>
      {children}
    </div>
  );
};

export default AuthLayout;
