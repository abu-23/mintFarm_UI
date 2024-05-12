import React from "react";
import { Row, Col } from "../../components/styled-components/grid/Grid.style";
import {
  FarmingDiv,
  Heading,
  BalanceDiv,
  Span,
  Div2,
  Button,
  BalanceDiv2,
  BalanceText2,
  Span2,
  SectionTitle,
  Sections,
  TKNDetail1,
  NoteDiv,
  Span3,
  NoteText,
  NoteSubtext,
  TableDiv,
} from "./Withdrawal.style";
import LivePriceComponent from "../../components/live-price-component";
import TableResponsive from "../../components/table-responsive";
import {
  ClaimedHistoryTableCloumns,
  ClaimedHistoryTableValues,
} from "../../mocks/mockData";

export default function Withdrawal() {
  return (
    <>
      <LivePriceComponent />
      <FarmingDiv>
        <Heading>Withdrawal</Heading>
        <hr />
        <BalanceDiv2>
          <BalanceText2>
            Available Balance <Span2>(T) 2000</Span2>
          </BalanceText2>
        </BalanceDiv2>
        <Div2>
          <Row>
            <Col col={12}>
              <BalanceDiv placeholder="Enter amount (TKN)" />
              <Span> | MAX</Span>
            </Col>
          </Row>
        </Div2>
        <TKNDetail1>
          Slippage Applied : 0 <Span3> TKN</Span3>
        </TKNDetail1>
        <TKNDetail1>
          Withdrawal Amt : 0 <Span3>TKN</Span3>
        </TKNDetail1>
        <Button>Withdraw</Button>

        <NoteDiv>
          <NoteText>Note:</NoteText>
          <NoteSubtext>
            Min withdrawal amount is 15 $ worth of TKN. 6% Slippage may apply.
          </NoteSubtext>
        </NoteDiv>
      </FarmingDiv>
      <FarmingDiv>
        <SectionTitle>
          <Sections>Claimed History</Sections>
        </SectionTitle>
        <hr />
        <TableDiv>
          <TableResponsive
            column={ClaimedHistoryTableCloumns}
            values={ClaimedHistoryTableValues}
          />
        </TableDiv>
      </FarmingDiv>
    </>
  );
}
