import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introCoffee from "../../assets/intro-coffee.svg";
import { IconWithBackground } from "../../components/IconWithBackground";
import { CoffeesList } from "./components/CoffeesList";
import {
  HomeContainer,
  IntroContainer,
  IntroInfos,
  IntroGridContainer,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroInfos>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IntroGridContainer>
            <span>
              <IconWithBackground
                Icon={<ShoppingCart />}
                bgColor={"yellow-dark"}
              />
              Compra simples e segura
            </span>
            <span>
              <IconWithBackground Icon={<Package />} bgColor={"base-text"} />
              Embalagem mantém o café intacto
            </span>
            <span>
              <IconWithBackground Icon={<Timer />} bgColor={"yellow"} />
              Entrega rápida e rastreada
            </span>
            <span>
              <IconWithBackground Icon={<Coffee />} bgColor={"purple"} />O café
              chega fresquinho até você
            </span>
          </IntroGridContainer>
        </IntroInfos>
        <img src={introCoffee} alt='' />
      </IntroContainer>
      <CoffeesList />
    </HomeContainer>
  );
};
