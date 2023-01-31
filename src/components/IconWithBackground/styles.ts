import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface IconContainerProps {
  bgColor: keyof typeof defaultTheme;
}

export const IconContainer = styled.i<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  border-radius: 100%;

  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme[props.bgColor]};
`;
