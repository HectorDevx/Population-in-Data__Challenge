import React from "react";
import Logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
          <a href="#home"> Home </a>
          <a href="#countries"> Countries </a>
          <a href="#about"> About </a>
        </div>
      </nav>
    </HeaderContainer>
  );
}
