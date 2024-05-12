import React from "react";
import {
  BannerImage,
  CloseIcon,
  Container,
  CopyIcon,
  Icons,
  Link1,
  LinkText1,
  LinkText2,
  MediaIconDiv,
  ReferalLinkDiv,
  StyledModal,
  Subtext,
  Text,
  TextDiv,
  Wrap,
} from "./ReferModal.style";
import Bitcoin from "../../assets/images/bitcoin.jpg";
import closeIcon from "../../assets/icons/icon _close circle_.svg";
import { MediaIcons, ReferalData } from "../../mocks/mockData";
import copyIcon from "../../assets/icons/icon _copy success_.svg";
import { Col, Row } from "../styled-components/grid/Grid.style";
export default function ReferModal({ handleModal }) {
  return (
    <StyledModal>
      <Container>
        <Wrap>
          <BannerImage src={Bitcoin} />
          <CloseIcon onClick={handleModal} src={closeIcon} />
          <TextDiv>
            <Text>Want to get 100 USDT?</Text>
            <Subtext>
              Register and deposit more than $50 into your account.
            </Subtext>
            <Subtext>We'll both get a 100 USDT cashback voucher!</Subtext>
          </TextDiv>
        </Wrap>

        <Row>
          {ReferalData.map((item) => (
            <Link1>
              <Col col={5.5}>
                <LinkText1>{item.text}</LinkText1>
              </Col>
              <Col col={5}>
                <LinkText2>{item.link}</LinkText2>
              </Col>
              <Col col={1.5}>
                <CopyIcon src={copyIcon} />
              </Col>
            </Link1>
          ))}
        </Row>
        <MediaIconDiv>
          {MediaIcons.map((icons) => (
            <Icons src={icons} alt="media-icons" />
          ))}
        </MediaIconDiv>
      </Container>
    </StyledModal>
  );
}
