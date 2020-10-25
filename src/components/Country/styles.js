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
    width: 40%;
  }

  .CountryContainer--info {
    padding: var(--space-medium);
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
