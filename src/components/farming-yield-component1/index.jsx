import React from "react";
import {
  AgreeDiv,
  AgreeInput,
  AgreeSpan,
  BalanceDiv,
  BalanceText,
  Button,
  Div2,
  FarmNowInput,
  FarmingDiv,
  Heading,
  HeadingDesc,
  InputDiv,
  ReferralInput,
  Span,
} from "./FarmingYield1.style";
import { Col, Row } from "../styled-components/grid/Grid.style";

export default function FarmingYieldComponent1() {
  return (
    <FarmingDiv>
      <Heading>Farming Yield</Heading>
      <HeadingDesc>
        Farm TKN & Earn Daily 0.40% RoY up to 300% Yield
      </HeadingDesc>
      <InputDiv>
        <Row>
          <Col col={6}>
            <FarmNowInput placeholder="Enter Farming Amount ($)" />
          </Col>
          <Col col={6}>
            <FarmNowInput placeholder="Farming Amount (TKN)" />
          </Col>
        </Row>
        <Div2>
          <Row>
            <Col col={6}>
              <BalanceText>Your Available Balance(TKN)</BalanceText>
              <BalanceDiv>
                0<Span> | MAX</Span>
              </BalanceDiv>
            </Col>
            <Col col={6}>
              <ReferralInput placeholder="Enter referral address" />
            </Col>
          </Row>
        </Div2>
      </InputDiv>

      <AgreeDiv>
        <AgreeInput type="checkbox" />
        <AgreeSpan>
          I have agreed to <a href="">terms and conditions</a>
        </AgreeSpan>
      </AgreeDiv>
      <Button>FARM NOW</Button>
    </FarmingDiv>
  );
}
