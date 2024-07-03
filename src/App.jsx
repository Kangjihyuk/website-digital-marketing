import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Login from "./components/Navbar/Login/Login";
import Registrasi from "./components/Navbar/Login/Registrasi";
import Others from "./components/Others/Others";
import AboutUs from "./components/About-Us/AboutUs";
import OurSolutions from "./components/OurSolutions/OurSolutions";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Client from "./components/Client/Client";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };


  const handleFormClick = (formType) => {
    if (formType === "login") {
      setShowLogin(true);
      setShowRegister(false);
      setShowHero(false);
    } else if (formType === "register") {
      setShowRegister(true);
      setShowLogin(false);
      setShowHero(false);
    } else {
      setShowLogin(false);
      setShowRegister(false);
      setShowHero(true);
    }
  };

  const handleShowHero = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowHero(true)
  }

  return (
    <>
      <div className="bg-slate-300/60">
        <Navbar
          handleClick={handleClick}
          isClick={isClick}
          handleLoginClick={() => handleFormClick("login")}
          handleRegisterClick={() => handleFormClick("register")}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          handleShowHero={handleShowHero}
        />
        {showLogin && (
          <Login
            handleLoginClick={() => handleFormClick(null)}
            handleRegisterClick={() => handleFormClick("register")}
          />
        )}
        {showHero && !showLogin && (
          <>
            <Hero />
            <Others />
            <AboutUs />
            <OurSolutions />
            <Pricing />
            <Blog />
            <Client />
            <Banner />
            <Footer />
            </>
        )}
        {showRegister && (
          <Registrasi handleLoginClick={() => handleFormClick("login")} />
        )}
      </div>
    </>
  );
}

export default App;
