import { styled, css } from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  margin-top: 1rem;
`;
export const TableDiv = styled.div`
  margin: 4rem 0rem 2rem 0rem;
`;
export const Sections = styled.div`
  font-size: ${(props) => props.theme.fonts.font_size.larger_font};
  font-weight: ${(props) => props.theme.fonts.font_weight.bolder_font};
`;
export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 1rem 2rem;
  margin: 3rem 4rem;
  text-align: center;
  border-radius: ${(props) => props.theme.border.radius_m};
`;

export const Heading = styled.div`
  text-align: left;
  font-weight: ${(props) => props.theme.fonts.font_weight.bolder_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_size_20};
  margin: 0.5rem 0rem;
`;

export const BalanceDiv = styled.input`
  border: none;
  background: #302e37;
  color: #d9d9d9cc;
  border-radius: ${(props) => props.theme.border.radius_30};
  padding: 1rem 1rem;
  margin: 2rem 30%;
  width: 30%;
  text-align: left;
  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 50%;
    font-size: ${(props) => props.theme.fonts.font_size.font_9};
  }
`;

export const Span = styled.span`
  float: right;
  padding: 0px 2px;
  color: ${(props) => props.theme.colors.green};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  position: absolute;
  top: 40%;
  left: 60%;
  @media (max-width: 900px) {
    left: 63%;
    top: 43%;
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
  }
  @media (max-width: 650px) {
    font-size: ${(props) => props.theme.fonts.font_size.smallest_font};
    left: 66%;
    top: 45%;
  }
`;

export const Div2 = styled.div`
  text-align: center;
`;
export const TKNDetail1 = styled.div`
  font-weight: ${(props) => props.theme.fonts.font_weight.below_normal_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  color: grey;
  margin: 0.8rem 0rem;
`;
export const Span3 = styled.span`
  color: ${(props) => props.theme.colors.white}
  font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
`;
export const NoteDiv = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  width: 28%;
  text-align: center;
  margin-left: 37%;
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  opacity: 0.8;
  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fonts.font_size.font_14};
    width: 50%;
    margin-left: 25%;
  }
  @media(max-width:650px){
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
    width: 90%;
    margin-left: 5%;
  }
`;
export const NoteText = styled.div`
  color: ${(props) => props.theme.colors.red};
  margin: 0rem 0.4rem;
`;
export const NoteSubtext = styled.div`
  text-align: left;
`;
export const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.border.radius_8};
  padding: 0.8rem 4rem;
  font-size: ${(props) => props.theme.fonts.font_size.large_font};
  font-weight: ${(props) => props.theme.fonts.font_weight.bold_font};
  margin: 2rem 0rem;
  font-family: Montserrat;
  @media(max-width:650px){
    padding: 0.5rem 2rem;
  }
`;

export const Balance = styled.div``;

export const BalanceText2 = styled.div`
  font-weight: ${(props) => props.theme.fonts.font_weight.normal_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
`;
export const BalanceDiv2 = styled.div`
  text-align: left;
  margin: 2rem 0rem;
`;
export const Span2 = styled.span`
  background: ${(props) => props.theme.colors.grey_background};
  padding: 0.8rem 2rem;
  margin-left: 1rem;
  font-weight: ${(props) => props.theme.fonts.font_weight.bolder_font};
`;
