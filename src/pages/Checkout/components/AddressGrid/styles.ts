import styled from "styled-components";

interface AddressInputProps {
  hasErrors: boolean;
}

export const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 3.75rem);
  grid-gap: 1rem;

  > input:nth-child(1) {
    grid-column: 1 / span 3;
  }

  > input:nth-child(2) {
    grid-column: 1 / span 9;
  }

  > input:nth-child(3) {
    grid-column: 1 / span 3;
  }

  > input:nth-child(4) {
    grid-column: 4 / span 6;
  }

  > input:nth-child(5) {
    grid-column: 1 / span 3;
  }

  > input:nth-child(6) {
    grid-column: 4 / span 5;
  }
`;

export const AddressInput = styled.input<AddressInputProps>`
  display: flex;
  align-items: center;

  padding: 0.75rem;

  font-size: 0.875rem;
  line-height: 1.1375rem;

  color: ${(props) => props.theme["base-label"]};
  border: 1px solid
    ${(props) => props.theme[props.hasErrors ? "red" : "base-button"]};
  background: ${(props) => props.theme["base-input"]};

  border-radius: 4px;
`;
