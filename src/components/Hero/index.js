import React from "react";
import logo from "../../assets/favicon.png";
import { HeroContainer } from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>
          Population <br />
          explained
          <br /> with rabbits
        </h1>
        <img src={logo} alt="Planet Image" />
      </div>
    </HeroContainer>
  );
}
