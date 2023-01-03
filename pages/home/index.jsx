import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/Reservation";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <MenuWrapper />
      <About />
      <Reservation />
    </React.Fragment>
  );
};

export default Index;
