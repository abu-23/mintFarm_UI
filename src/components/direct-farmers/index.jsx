import * as React from "react";
import { Row, Col } from "../styled-components/grid/Grid.style";
import {
  YieldDetail,
  FarmingDiv,
  SectionTitle,
  Sections,
  Value,
  Subtext,
  TableDiv,
} from "./DirectFarmers.style";
import {
  directFarmersTableColumns,
  directFarmersTableValues,
  DirectFarmersComponentData
} from "../../mocks/mockData";
import TableResponsive from "../table-responsive";

function DirectFarmersComponent() {
  return (
    <FarmingDiv>
      <SectionTitle>
        <Sections isActive={true}>Direct Farmers</Sections>
        <Sections>Team Farmers</Sections>
        <Sections>Rewards</Sections>
      </SectionTitle>
      <hr />
      <Row>
        {DirectFarmersComponentData.map((item) => (
          <Col col={3}>
            <YieldDetail>
              <Value>{item.value}</Value>
              <Subtext>{item.title}</Subtext>
              <Subtext>{item.subtitle}</Subtext>
            </YieldDetail>
          </Col>
        ))}
      </Row>
      <TableDiv>
      <TableResponsive
        column={directFarmersTableColumns}
        values={directFarmersTableValues}
      />
      </TableDiv>

    </FarmingDiv>
  );
}

export default DirectFarmersComponent;
