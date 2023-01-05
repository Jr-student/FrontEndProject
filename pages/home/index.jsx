import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <MenuWrapper />
      <About />
    </React.Fragment>
  );
};

export default Index;
