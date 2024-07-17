"use client";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const navLinks = [
  { linkName: "register", href: "/register" },
  { linkName: "login", href: "/login" },
  { linkName: "forgot password", href: "/forgot-password" },
];

const AuthLayout: NextPage<Props> = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>Welcome to page login/register/forgot password</p>
      {navLinks.map((link, index) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            key={index}
            href={link.href}
            className={isActive ? "text-yellow-400" : ""}
          >
            {link.linkName}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
