import React from "react";
import { SelectContainer } from "./styles";

export function Select() {
  return (
    <SelectContainer>
      <input list="countries" name="country" placeholder="Select Country" />
      <datalist id="countries">
        <option value="PHP" />
        <option value=".NET" />
        <option value="PYTHON" />
        <option value="C" />
        <option value="ABAP" />
      </datalist>
    </SelectContainer>
  );
}
