import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import NavbarClick from './NavbarClick';
import LOGO from '../PICTURE/logo.png';
import NavbarMedium from './NavbarMedium';

const clickNav = {
  backdropFilter: "blur(50px)",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "100vh",
  zIndex: "100",
  width: "100%",
  marginLeft: "12px",
};

const Navbar = ({ handleLoginClick, handleRegisterClick, setShowLogin, setShowRegister, isClick, handleClick,handleScroll,handleShowHero}) => {
  return (
    <>
      <div className="container w-[100%] bg-slate-100 md:flex md:justify-between md:items-center md:h-[4rem] md:rounded-b-lg z-20 sm:h-[5rem]">
        <div className="flex items-center justify-between -mt-5 translate-y-[10%] sm:-translate-y-2 md:mt-4">
          <div className="flex items-center">
            <img
              src={LOGO}
              alt="logo"
              className="w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:h-[9rem] md:w-[9rem] object-cover lg:-translate-y-1"
            />
          </div>
          <div className="flex items-center justify-end">
            <FiAlignJustify
              className="md:hidden flex justify-end"
              onClick={handleClick}
            />
          </div>
        </div>
        <div>
          <NavbarMedium
            handleLoginClick={handleLoginClick}
            handleRegister={handleRegisterClick}
            handleClick={handleClick}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
            handleScroll={handleScroll}
            handleShowHero={handleShowHero}
          />
        </div>
        {isClick && (
          <div
            className="container flex justify-between h-full relative items-center -translate-x-5 -translate-y-20"
            style={clickNav}
          >
            <NavbarClick
              handleClick={handleClick}
              handleLoginClick={handleLoginClick}
              setShowLogin={setShowLogin}
              setShowRegister={setShowRegister}
              handleShowHero={handleShowHero}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
