import React, { useContext } from "react";
import { Card } from "../../../../components/Card";
import { CoffeesContext } from "../../../../context/CoffeesContext";
import { CoffeesListContainer, CoffeesGrid } from "./styles";

export const CoffeesList = () => {
  const { coffees } = useContext(CoffeesContext);

  return (
    <CoffeesListContainer>
      <section>Nossos cafés</section>
      <CoffeesGrid>
        {coffees.map(({ id, coffeeImg, types, title, description, price }) => {
          return (
            <React.Fragment key={id}>
              <Card
                id={id}
                coffeeImg={coffeeImg}
                types={types}
                title={title}
                description={description}
                price={price}
              />
            </React.Fragment>
          );
        })}
      </CoffeesGrid>
    </CoffeesListContainer>
  );
};
