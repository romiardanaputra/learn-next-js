import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Login Form</h1>
      <form action="" className="flex flex-col gap-4 max-w-screen-sm mx-auto p-4">
        <input
          type="email"
          name="email"
          placeholder="romiardana@example.com"
          required
          className="p-2 rounded-sm"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="p-2 rounded-sm"

        />
        <button type="submit" className="p-4 bg-cyan-800">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
