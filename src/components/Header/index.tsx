import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffeeDelivery from "../../assets/logo.svg";
import {
  HeaderContainer,
  CartButton,
  InfosContainer,
  CityInfos,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt='' />
      <InfosContainer>
        <CityInfos>
          <MapPin size={20} weight='fill' />
          São José, SC
        </CityInfos>
        <CartButton type='button'>
          <ShoppingCart size={20} weight='fill' />
        </CartButton>
      </InfosContainer>
    </HeaderContainer>
  );
};
