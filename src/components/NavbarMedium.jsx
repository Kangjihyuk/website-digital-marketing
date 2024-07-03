import React from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Others",
    link: "/#others",
  },
  {
    id: 3,
    name: "Company",
    link: "/#company",
  },
  {
    id: 4,
    name: "Services",
    link: "/#service",
  },
  {
    id: 5,
    name: "Contact",
    link: "/#contact",
  },
];

const NavbarMedium = ({
  setShowLogin,
  setShowRegister,
  handleShowHero
}) => {

  const handleStartClick = () => {
    setShowLogin(false);
    setShowRegister(false);
    handleShowHero()
  };

  const signUpClick = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="hidden md:flex justify-center items-center w-full">
      <div>
        <ul className="flex items-center justify-center p-1 lg:mr-4 lg:p-4">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="hover:scale-105 hover:text-slate-100 transition-all duration-100 hover:bg-sky-400 poppins-medium active:bg-indigo-600 text-sm ml-3 p-1 rounded-full"
              
            >
              <a href={data.link} className="lg:poppins-light" >
                {data.name} 
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center ml-1">
        <a
          href="#"
          onClick={signUpClick}
          className="poppins-bold w-full mr-3 hover:scale-105 hover:text-yellow-300 duration-100 transition-all text-sm text-nowrap lg:mr-2"
        >
          Sign in
        </a>
        <a
          href="#"
          onClick={handleStartClick}
          className="poppins-bold bg-primary px-2 py-1 rounded-lg text-white hover:bg-emerald-300 transition-all hover:scale-105 text-nowrap lg:ml-3"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavbarMedium;
