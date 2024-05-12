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
export const Link1 = styled.div`
  text-align: center;
  display: flex;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.grey_background};
  color: black;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: ${(props) => props.theme.fonts.font_size.small_font};
  @media(max-width:600px){
    margin: 0.1rem 1rem;
  }
`;
export const LinkText1 = styled.div`
  text-align: left;
  margin-right: 2rem;
  color: ${(props) => props.theme.colors.white};
`;
export const LinkText2 = styled.div`
  text-align: right;
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.white};
`;
export const CopyIcon = styled.img`
  float: right;
  margin-left: 1rem;
`;

export const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 1-0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  top: 0%;
  display: flex;
  align-items: center;
  jusity-content: center;
`;

export const Container = styled.div`
  width: 25%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 0%;
  bottom: 0%;
  left: 40%;
  top: 15%;
  border-radius: ${(props) => props.theme.border.radius_m};

  animation-name: ${SlideInAnimation};
  animation-duration: 0.5s;

  @media (max-width: 1200px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    left: 20%;
    width: 70%;
  }
`;

export const Wrap = styled.div`
  padding: 1rem;
  position: relative;
`;
export const ReferalLinkDiv = styled.div`
  background: #17354d;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const CloseIcon = styled.img`
  position: absolute;
  top: 2%;
  cursor: pointer;
  left: 94%;
`;

export const TextDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 55%;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
`;
export const Text = styled.div`
  font-size: ${(props) => props.theme.fonts.font_size.larger_font};
  margin: 0.8rem 0rem;
  text-align: left;
`;

export const Subtext = styled.div`
  margin: 0.8rem 0rem;
  font-size: ${(props) => props.theme.fonts.font_size.small_font};
`;

export const MediaIconDiv = styled.div`
  display: flex;
  text-align: center;
  margin: 0.5rem 0.5rem;
`;
export const Icons = styled.img`
  margin: 0rem 1.1rem;
  width: 10%;
`;
