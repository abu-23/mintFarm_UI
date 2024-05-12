import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { Row, Col } from "../styled-components/grid/Grid.style";
import { ContentWrapper } from "./Layout.style";

export default function Layout() {
  return (
    <ContentWrapper>
      <Row>
        <Col col={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <Footer />
        </Col>
      </Row>
    </ContentWrapper>
  );
}
