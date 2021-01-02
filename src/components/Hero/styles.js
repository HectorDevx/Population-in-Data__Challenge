import styled from "styled-components";

export const HeroContainer = styled.section`
  padding-bottom: var(--space-large);
  max-width: 100%;
  background-color: var(--color-mint);

  @media (max-width: 600px) {
    padding-bottom: var(--space-medium);
  }

  div {
    margin: 0 auto;
    padding-top: var(--space-medium);
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      width: 50%;
    }

    img {
      width: 30%;
    }

    @media (max-width: 600px) {
      padding-top: var(--space-small);
      width: 90%;
      flex-direction: column;

      h1 {
        width: 90%;
      }

      img {
        width: 70%;
      }
    }
  }
`;
