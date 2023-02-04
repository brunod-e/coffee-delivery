import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface CheckoutCoffeeInfos {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  method: string;
  hasItems: boolean;
}

export interface Coffee {
  id: string;
  coffeeImg: React.ReactNode;
  types: string[];
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartState {
  selectedCoffees: Coffee[];
  checkoutCoffeeInfos: CheckoutCoffeeInfos;
}

export const coffeesReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.selectedCoffees.push(action.payload.newCoffee);
      });

    case ActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        const index = draft.selectedCoffees.findIndex(
          (coffee) => coffee.id === action.payload.coffeeId
        );
        if (index >= 0) {
          draft.selectedCoffees.splice(index, 1);
        }
      });
    }
    case ActionTypes.CHANGE_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.selectedCoffees.findIndex(
          (coffee) => coffee.id === action.payload.coffeeId
        );
        if (action.payload.quantity < 1) return;
        if (index >= 0) {
          draft.selectedCoffees[index].quantity = action.payload.quantity;
        }
      });
    }
    case ActionTypes.CHANGE_CHECKOUT_INFOS: {
      return produce(state, (draft) => {
        draft.checkoutCoffeeInfos = action.payload.infos;
      });
    }
    default:
      return state;
  }
};
