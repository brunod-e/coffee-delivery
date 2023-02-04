import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 5rem 13rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  margin-top: 2.5rem;
  gap: 2rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(#dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const SuccessInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  color: ${(props) => props.theme["base-text"]};

  div {
    display: flex;
    flex-direction: column;
  }
`;
