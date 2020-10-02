import React from "react";
import Rabbit from "../../assets/icon.svg";
import { NumberContainer } from "./styles";

export function Number({ number }) {
  return (
    <NumberContainer>
      <img src={Rabbit} alt="Icon" />
      <h6>x {number}</h6>
    </NumberContainer>
  );
}
