
import React, { useEffect, useRef, useState } from "react";
import TopHeader from "@/components/topHeader";
import Banner from "@/components/common/banner";
import CustomBoxes from "@/components/customBoxes";
import Works from "@/components/works";
import GetCustomBoxes from "@/components/getCustomBoxes";

const Header = () => {
  return (
    <>
      <TopHeader />
      <Banner />
      <CustomBoxes />
      <Works />
      <GetCustomBoxes />
    </>
  );
};

export default Header;