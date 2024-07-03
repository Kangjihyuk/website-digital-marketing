import React from "react";
import partRegister from "../../../assets/registrasi.png"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
const Registrasi = ({ handleLoginClick }) => {
  const clickRegistrasi = () => {
    handleLoginClick()
  }

  return (
    <div className="relative justify-center items-center flex flex-wrap h-[117vh] lg:h-[100vh]  z-20 w-full  bg-teal-50  poppins-medium overflow-x-hidden">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={partRegister}
          alt="post login"
          className="brightness-70 mb-10"
        />
      </div>
      <div className="translate-x-2 -translate-y-[5rem] md:w-1/2 md:translate-x-0 md:translate-y-0 ">
        <h1 className="poppins-medium text-2xl text-primary mb-1">
          Registrasi
        </h1>
        <p className="text-primary poppins-semibold mb-2">
          Please register to login
        </p>
        <form>
          <span className="mt-2 relative">
            <FaRegUser className="absolute bottom-0 translate-x-[7px] -translate-y-[2px] " />
            <input
              placeholder="Username"
              type="text"
              className="mb-2 py-2 px-7 rounded-full placeholder:text-black placeholder:text-lg placeholder:font-semibold border border-primary"
            />
          </span>
          <br />
          <span className="mt-2 relative">
            <FaRegUser className="absolute bottom-0 translate-x-[7px] -translate-y-[2px] " />
            <input
              placeholder="Mobile Number"
              type="text"
              className="mb-2 py-2 px-7 rounded-full placeholder:text-black placeholder:text-lg placeholder:font-semibold border border-primary"
            />
          </span>
          <br />
          <span className="mt-2 relative">
            <RiLockPasswordLine className="absolute bottom-0 translate-x-[7px] -translate-y-[2px]" />
            <input
              placeholder="password"
              type="password"
              className="mb-2 py-2 px-7 rounded-full placeholder:text-black placeholder:text-lg placeholder:font-semibold border border-primary"
            />
          </span>
          <br />
          <span className="flex items-center justify-center mt-2 md:justify-start">
            <input
              type="button"
              value="Sign in"
              className="bg-primary px-7  py-2 text-white rounded-full font-bold tracking-wider shadow-lg shadow-sky-400 hover:scale-105 transition-all duration-300"
            />
          </span>
        </form>
        <p className="flex justify-center items-center mt-2 md:justify-start md:mt-4">
          Already have account?{" "}
          <a
            href="#"
            className="text-primary font-bold cursor-pointer"
            onClick={clickRegistrasi}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registrasi;
