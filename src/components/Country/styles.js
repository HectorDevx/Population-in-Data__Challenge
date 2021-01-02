import styled from "styled-components";

export const CountryContainer = styled.div`
  margin: var(--space-medium) auto;
  width: 70%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
    flex-direction: column;
  }

  img {
    max-width: 10%;
  }

  .Country__image {
    margin: 0 auto;
    max-width: 50%;
  }

  .CountryContainer--info {
    padding: var(--space-medium);
    width: 50%;

    h5,
    h6 {
      color: var(--color-blue);
    }

    @media (max-width: 600px) {
      padding: var(--space-mini);
    }
  }
`;

export const IconGrid = styled.div`
  margin-bottom: var(--space-medium);
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  img {
    margin: 2px;
    max-width: 24px;
  }
`;
