import React from "react";
import HeroSection from "../components/HeroSection";
import Steps from "../components/Steps";
import Subscription from "../components/Subscription";
import Features from "../components/Features";

import Templates from "../components/Templates";
import WhyResumeKaro from "../components/WhyResumeKaro";
import Reviews from "../components/commonComponents/Reviews";
import Join from "../components/Join";
import FAQ from "../components/commonComponents/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Steps />
      <Subscription />
      <Features />
      <Templates />
      <WhyResumeKaro />
      <Reviews />
      <Join />
      <FAQ />
    </>
  );
};

export default Home;
