import React from "react";

export function Button({ value, link }) {
  return (
    <>
      <a href={link}>
        <button>{value}</button>
      </a>
    </>
  );
}
