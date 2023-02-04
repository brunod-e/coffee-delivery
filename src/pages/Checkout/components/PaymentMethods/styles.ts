import styled from "styled-components";

interface MethodProps {
  hasErrors: boolean;
}

export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  input[type="radio"] {
    display: none;
  }

  input:checked + label {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }

  input:hover + label {
    background: ${(props) => props.theme["base-hover"]};
    border: none;
  }
`;

export const PaymentMethod = styled.label<MethodProps>`
  display: flex;
  align-items: center;

  padding: 1rem;

  gap: 0.75rem;

  width: 100%;
  height: 3.18rem;

  cursor: pointer;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  border: 1px solid
    ${(props) => props.theme[props.hasErrors ? "red" : "base-button"]};

  color: ${(props) => props.theme["base-text"]};

  font-size: 0.75rem;
`;
