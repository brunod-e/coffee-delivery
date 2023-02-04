import { createContext, useEffect, useReducer } from "react";
import {
  addCoffeeToCartAction,
  changeCheckoutCoffeeInfosAction,
  changeQuantityFromCartAction,
  removeCoffeeFromCartAction,
} from "../reducers/actions";
import {
  CheckoutCoffeeInfos,
  Coffee,
  coffeesReducer,
} from "../reducers/reducer";
import { coffeesData } from "./data";

interface CoffeesContextData {
  coffees: Coffee[];
  checkoutCoffeeInfos: CheckoutCoffeeInfos;
  currency: string;
  selectedCoffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  changeQuantityFromCart: (coffeeId: string, quantity: number) => void;
  changeCheckoutCoffeeInfos: (infos: CheckoutCoffeeInfos) => void;
  formatCoffeePrice: (price: number, currency?: string) => string;
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
      currency: "",
      checkoutCoffeeInfos: {
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        method: "",
      },
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
  const { selectedCoffees, checkoutCoffeeInfos } = cartState;

  const coffees: Coffee[] = coffeesData;
  const currency: string = "BRL";

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeToCartAction(coffee));
  };

  const removeCoffeeFromCart = (coffeeId: string) => {
    dispatch(removeCoffeeFromCartAction(coffeeId));
  };

  const changeQuantityFromCart = (coffeeId: string, quantity: number) => {
    dispatch(changeQuantityFromCartAction(coffeeId, quantity));
  };

  const changeCheckoutCoffeeInfos = (infos: CheckoutCoffeeInfos) => {
    dispatch(changeCheckoutCoffeeInfosAction(infos));
  };

  const formatCoffeePrice = (price: number, currency?: string) => {
    const formatOption = currency
      ? {
          style: "currency",
          currency: currency,
        }
      : {
          style: "decimal",
          minimumFractionDigits: 2,
        };

    return new Intl.NumberFormat("pt-BR", formatOption).format(price);
  };

  useEffect(() => {
    const cartStateString = cartState ? JSON.stringify(cartState) : "";

    localStorage.setItem("@CoffeeDelivery:cart-1.0.0", cartStateString);
  }, [cartState]);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        currency,
        selectedCoffees,
        checkoutCoffeeInfos,
        addCoffeeToCart,
        removeCoffeeFromCart,
        changeQuantityFromCart,
        changeCheckoutCoffeeInfos,
        formatCoffeePrice,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
};
