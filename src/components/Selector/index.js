import React from "react";
import { Title } from "../Title";
import { Select } from "../Select";
import { SelectorContainer } from "./styles";

export function Selector() {
  return (
    <SelectorContainer>
      <Title title="Countries" subtitle="World in Rabbits" align="center" />
      <Select />
    </SelectorContainer>
  );
}
