import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import { Number } from "../Number";
import Hector from "../../assets/hector_reyes.jpg";
import { AboutContainer } from "../About/styles";

export function Intro() {
  return (
    <AboutContainer>
      <div className="AboutContainer--info">
        <Title title="What is this?" subtitle="World in Rabbits" align="left" />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Number number="10,000" />
        <Button text="View countries" link="#" />
      </div>
      <img src={Hector} alt="Héctor Reyes" />
    </AboutContainer>
  );
}
