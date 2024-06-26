import { styled, keyframes } from "styled-components";

export const SlideInAnimation = keyframes`
0% {
  -webkit-transform: translateX(100%);
}
100% {
  -webkit-transform: translateX(0%);
}
::-webkit-keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
`;
export const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  top: 0%;
  display: flex;
  align-items: center;
  jusity-content: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 50%;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 0%;
  bottom: 0%;
  left: 20%;
  top: 25%;
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.border.radius_m};

  animation-name: ${SlideInAnimation};
  animation-duration: 0.5s;
  @media (max-width: 1400px) {
    height: 35%;
  }
  @media (max-width: 600px) {
    width:75%;
  }
`;

export const Wrap = styled.div`
  color: black;
  padding: 2rem 0rem 2rem 5rem;
  color: #061926;
  @media (max-width: 1500px) {
    padding: 0rem 0rem 0rem 5rem;
  }
  @media (max-width: 800px) {
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
  }
  @media (max-width: 550px) {
    padding:1rem 0.5rem ;
  }
`;
export const CloseIcon = styled.img`
  position: absolute;
  top: 5%;
  cursor: pointer;
  left: 96%;
  @media (max-width: 900px) {
    left: 90%;
  }
`;
export const Head = styled.div`
  text-align: center;
  font-weight: ${(props) => props.theme.fonts.font_weight.bolder_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_size_20};
  margin-right: 10rem;
  @media (max-width: 800px) {
    margin-left: 5rem;
  }
  @media (max-width: 550px) {
    font-size: ${(props) => props.theme.fonts.font_size.large_font};
  }
`;
export const Subheading = styled.div`
  text-align: center;
  margin: 1rem 0rem;
  margin-right: 10rem;
  color: ${(props) => props.theme.colors.green};
  font-weight: ${(props) => props.theme.fonts.font_weight.light_bold_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  @media (max-width: 1500px) {
    margin-top: 0rem;
  }
  @media (max-width: 800px) {
    margin-right: 4rem;
  }
    @media (max-width: 550px) {
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
  }
`;
export const Input = styled.input`
  background: ${(props) => props.theme.colors.grey_background};
  border: none;
  border-radius: ${(props) => props.theme.border.radius_m};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 70%;
  color: ${(props) => props.theme.colors.white};
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
    opacity: 0.9;
  }
  @media (max-width: 550px) {
  }
  @media (max-width:1500px){
    padding: 0.5rem;
    margin:0rem;
     &::placeholder {
    font-size: ${(props) => props.theme.fonts.font_size.smallest_font};
  }
`;
export const Label = styled.div`
  text-align: left;
  margin: 0.5rem 0rem;
  color: #061926;
  font-weight: ${(props) => props.theme.fonts.font_weight.bold_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  @media (max-width: 550px) {
    font-size: ${(props) => props.theme.fonts.font_size.smallest_font};
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  text-align: centre;
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  font-weight: ${(props) => props.theme.fonts.font_weight.medium_font};
  font-family: Montserrat;
  margin-top: 1rem;
  margin-left: 28%;
  width: 25%;
  @media (max-width: 1500px) {
    padding: 0.2rem;
    width: 15%;
    margin-top: 0.5rem;
    margin-left: 35%;
  }
`;
