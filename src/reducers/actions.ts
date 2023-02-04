import { CheckoutCoffeeInfos, Coffee } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  CHANGE_CHECKOUT_INFOS = "CHANGE_CHECKOUT_INFOS",
}

export const addCoffeeToCartAction = (newCoffee: Coffee) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { newCoffee },
});

export const removeCoffeeFromCartAction = (coffeeId: string) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: { coffeeId },
});

export const changeQuantityFromCartAction = (
  coffeeId: string,
  quantity: number
) => ({
  type: ActionTypes.CHANGE_QUANTITY,
  payload: { coffeeId, quantity },
});

export const changeCheckoutCoffeeInfosAction = (
  infos: CheckoutCoffeeInfos
) => ({ type: ActionTypes.CHANGE_CHECKOUT_INFOS, payload: { infos } });
