import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethod, PaymentMethodsContainer } from "./styles";

export const PaymentMethods = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <PaymentMethodsContainer>
      <input
        type='radio'
        id='credito'
        value='credito'
        {...register("method")}
      />
      <PaymentMethod htmlFor='credito' hasErrors={Boolean(errors.method)}>
        <CreditCard size={20} weight='regular' />
        CARTÃO DE CRÉDITO
      </PaymentMethod>
      <input type='radio' id='debito' value='debito' {...register("method")} />
      <PaymentMethod htmlFor='debito' hasErrors={Boolean(errors.method)}>
        <Bank size={20} weight='regular' />
        CARTÃO DE DÉBITO
      </PaymentMethod>
      <input
        type='radio'
        id='dinheiro'
        value='dinheiro'
        {...register("method")}
      />
      <PaymentMethod htmlFor='dinheiro' hasErrors={Boolean(errors.method)}>
        <Money size={20} weight='regular' />
        DINHEIRO
      </PaymentMethod>
    </PaymentMethodsContainer>
  );
};
