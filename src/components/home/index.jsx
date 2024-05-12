import React from "react";

import DirectFarmersComponent from "../direct-farmers";
import MyFarmingComponent from "../my-farming";
import CoinsComponent from "../coins-component";
import LivePriceComponent from "../live-price-component";
import FarmingYieldComponent1 from "../farming-yield-component1";
import YieldComponent2 from "../farming-yield-component2";
import Slider from "../image-component/slider";
export default function Home() {
  return (
    <>
      <LivePriceComponent />
      <FarmingYieldComponent1 />
      <YieldComponent2 />
      <MyFarmingComponent />
      <DirectFarmersComponent />
      <CoinsComponent />
      <Slider />
    </>
  );
}
