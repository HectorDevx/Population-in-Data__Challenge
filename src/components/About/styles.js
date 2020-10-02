import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: 80px auto;
  width: 70%;
  display: flex;
  align-items: center;

  .AboutContainer--info {
    padding: var(--space-medium);
    width: 50%;
    p {
      color: var(--color-blue);
    }
  }

  img {
    width: 40%;
  }
`;
