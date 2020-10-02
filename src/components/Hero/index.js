import React from "react";
import Planet from "../../assets/earth.png";
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
        <img src={Planet} alt="Planet Image" />
      </div>
    </HeroContainer>
  );
}
