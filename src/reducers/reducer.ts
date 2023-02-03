import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Coffee {
  id: string;
  coffeeImg: React.ReactNode;
  types: string[];
  title: string;
  description: string;
  price: string;
  quantity?: number;
}

interface CartState {
  selectedCoffees: Coffee[];
}

export const coffeesReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.selectedCoffees.push(action.payload.newCoffee);
      });

    case ActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        console.log({ draft, state });
      });
    }
    case ActionTypes.GET_ITEMS_FROM_CART: {
      return produce(state, (draft) => {
        console.log({ draft, state });
      });
    }
    default:
      return state;
  }
};
