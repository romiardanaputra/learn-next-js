"use client";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Auth Layout</h1>
      <input
        type="text"
        name="email"
        placeholder="jondoe@gmail.com"
        className="text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
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
