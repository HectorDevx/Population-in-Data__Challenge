import styled from "styled-components";

export const HeroContainer = styled.section`
  padding-bottom: var(--space-large);
  max-width: 100%;
  background-color: var(--color-mint);

  div {
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      width: 45%;
    }

    img {
      width: 30%;
    }
  }
`;
