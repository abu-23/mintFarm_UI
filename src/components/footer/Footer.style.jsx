import styled from "styled-components";

export const FooterContainer = styled.div`
  background: black;
  padding: 2rem 1rem;
  @media (max-width: 990px) {
    font-size: 12px;
    padding: 0.2rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;

export const Logo = styled.img`
  margin-left: 5%;
  @media (max-width: 990px) {
  }
`;

export const MediaIcons = styled.img`
  margin-right: 1rem;
  width: 6%;
  cursor:pointer;
  @media (max-width: 990px) {
    width: 10%;
  }
`;
export const Para = styled.p`
  margin: 1rem 0rem;
`;
export const Para2 = styled.p`
  margin-bottom: 1rem;
`;
export const Span = styled.span`
  color: ${(props) => props.theme.colors.green};
`;
export const Div2 = styled.div`
  margin-left: auto;
  width: 30%;
  margin-right: 9%;
`;

export const Div3 = styled.div`
  margin-right: auto;
  margin-left: 5%;
  width: 20%;
`;
