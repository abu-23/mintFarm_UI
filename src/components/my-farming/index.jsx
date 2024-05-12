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
} from "./MyFarming.style";
import TableResponsive from "../table-responsive";
import {
  MyFarmingTableColumns,
  MyFarmingTableValues,
  MyFarmingComponentData,
} from "../../mocks/mockData";
function MyFarmingComponent() {
  return (
    <FarmingDiv>
      <SectionTitle>
        <Sections isActive={true}>My Farming</Sections>
        <Sections>Daily Yield Calculation</Sections>
      </SectionTitle>
      <hr />
      <Row>
        {MyFarmingComponentData.map((item) => (
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
          column={MyFarmingTableColumns}
          values={MyFarmingTableValues}
        />
      </TableDiv>
    </FarmingDiv>
  );
}

export default MyFarmingComponent;
