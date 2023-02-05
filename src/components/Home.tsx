import React from "react";
import { MaxContainer } from "../styles";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RoadMap from "./RoadMap";

const Home = () => (
  <>
    <MaxContainer>
      <Navbar />
      <Banner />
      <RoadMap />
      <Contact />
    </MaxContainer>
    <Footer />
  </>
);

export default Home;
