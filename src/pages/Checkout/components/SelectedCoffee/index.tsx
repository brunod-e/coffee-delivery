import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../../../context/CoffeesContext";
import { Coffee } from "../../../../reducers/reducer";
import {
  SelectedCoffeeContainer,
  SelectedCoffeeInfos,
  SelectedCoffeeQuantity,
  SelectedCoffeeRemoveButton,
} from "./styles";

export const SelectedCoffee = (data: Coffee) => {
  const { id, coffeeImg, title, quantity, price } = data;
  const {
    currency,
    formatCoffeePrice,
    removeCoffeeFromCart,
    changeQuantityFromCart,
  } = useContext(CoffeesContext);
  const totalSelectedCoffee = (price: number, quantity: number) => {
    return price * quantity;
  };

  const handleRemoveCart = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    removeCoffeeFromCart(id);
  };

  const handleIncreaseQuantity = (
    event: React.FormEvent,
    id: string,
    quantity: number
  ) => {
    event.preventDefault();

    changeQuantityFromCart(id, quantity + 1);
  };

  const handleDecreaseQuantity = (
    event: React.FormEvent,
    id: string,
    quantity: number
  ) => {
    event.preventDefault();

    changeQuantityFromCart(id, quantity - 1);
  };
  return (
    <SelectedCoffeeContainer key={id}>
      <img src={`${coffeeImg}`} alt='' />
      <SelectedCoffeeInfos>
        <span>{title}</span>
        <div>
          <SelectedCoffeeQuantity>
            <button
              type='button'
              onClick={(event) => handleDecreaseQuantity(event, id, quantity)}
            >
              <Minus size={16} weight='fill' />
            </button>
            <span>{quantity}</span>
            <button
              type='button'
              onClick={(event) => handleIncreaseQuantity(event, id, quantity)}
            >
              <Plus size={16} weight='fill' />
            </button>
          </SelectedCoffeeQuantity>
          <SelectedCoffeeRemoveButton
            type='button'
            onClick={(event) => handleRemoveCart(event, id)}
          >
            <Trash size={16} weight='regular' />
            REMOVER
          </SelectedCoffeeRemoveButton>
        </div>
      </SelectedCoffeeInfos>
      <h1>
        {formatCoffeePrice(totalSelectedCoffee(price, quantity), currency)}
      </h1>
    </SelectedCoffeeContainer>
  );
};
