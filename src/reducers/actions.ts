import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  GET_ITEMS_FROM_CART = "GET_ITEMS_FROM_CART",
}

export const addCoffeeToCartAction = (newCoffee: Coffee) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { newCoffee },
});

export const removeCoffeeFromCartAction = (selectedCoffee: Coffee) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: { selectedCoffee },
});

export const getItemsFromCartAction = () => ({
  type: ActionTypes.GET_ITEMS_FROM_CART,
});
