import React from "react";
import { CoinIcon, MainDiv } from "./Coins.style";
import { Row, Col } from "../styled-components/grid/Grid.style";
import { coinsData } from "../../mocks/mockData";

export default function CoinsComponent() {
  return (
    <MainDiv>
      <Row>
        {coinsData.map((item2) => (
          <Col col={2.4}>
            <CoinIcon src={item2} alt="coin-icon" />
          </Col>
        ))}
      </Row>
    </MainDiv>
  );
}
