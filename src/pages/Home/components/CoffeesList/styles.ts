import styled from "styled-components";

export const CoffeesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 0 13rem 3rem;

  gap: 3rem;

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    font-size: 2rem;
    font-weight: 800;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeesGrid = styled.div`
  display: grid;
  padding: 0 13rem;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;
`;
