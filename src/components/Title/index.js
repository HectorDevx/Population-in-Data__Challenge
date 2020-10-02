import React from "react";
import { TitleContainer } from "./styles";

export function Title({ subtitle, title, align }) {
  return (
    <TitleContainer>
      <div className={align}>
        <p>{subtitle}</p>
        <h3>{title}</h3>
      </div>
    </TitleContainer>
  );
}
