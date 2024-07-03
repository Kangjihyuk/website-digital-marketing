import React from "react";
import { useState } from "react";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Others", link: "/#others" },
  { id: 3, name: "Company", link: "/#company" },
  { id: 4, name: "Services", link: "/#service" },
  { id: 5, name: "Contact", link: "/#contact" },
];

export const NavbarClick = ({
  handleClick,
  setShowLogin,
  setShowRegister, handleShowHero
}) => {

  const handleStartClick = () => {
    setShowLogin(false);
    setShowRegister(false);
    handleClick()
    handleShowHero()
  };

  const signInClick = () => {
    setShowRegister(false)
    setShowLogin(true)
    handleClick()
  }

  return (
    <div className="w-[80%] backdrop-saturate-50 bg-primary translate-x-[15%] p-5 rounded-lg shadow-xl shadow-cyan-200 text-white">
      <p
        className="poppins-bold bg-black w-[2rem] flex items-center justify-center p-1 rounded-full -translate-x-[40%] -translate-y-[40%] cursor-pointer"
        onClick={handleClick}
      >
        X
      </p>
      <div>
        <ul className="text-center">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="hover:scale-125 hover:text-slate-100 transition-all duration-100 hover:bg-sky-400 p-1 poppins-medium active:bg-indigo-600"
            >
              <a href={data.link} className="text-md font-semibold">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <a
          href="#"
          onClick={signInClick}
          className="poppins-bold hover:scale-105 hover:text-yellow-300 duration-100 transition-all pointer"
        >
          Sign in
        </a>
        <a
          href="#"
          onClick={() => handleStartClick()}
          className="poppins-bold bg-indigo-200 px-2 py-1 rounded-lg text-white hover:bg-emerald-300 transition-all hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavbarClick;
