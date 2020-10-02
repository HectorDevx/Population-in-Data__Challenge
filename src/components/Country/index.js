import React from "react";
import { Title } from "../Title";
import { Select } from "../Select";
import { Number } from "../Number";
import Hector from "../../assets/hector_reyes.jpg";
import Rabbit from "../../assets/icon.svg";
import { CountryContainer, IconGrid } from "./styles";

export function Country() {
  return (
    <section>
      <Title title="Countries" subtitle="World in Rabbits" align="center" />
      <Select />
      <CountryContainer>
        <img src={Hector} alt="" />
        <div className="CountryContainer--info">
          <h5>Country name</h5>
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
    </section>
  );
}
