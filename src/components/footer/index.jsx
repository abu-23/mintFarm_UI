import React from "react";
import {
  Div1,
  Div2,
  Div3,
  FooterContainer,
  Logo,
  MediaIcons,
  Para,
  Para2,
  Span,
} from "./Footer.style";
import mintFarmLogo from "../../assets/icons/mintfarm-logo.svg";
import { MediaIcons1Footer, MediaIcons2Footer } from "../../mocks/mockData";

export default function Footer() {
  return (
    <FooterContainer>
      <Div1>
        <Logo img src={mintFarmLogo} />
        <Div2>
          <Para>
            For latest information and updates{" "}
            <Span>follow us and subscribe</Span> to our channels
          </Para>
          {MediaIcons1Footer.map((icon) => (
            <MediaIcons src={icon} />
          ))}
        </Div2>
      </Div1>
      <Div1>
        <Div3>
          <Para2>ContactUs :</Para2>
          <p>
            For any enquiries contact us at <Span> support@XYZ.com</Span>
          </p>
        </Div3>
        <Div2>
          <Para>
            Stay tuned here for <Span>marketplace updates</Span>
          </Para>
          {MediaIcons2Footer.map((icon) => (
            <MediaIcons src={icon} />
          ))}
        </Div2>
      </Div1>
    </FooterContainer>
  );
}
