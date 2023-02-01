import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import RoadMap from "./RoadMap";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RoadMap></RoadMap>
      <Contact></Contact>
    </>
  );
};

export default Home;
