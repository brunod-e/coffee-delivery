import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;

  gap: 1.25rem;

  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 19.375rem;

  padding: 0 1.5rem 1.25rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    margin-top: -2rem;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
  }

  p {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.13rem;
  }
`;

export const CoffeeBuyInfos = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  justify-content: space-between;

  sub {
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: baseline;
    font-size: 0.875rem;
    line-height: 1.13rem;

    gap: 0.25rem;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.95rem;
  }
`;

export const QuantitySelect = styled.div`
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
    background: none;
    border: none;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  background: ${(props) => props.theme["purple"]};
  color: ${(props) => props.theme["base-card"]};

  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple"]};
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    font-size: 0.675rem;
    font-weight: 700;
    line-height: 0.8125rem;

    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};
  }
`;
