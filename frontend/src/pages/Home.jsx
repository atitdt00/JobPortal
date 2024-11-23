import React from "react";
import Hero from "../components/Hero";
import TopJobs from "../components/Top&Latest";
import TopNiches from "../components/TopNiches";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <TopJobs/> 
      <TopNiches />
      <HowItWorks />
    </>
  );
};

export default Home;
