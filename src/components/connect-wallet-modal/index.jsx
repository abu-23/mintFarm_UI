import React from "react";
import {
  StyledModal,
  Container,
  Wrap,
  Subheading,
  Head,
  Label,
  Input,
  Button,
  CloseIcon,
} from "./wallet.style";
import { Col, Row } from "../styled-components/grid/Grid.style";
import closeIcon from "../../assets/icons/icon _close circle_.svg";
export default function ConnectWalletModal({handleModal}) {
  return (
    <StyledModal>
      <Container>
        <Wrap>
        <CloseIcon onClick={handleModal} src={closeIcon} />
          <Head>Profile</Head>
          <Subheading>Please Update Your Profile First</Subheading>
          <Row>
            <Col col={6}>
                <Label>First Name</Label>
                <Input placeholder="Enter your first Name" />
            </Col>
            <Col col={6}>
              <Label>Last Name</Label>
              <Input placeholder="Enter your Last Name" />
            </Col>
          </Row>
          <Row>
            <Col col={6}>
              <Label>Email Adress</Label>
              <Input placeholder="Enter your Email Address" />
            </Col>
            <Col col={6}>
              <Label>Mobile Number</Label>
              <Input placeholder="Enter Your Mobile Number" />
            </Col>
          </Row>
          <Button>SAVE</Button>
        </Wrap>
      </Container>
    </StyledModal>
  );
}
