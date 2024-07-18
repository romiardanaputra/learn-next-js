"use client";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const AuthTemplateField: NextPage<Props> = ({}) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>
        Example of template js usage(this shared template will remounted the
        page even swithced to other page)
      </h1>
      <input
        type="text"
        name="email"
        placeholder="jondoe@gmail.com"
        className="text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default AuthTemplateField;
