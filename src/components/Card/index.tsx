import { Minus, Plus, ShoppingCart } from "phosphor-react";
import React, { useContext } from "react";
import { useState } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";
import { Coffee } from "../../reducers/reducer";
import {
  CardContainer,
  CartButton,
  CoffeeBuyInfos,
  QuantitySelect,
  TypesContainer,
} from "./styles";

export const Card = ({
  id,
  coffeeImg,
  types,
  title,
  description,
  price,
}: Coffee) => {
  const { addCoffeeToCart, formatCoffeePrice } = useContext(CoffeesContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const newCartItem: Coffee = {
      id,
      coffeeImg,
      types,
      title,
      description,
      price,
      quantity,
    };

    addCoffeeToCart(newCartItem);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <CardContainer>
      <img src={`${coffeeImg}`} alt={title} />

      <TypesContainer>
        {types.map((type: string) => (
          <React.Fragment key={type}>
            <h3>{type.toUpperCase()}</h3>
          </React.Fragment>
        ))}
      </TypesContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <CoffeeBuyInfos>
        <sub>
          R$<h1>{formatCoffeePrice(price)}</h1>
        </sub>
        <QuantitySelect>
          <button onClick={handleDecreaseQuantity}>
            <Minus size={16} weight='fill' />
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>
            <Plus size={16} weight='fill' />
          </button>
        </QuantitySelect>

        <CartButton type='button' onClick={handleAddToCart}>
          <ShoppingCart size={20} weight='fill' />
        </CartButton>
      </CoffeeBuyInfos>
    </CardContainer>
  );
};
