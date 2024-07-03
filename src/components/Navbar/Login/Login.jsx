import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import PostLogin from "./../../../assets/login.png";

const Login = ({ handleLoginClick, handleRegisterClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleRegister = () => {
    handleRegisterClick();
  };

  return (
    <div className="relative justify-center items-center flex flex-wrap h-[100vh] lg:h-[107vh] z-20 w-full bg-teal-50 poppins-medium overflow-x-hidden">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={PostLogin}
          alt="post login"
          className="brightness-70 translate-x-16 -translate-y-1"
        />
      </div>
      <div className="translate-x-2 -translate-y-[5rem] md:w-1/2 md:translate-x-0 md:translate-y-0">
        <h1 className="poppins-medium text-2xl text-primary mb-1">Login</h1>
        <p className="text-primary poppins-semibold mb-2">
          Please Sign in to continue
        </p>
        <form onSubmit={handleSubmit}>
          <span className="mt-2 relative">
            <FaRegUser className="absolute bottom-0 translate-x-[7px] -translate-y-[2px]" />
            <input
              placeholder="Username"
              type="text"
              className="mb-2 py-2 px-7 rounded-full placeholder:text-black placeholder:text-lg placeholder:font-semibold border border-primary"
              required
            />
          </span>
          <br />
          <span className="mt-2 relative">
            <RiLockPasswordLine className="absolute bottom-0 translate-x-[7px] -translate-y-[2px]" />
            <input
              placeholder="Password"
              type="password"
              className="mb-2 py-2 px-7 rounded-full placeholder:text-black placeholder:text-lg placeholder:font-semibold border border-primary"
              required
            />
          </span>
          <br />
          <span className="flex items-center justify-center mt-2 md:justify-start">
            <button
              type="submit"
              className="bg-primary px-7 py-2 text-white rounded-full font-bold tracking-wider shadow-lg shadow-sky-400 hover:scale-105 transition-all duration-300"
            >
              Sign in
            </button>
          </span>
        </form>
        <p className="flex justify-center items-center mt-2 md:justify-start md:mt-4">
          Don't have an account?
          <button
            className="text-primary font-bold cursor-pointer ml-1"
            onClick={handleRegister}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
