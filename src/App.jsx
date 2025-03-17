import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Templates from "./components/Templates";
import WhyResumeKaro from "./components/WhyResumeKaro";
import Reviews from "./components/Reviews";
import { Join } from "./components/Join";
import Subscription from "./components/Subscription";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Steps />
      <Subscription />
      <Features />
      <Templates />
      <WhyResumeKaro />
      <Reviews />
      <Join />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
