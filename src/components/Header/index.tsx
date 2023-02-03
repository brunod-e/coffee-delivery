import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import logoCoffeeDelivery from "../../assets/logo.svg";
import { CoffeesContext } from "../../context/CoffeesContext";
import {
  HeaderContainer,
  CartButton,
  InfosContainer,
  CityInfos,
} from "./styles";

export const Header = () => {
  const { selectedCoffees } = useContext(CoffeesContext);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

  useEffect(() => {
    const cartItemsQuantity = selectedCoffees.length;
    setCartItemsQuantity(cartItemsQuantity);
  }, [selectedCoffees]);

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
          <span>{cartItemsQuantity}</span>
        </CartButton>
      </InfosContainer>
    </HeaderContainer>
  );
};
