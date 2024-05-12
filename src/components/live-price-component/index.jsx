import React from "react";
import { Row, Col } from "../styled-components/grid/Grid.style";
import {
  BannerImage,
  Price,
  PriceDetails,
  PriceDiv,
  PriceDiv2,
  PricePercent,
  PriceText,
  Text,
  Wrap,
} from "./LivePrice.style";
import bannerImage from "../../assets/images/banner-image.jpg";
import arrowUp from "../../assets/icons/icon _arrow up.svg";

export default function LivePriceComponent() {
  return (
    <>
      <Wrap>
        <Row>
          <Col col={12}>
            <BannerImage src={bannerImage} alt="bannerImage" />
            <Text>
              <PriceDiv>
                <PriceText>TKN LIVE PRICE</PriceText>
                <PriceDetails>
                  <Price>$ 0.38</Price>
                  <Price>
                    <img src={arrowUp} alt="arrowUp" />
                    <PricePercent>1.25%</PricePercent>
                  </Price>
                </PriceDetails>
              </PriceDiv>
              <PriceDiv2>Your Farming Pool : $ 16</PriceDiv2>
            </Text>
          </Col>
        </Row>
      </Wrap>
    </>
  );
}
