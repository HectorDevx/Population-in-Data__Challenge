import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import Hector from "../../assets/hector_reyes.jpg";
import { AboutContainer } from "./styles";

export function About() {
  return (
    <AboutContainer>
      <div className="AboutContainer--info">
        <Title
          title="Héctor Reyes"
          subtitle="Designer and Developer"
          align="left"
        />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button text="Star Project" link="#" />
      </div>
      <img src={Hector} alt="Héctor Reyes" />
    </AboutContainer>
  );
}
