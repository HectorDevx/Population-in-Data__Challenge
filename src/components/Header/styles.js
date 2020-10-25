import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  display: flex;
  background-color: var(--color-mint);

  nav {
    margin: 0 auto;
    padding: var(--space-small) 0;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      width: 50%;
      justify-content: space-around;
    }
  }

  @media (max-width: 600px) {
    nav {
      flex-direction: column;
      width: 90%;
    }

    img,
    div {
      width: 90%;
    }

    a {
      margin: 0 8px;
    }
  }
`;
