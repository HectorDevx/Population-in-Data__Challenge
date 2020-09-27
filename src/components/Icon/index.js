import React from "react";
import { IconContainer } from "./styles";

export function Icon({ icon, link }) {
  return (
    <IconContainer href={link} target="_blank">
      <img src={icon} alt="Icon" />
    </IconContainer>
  );
}
