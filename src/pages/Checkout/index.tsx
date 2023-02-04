import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PaymentMethods } from "./components/PaymentMethods";
import { AddressGrid } from "./components/AddressGrid";
import { CheckoutCoffeeInfos, Coffee } from "../../reducers/reducer";
import { CoffeesContext } from "../../context/CoffeesContext";
import { newCoffeeValidationSchema } from "./validationSchema";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import {
  CheckoutContainer,
  InfosWrapper,
  InfosContainer,
  InfosTitle,
  CartInfosContainer,
  OrderPrice,
  OrderButton,
} from "./styles";
import { SelectedCoffee } from "./components/SelectedCoffee";

export const Checkout = () => {
  const navigate = useNavigate();

  const {
    selectedCoffees,
    currency,
    formatCoffeePrice,
    changeCheckoutCoffeeInfos,
  } = useContext(CoffeesContext);

  const coffeeForm = useForm<CheckoutCoffeeInfos>({
    resolver: zodResolver(newCoffeeValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      method: "",
      hasItems: Boolean(selectedCoffees),
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = coffeeForm;

  const totalPrice = selectedCoffees.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity;
  }, 0);

  const handleOrderCoffee = (data: CheckoutCoffeeInfos) => {
    changeCheckoutCoffeeInfos(data);
    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit(handleOrderCoffee)}>
      <CheckoutContainer>
        <FormProvider {...coffeeForm}>
          <InfosWrapper>
            <h1>Complete seu pedido</h1>
            <InfosContainer iconColor='yellow-dark'>
              <InfosTitle>
                <MapPinLine size={20} weight='regular' />
                <div>
                  <h2>Endereço de entrega</h2>
                  <sub>Informe o endereço onde deseja receber seu pedido</sub>
                </div>
              </InfosTitle>
              <AddressGrid />
            </InfosContainer>
            <InfosContainer iconColor='purple'>
              <InfosTitle>
                <CurrencyDollar size={20} weight='regular' />
                <div>
                  <h2>Pagamento</h2>
                  <sub>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </sub>
                </div>
              </InfosTitle>
              <PaymentMethods />
            </InfosContainer>
          </InfosWrapper>
          <InfosWrapper>
            <h1>Cafés selecionados</h1>
            <CartInfosContainer>
              {selectedCoffees.map((coffee: Coffee) => (
                <SelectedCoffee key={coffee.id} {...coffee} />
              ))}
              <OrderPrice>
                <div>
                  <span>Total dos itens</span>
                  <span>{formatCoffeePrice(totalPrice, currency)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <h1>Total</h1>
                  <h1>{formatCoffeePrice(totalPrice + 3.5, currency)}</h1>
                </div>
              </OrderPrice>
              <OrderButton type='submit'>CONFIRMAR PEDIDO</OrderButton>
            </CartInfosContainer>
          </InfosWrapper>
        </FormProvider>
      </CheckoutContainer>
    </form>
  );
};
