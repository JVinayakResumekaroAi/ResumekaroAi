import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TemplatesPage from "./Pages/TemplatesPage";
import Footer from "./components/commonComponents/Footer";
import Navbar from "./components/commonComponents/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
