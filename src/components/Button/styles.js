import styled from "styled-components";

export const Btn = styled.button`
  margin: var(--space-small) auto 0 0;
  padding: var(--space-mini) var(--space-medium);
  border: none;
  border-radius: var(--space-nano);
  font-family: var(--font-secondary);
  font-size: 24px;
  color: var(--color-blue);
  background-color: var(--color-mint);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--color-mint);
    background-color: var(--color-blue);
  }
`;
