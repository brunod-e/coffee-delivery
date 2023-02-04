import { IconWithBackground } from "../../components/IconWithBackground";
import SuccessImg from "../../assets/success.svg";
import { SuccessContainer, SuccessContent, SuccessInfo } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CoffeesContext } from "../../context/CoffeesContext";
import { useContext } from "react";

export const Success = () => {
  const { checkoutCoffeeInfos } = useContext(CoffeesContext);
  const { rua, numero, bairro, cidade, uf, method } = checkoutCoffeeInfos;

  return (
    <SuccessContainer>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <SuccessContent>
          <SuccessInfo>
            <IconWithBackground Icon={<MapPin />} bgColor={"purple"} />
            <div>
              <span>
                Entrega em
                <strong>
                  {rua}, {numero}
                </strong>
              </span>
              <span>
                {bairro} - {cidade}, {uf}
              </span>
            </div>
          </SuccessInfo>
          <SuccessInfo>
            <IconWithBackground Icon={<Timer />} bgColor={"yellow"} />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessInfo>
          <SuccessInfo>
            <IconWithBackground
              Icon={<CurrencyDollar />}
              bgColor={"yellow-dark"}
            />
            <div>
              <span>Pagamento na entrega</span>
              <strong>
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </strong>
            </div>
          </SuccessInfo>
        </SuccessContent>
      </div>
      <img src={SuccessImg} alt='' />
    </SuccessContainer>
  );
};
