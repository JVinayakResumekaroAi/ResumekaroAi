import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TemplatesPage from "./Pages/TemplatesPage";
import Footer from "./components/commonComponents/Footer";
import Navbar from "./components/commonComponents/Navbar";
import SignIn from "./Pages/SignIn";
import UserDashboard from "./Pages/UserDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
