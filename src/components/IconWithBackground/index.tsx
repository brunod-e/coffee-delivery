import { defaultTheme } from "../../styles/themes/default";
import { IconContainer } from "./styles";

interface IconWithBackgroundProps {
  Icon: React.ReactNode;
  bgColor: keyof typeof defaultTheme;
}

export const IconWithBackground = ({
  Icon,
  bgColor,
}: IconWithBackgroundProps) => {
  return <IconContainer bgColor={bgColor}>{Icon}</IconContainer>;
};
