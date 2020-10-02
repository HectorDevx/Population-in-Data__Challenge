import React from "react";
import { Btn } from "./styles";

export function Button({ text, link }) {
  return (
    <>
      <a href={link}>
        <Btn>{text}</Btn>
      </a>
    </>
  );
}
