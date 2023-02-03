import { createContext, useEffect, useReducer } from "react";
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
} from "../reducers/actions";
import { Coffee, coffeesReducer } from "../reducers/reducer";
import { coffeesData } from "./data";

interface CoffeesContextData {
  coffees: Coffee[];
  selectedCoffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffee: Coffee) => void;
}

interface CoffeesContextProviderProps {
  children: React.ReactNode;
}

export const CoffeesContext = createContext({} as CoffeesContextData);

export const CoffeesContextProvider = ({
  children,
}: CoffeesContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    coffeesReducer,
    {
      selectedCoffees: [],
    },
    (state) => {
      const storedCartState = localStorage.getItem(
        "@CoffeeDelivery:cart-1.0.0"
      );

      if (storedCartState) {
        return JSON.parse(storedCartState);
      }

      return state;
    }
  );
  const { selectedCoffees } = cartState;

  const coffees: Coffee[] = coffeesData;

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeToCartAction(coffee));
  };

  const removeCoffeeFromCart = (coffee: Coffee) => {
    dispatch(removeCoffeeFromCartAction(coffee));
  };

  useEffect(() => {
    const cartStateString = cartState ? JSON.stringify(cartState) : "";
    console.log(cartStateString);

    localStorage.setItem("@CoffeeDelivery:cart-1.0.0", cartStateString);
  }, [cartState]);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        selectedCoffees,
        addCoffeeToCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
};
