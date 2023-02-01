import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RoadMap from "./RoadMap";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RoadMap></RoadMap>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
