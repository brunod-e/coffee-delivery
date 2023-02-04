import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface InfosContainerProps {
  iconColor: keyof typeof defaultTheme;
}

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  padding: 0 13rem;

  gap: 2rem;

  margin-top: 2.5rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.462rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const InfosContainer = styled.div<InfosContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  svg {
    color: ${(props) => props.theme[props.iconColor]};
  }
`;

export const InfosTitle = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 0.75rem;

  margin-bottom: 2rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 1.3rem;
  }

  sub {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.13rem;
  }
`;

export const CartInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
  padding: 2.5rem;

  gap: 1.5rem;

  width: 30rem;

  background: ${(props) => props.theme["base-card"]};
`;

export const OrderPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.75rem;

  div {
    display: flex;

    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2.875rem;

  cursor: pointer;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow"]};

  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
  font-weight: 700;

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
