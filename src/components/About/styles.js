import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: 80px auto;
  width: 60%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
    flex-direction: column-reverse;
  }

  .AboutContainer--info {
    padding: var(--space-medium);
    width: 50%;
    p {
      color: var(--color-blue);
    }

    @media (max-width: 600px) {
      margin-top: var(--space-mini);
      padding: var(--space-nano);
      width: 90%;
    }
  }

  img {
    width: 40%;

    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;
