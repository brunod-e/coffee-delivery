import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34rem;

  padding: 5.875rem 13rem;

  background: url("src/assets/intro-bg.svg");
`;

export const IntroInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.875rem;

  width: 35.3rem;

  strong {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 4rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 2rem;
  }
`;

export const IntroGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.25rem 2.5rem;

  span {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    color: ${(props) => props.theme["base-text"]};
  }
`;
