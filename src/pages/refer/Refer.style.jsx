import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;
export const Div2 = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  margin: 3rem 4rem;
  padding: 1rem;
  border-radius: 10px;
`;
export const BannerImage = styled.img`
  width: 100%;
`;
export const YieldDetail = styled.div`
  background: ${(props) => props.theme.colors.grey_background};
  padding: 1rem;
  text-align: center;
  margin: 1rem 0.5rem;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
  border-radius: 10px;
`;
export const ContentDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  display: flex;
  color: white;
  @media (max-width: 990px) {
    top: 0%;
    left: 10%;
  }
`;
export const ReferText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5em;
  padding: 1rem;
  margin: 1%;
  @media (max-width: 990px) {
    margin: 3rem 0.2rem;
    font-size: 22px;

  }
  @media (max-width: 500px) {
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    font-size: 20px;
  }
`;

export const ReferalLinkDiv = styled.div`
  background: ${(props) => props.theme.colors.grey_background};
  margin: 1rem;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  @media (max-width: 990px) {
    margin: 4rem 0rem;
    padding: 0.5rem 1rem;
  }
  @media (max-width: 500px) {
    margin: 1.5rem 1rem;
    padding: 0.1rem;
  }
`;

export const Link1 = styled.div`
  text-align: center;
  display: flex;
  background: white;
  color: black;
  padding: 1rem;
  margin: 1rem 0rem;
  @media (max-width: 991px) {
    margin: 0.5rem;
    padding: 0.1rem;
    font-size: 14px;
  }
  @media (max-width: 550px) {
    margin: 0.5rem 1rem;
    padding: 0rem;
    font-size: 11px;
  }
`;
export const LinkText1 = styled.div`
  margin-right: 1rem;
  @media (max-width: 500px) {
    margin: 0rem;
    padding: 0rem;
  }
`;
export const LinkText2 = styled.div`
  margin-left: 1rem;
  @media (max-width: 500px) {
    margin: 0rem;
    padding: 0rem;
    font-size: 10px;
    margin-left: 1.5rem;
  }
`;
export const PriceDiv2 = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  text-align: centre;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 990px) {
    margin: 0.5rem;
    padding: 0.3rem;
    font-size: 11px;
    padding: 0.5rem 1rem;
  }
`;

export const RulesDiv = styled.div`
  padding: 1rem 0rem;
  background: ${(props) => props.theme.colors.dark_blue};
  margin: 1rem 1rem;
`;
export const HeadRules = styled.div`
  color: orange;
  font-size: 20px;
  font-weight: 400;
`;
export const RulesText = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin: 1rem 0rem;
`;

export const StepNo = styled.div`
  margin: 1rem 0rem;
`;

export const Subtext = styled.div`
  font-size: 12px;
  margin: 1rem 0rem;
`;
