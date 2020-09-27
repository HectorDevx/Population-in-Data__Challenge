import styled from "styled-components";

export const IconContainer = styled.a`
  margin: var(--space-mini) var(--space-small);
  img {
    width: auto;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
