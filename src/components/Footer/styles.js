import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: var(--space-medium) 0;
  max-width: 100%;
  text-align: center;
  background-color: var(--color-dark-blue);

  div {
    margin: 0 auto;
    width: 70%;

    p {
      margin-top: var(--space-small);
      color: var(--color-white);
    }
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: var(--space-mini);
`;
