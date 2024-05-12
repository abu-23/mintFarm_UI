import React, { useState } from "react";
import {
  BannerImage,
  Button,
  ContentDiv,
  Div2,
  HeadRules,
  Link1,
  LinkText1,
  LinkText2,
  ReferText,
  ReferalLinkDiv,
  RulesDiv,
  RulesText,
  StepNo,
  Subtext,
  Wrap,
  YieldDetail,
} from "./Refer.style";
import { Col, Row } from "../../components/styled-components/grid/Grid.style";
import bannerImage from "../../assets/images/banner-image.jpg";
import { ReferSteps, Rules, ReferalData } from "../../mocks/mockData";
import ReferModal from "../../components/refer-modal";

export default function Refer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Wrap>
        <Row>
          <Col col={12}>
            <BannerImage src={bannerImage} alt="bannerImage" />
            <ContentDiv>
              <Row>
                <Col col={6}>
                  <ReferText>
                    Refer Friends.
                    <div>Get 100 USDT Trading Fee Credit Each.</div>
                  </ReferText>
                </Col>
                <Col col={6}>
                  <ReferalLinkDiv>
                    {ReferalData.map((data) => (
                      <Link1>
                        <LinkText1>{data.text}</LinkText1>
                        <LinkText2>{data.link}</LinkText2>
                      </Link1>
                    ))}

                    <Button
                      onClick={() => {
                        handleModal();
                      }}
                    >
                      Invite Friends
                    </Button>
                    {isOpen && <ReferModal handleModal={handleModal} />}
                  </ReferalLinkDiv>
                </Col>
              </Row>
            </ContentDiv>
          </Col>
        </Row>
      </Wrap>
      <Div2>
        <Row>
          {ReferSteps.map((item) => (
            <Col col={4}>
              <YieldDetail>
                <img src={item.icon} alt="icon" />
                <StepNo>{item.step}</StepNo>
                <Subtext>{item.subtext}</Subtext>
              </YieldDetail>
            </Col>
          ))}
        </Row>
        <RulesDiv>
          <HeadRules>Rules</HeadRules>
          {Rules.map((rules) => (
            <RulesText>{rules}</RulesText>
          ))}
        </RulesDiv>
      </Div2>
    </>
  );
}
