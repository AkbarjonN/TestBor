import React from "react";
import HomeCards from "./Components/HomeCards";
import MathCards from "./Components/MathCards";
import CardSlider from "./Components/CardSlider";
import EnglishCards from "./Components/EnglishCards";
import LeaderBoard from "./Components/LeaderBoard";
import DiagnosticCard from "./Components/DiagnosticCard";
import OlympicsCards from "./Components/OlympicsCards";
import Store  from "./Components/Store";

const Home = () => {
  return (
    <div className="bg-gray-100 px-3 pt-20 ">
      <DiagnosticCard/>
      <HomeCards />
      <MathCards />
      <EnglishCards />
      <CardSlider/>
      <LeaderBoard/>
      <OlympicsCards/>
      <Store/>
    </div>
  );
};

export default Home;
