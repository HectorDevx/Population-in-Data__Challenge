import React from "react";
import Rabbit from "../../assets/icon.svg";
import { NumberContainer } from "./styles";

export function Number() {
  return (
    <NumberContainer>
      <img src={Rabbit} alt="Icon" />
      <h6>x 10,000</h6>
    </NumberContainer>
  );
}
