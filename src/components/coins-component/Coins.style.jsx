import styled from "styled-components";

export const MainDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 2rem 0rem;
  margin: 3rem 4rem;
  text-align: center;
  border-radius: ${(props) => props.theme.border.radius_m};
  @media (max-width: 700px) {
    margin: 0rem 3rem;
  }
`;

export const CoinIcon = styled.img`
  padding: 2rem;
  background: ${(props) => props.theme.colors.grey_background};
  width: 55%;
  height: 80%;
  border-radius: ${(props) => props.theme.border.radius_m};
  @media (max-width: 1200px) {
    padding: 1rem;
    width: 45%;
  }
  @media (max-width: 700px) {
    padding: 0.2rem;
    width: 45%;
  }
`;
