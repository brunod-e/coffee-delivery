import { useFormContext } from "react-hook-form";
import { AddressInput, InputsGrid } from "./styles";

export const AddressGrid = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputsGrid>
      <AddressInput
        type='text'
        id='cep'
        placeholder='CEP'
        {...register("cep")}
        hasErrors={Boolean(errors.cep)}
      />
      <AddressInput
        type='text'
        id='rua'
        placeholder='Rua'
        {...register("rua")}
        hasErrors={Boolean(errors.rua)}
      />
      <AddressInput
        type='text'
        id='numero'
        placeholder='Numero'
        {...register("numero")}
        hasErrors={Boolean(errors.numero)}
      />
      <AddressInput
        type='text'
        id='complemento'
        placeholder='Complemento'
        {...register("complemento")}
        hasErrors={Boolean(errors.complemento)}
      />
      <AddressInput
        type='text'
        id='bairro'
        placeholder='Bairro'
        {...register("bairro")}
        hasErrors={Boolean(errors.bairro)}
      />
      <AddressInput
        type='text'
        id='cidade'
        placeholder='Cidade'
        {...register("cidade")}
        hasErrors={Boolean(errors.cidade)}
      />
      <AddressInput
        type='text'
        id='uf'
        placeholder='UF'
        {...register("uf")}
        hasErrors={Boolean(errors.uf)}
      />
    </InputsGrid>
  );
};
