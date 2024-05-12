import { styled, css } from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  margin-top: 1rem;
`;
export const TableDiv = styled.div`
  margin: 4rem 0rem 2rem 0rem;
`;
export const Sections = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 1rem 2rem;
  margin: 3rem 4rem;
  text-align: center;
  border-radius: 10px;
`;

export const Heading = styled.div`
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  margin: 0.5rem 0rem;
`;

export const BalanceDiv = styled.input`
  border: none;
  background: #302e37;
  color: #d9d9d9cc;
  border-radius: 30px;
  padding: 1rem 1rem;
  margin: 2rem 30%;
  width: 30%;
  text-align: left;
  @media (max-width: 900px) {
    font-size: 12px;
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 50%;
    font-size: 9px;
  }
`;

export const Span = styled.span`
  float: right;
  padding: 0px 2px;
  color: #33d49d;
  font-size: 14px;
  position: absolute;
  top: 40%;
  left: 60%;
  @media (max-width: 900px) {
    left: 63%;
    top: 43%;
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    left: 66%;
    top: 45%;
  }
`;

export const Div2 = styled.div`
  text-align: center;
`;
export const TKNDetail1 = styled.div`
  font-weight: 200;
  font-size: 14px;
  color: grey;
  margin: 0.8rem 0rem;
`;
export const Span3 = styled.span`
  color: white;
  font-size: 12px;
`;
export const NoteDiv = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  width: 28%;
  text-align: center;
  margin-left: 37%;
  font-size: 14px;
  opacity: 0.8;
  @media (max-width: 900px) {
    font-size: 14px;
    width: 50%;
    margin-left: 25%;
  }
  @media(max-width:650px){
    font-size: 12px;
    width: 90%;
    margin-left: 5%;
  }
`;
export const NoteText = styled.div`
  color: #ea4137;
  margin: 0rem 0.4rem;
`;
export const NoteSubtext = styled.div`
  text-align: left;
`;
export const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 4rem;
  font-size: 16px;
  font-weight: 600;
  margin: 2rem 0rem;
  font-family: Montserrat;
  @media(max-width:650px){
    padding: 0.5rem 2rem;
  }
`;

export const Balance = styled.div``;

export const BalanceText2 = styled.div`
  font-weight: 300;
  font-size: 14px;
`;
export const BalanceDiv2 = styled.div`
  text-align: left;
  margin: 2rem 0rem;
`;
export const Span2 = styled.span`
  background: ${(props) => props.theme.colors.grey_background};
  padding: 0.8rem 2rem;
  margin-left: 1rem;
  font-weight: 700;
`;
