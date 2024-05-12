import styled from "styled-components";

export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 1rem;
  margin: 3rem 4rem;
  border-radius: 10px;
  @media (max-width: 1000px) {
    padding: 0.5rem;
  }
`;

export const Heading = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 0.5rem 0rem;
`;

export const FarmNowInput = styled.input`
  border: none;
  background: #302e37;
  color: #d9d9d9cc;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  width: 55%;
  &::placeholder {
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export const InputDiv = styled.div`
  margin-left: 10rem;
  @media (max-width: 900px) {
    margin-left: 5rem;
    font-size: 10px;
  }
`;
export const Div2 = styled.div`
  text-align: center;
  margin: 1rem 0rem;
`;

export const HeadingDesc = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  margin: 1rem 0rem;
`;
export const BalanceDiv = styled.div`
  border: none;
  background: #302e37;
  color: #d9d9d9cc;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  width: 55%;
  text-align: left;
`;
export const BalanceText = styled.div`
  font-size: 12px;
  text-align: left;
  margin-left: 1rem;
  @media (max-width: 900px) {
    font-size: 10px;
    width: 50%;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const Span = styled.span`
  float: right;
  padding: 0px 2px;
  font-size: 13px;
  color: #33d49d;
  @media (max-width: 900px) {
    font-size: 9px;
  }
`;
export const ReferralInput = styled(FarmNowInput)`
  margin-top: 1.2rem;
  float: left;
`;

export const AgreeDiv = styled.div`
  text-align: center;
  margin: 1% 0%;
`;

export const AgreeInput = styled.input`
  margin: 0.5%;
`;
export const AgreeSpan = styled.span`
  font-size: 12px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  background: #33d49d;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  text-align: centre;
  margin-left: 43%;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 12px;
    padding: 0.2rem 1rem;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
