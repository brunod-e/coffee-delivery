import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 13rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CityInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};
`;
