import React from "react";
import { FooterContainer, IconsContainer } from "./styles";
import { Icon } from "../Icon";
import Notion from "../../assets/notion.svg";
import Figma from "../../assets/figma.svg";
import Github from "../../assets/github.svg";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <IconsContainer>
          <Icon
            icon={Notion}
            link="https://www.notion.so/hectordevx/World-in-Rabbits-116c56dea821471c9508ad14cc6b0293"
          />
          <Icon
            icon={Figma}
            link="https://www.figma.com/file/NWI8Pz3rf3MGiXum35NwFy/World-Rabbits?node-id=1%3A2"
          />
          <Icon
            icon={Github}
            link="https://github.com/HectorDevx/World-in-Rabbits__Challenge"
          />
        </IconsContainer>
        <p>Made with love by HéctorDevx</p>
      </div>
    </FooterContainer>
  );
}
