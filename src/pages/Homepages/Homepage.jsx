import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import TrendingCollections from "../../components/TrendingCollections";
import Posters from "../../components/posters";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black ">
        <Header />
        <HeroSection />
        <TrendingCollections />
        <Posters />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
