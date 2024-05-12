import React from "react";
import { Col, Row } from "../styled-components/grid/Grid.style";
import { FarmingYieldComponentData, FarmingYieldComponentData2 } from "../../mocks/mockData";
import {
  ActiveProgressBar,
  DetailText,
  FarmingDiv,
  Heading,
  MinAmount,
  ProgressBar,
  ProgressBarDiv,
  ProgressSpan,
  Subtext,
  Value,
  YieldDetail,
} from "./yieldComponent2.style";

export default function YieldComponent2() {
  return (
    <FarmingDiv>
      <Heading>Farming Yield</Heading>
      <Row>
        {FarmingYieldComponentData.map((item) => (
          <Col col={3}>
            <YieldDetail>
              <Value>{item.value}</Value>
              <Subtext>{item.title}</Subtext>
              <Subtext>{item.subtitle}</Subtext>
            </YieldDetail>
          </Col>
        ))}
      </Row>
      <Row>
        {FarmingYieldComponentData2.map((item) => (
          <Col col={3}>
            <YieldDetail>
              <Value>{item.value}</Value>
              <Subtext>{item.title}</Subtext>
              <Subtext>{item.subtitle}</Subtext>
            </YieldDetail>
          </Col>
        ))}
      </Row>
      <Row>
        <Col col={12}>
          <ProgressBarDiv>
            <DetailText>Re Farm After $75 to Get Continueous Yield</DetailText>
            <ProgressBar>
              <ActiveProgressBar>$30</ActiveProgressBar>
            </ProgressBar>
            <MinAmount>
              $25<ProgressSpan>$75</ProgressSpan>
            </MinAmount>
          </ProgressBarDiv>
        </Col>
      </Row>
    </FarmingDiv>
  );
}
