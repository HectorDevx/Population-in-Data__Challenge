import React from "react";
import { SelectContainer } from "./styles";

export function Select() {
  return (
    <SelectContainer>
      <input list="countries" name="country" placeholder="Select Country" />
      <datalist id="countries">
        <option value="México" />
        <option value="Canada" />
        <option value="España" />
        <option value="China" />
        <option value="Japón" />
      </datalist>
    </SelectContainer>
  );
}
