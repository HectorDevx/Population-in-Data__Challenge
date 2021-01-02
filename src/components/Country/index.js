import React from "react";
import { Number } from "../Number";
import { Selector } from "../Selector";
import Rabbit from "../../assets/icon.svg";
import { CountryContainer, IconGrid } from "./styles";
import China from "./../../assets/china.png";

export function Country() {
  return (
    <>
      <Selector />
      <CountryContainer>
        <img className="Country__image" src={China} alt="Country" />
        <div className="CountryContainer--info">
          <h5>China</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <Number number="10,000" />
          <IconGrid>
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
            <img src={Rabbit} alt="Icon" />
          </IconGrid>
          <h6>
            <b>Total:</b> 1,000,000
          </h6>
        </div>
      </CountryContainer>
    </>
  );
}
