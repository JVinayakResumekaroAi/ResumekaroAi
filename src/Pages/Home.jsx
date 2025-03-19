import React from "react";
import HeroSection from "../components/homeComponents/HeroSection";
import Steps from "../components/homeComponents/Steps";
import Subscription from "../components/homeComponents/Subscription";
import Features from "../components/homeComponents/Features";
import Templates from "../components/homeComponents/Templates";
import WhyResumeKaro from "../components/homeComponents/WhyResumeKaro";
import Reviews from "../components/commonComponents/Reviews";
import Join from "../components/homeComponents/Join";
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
