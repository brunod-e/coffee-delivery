import styled from "styled-components";

export const CoffeesListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 0 13rem;

  header {
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
