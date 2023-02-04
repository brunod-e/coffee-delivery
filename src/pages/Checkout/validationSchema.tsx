import * as zod from "zod";

export const newCoffeeValidationSchema = zod.object({
  cep: zod.string().min(1, { message: "CEP é necessário" }),
  rua: zod.string().min(1, { message: "Rua é necessário" }),
  numero: zod.string().min(1, { message: "Número é necessário" }),
  complemento: zod.string().min(1, { message: "Complemento é necessário" }),
  bairro: zod.string().min(1, { message: "Bairro é necessário" }),
  cidade: zod.string().min(1, { message: "Cidade é necessário" }),
  uf: zod.string().min(1, { message: "UF é necessário" }),
  method: zod.string().min(1, { message: "Método de pagamento é necessário" }),
  hasItems: zod.boolean(),
});
