import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-bottom: 1.5rem;

  gap: 1.125rem;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  h1 {
    font-weight: 700;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const SelectedCoffeeInfos = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  margin-right: 1.875rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const SelectedCoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme["base-button"]};

  button {
    display: flex;
    align-items: center;

    cursor: pointer;

    color: ${(props) => props.theme["purple"]};
    border: none;
    background: none;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const SelectedCoffeeRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  padding: 0px 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
