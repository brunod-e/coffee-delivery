import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 13rem;
`;

export const CartButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.6rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  transition: 0.5s;

  span {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 100%;
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};

    font-size: 0.75rem;
    font-weight: 700;

    margin-left: 1.2rem;
    margin-top: -2.2rem;
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
