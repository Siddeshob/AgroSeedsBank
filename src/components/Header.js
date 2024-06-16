import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onLoginClick }) => {
  return (
    <header className="bg-cyan-900 text-white h-24 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <img src="" alt="LOGO" className="h-16" />
        <nav className="hidden md:flex space-x-6 text-xl font-bold">
          <Link to="/home" className="hover:text-gray-300">
            {" "}
            <Link to={"/"}> Home</Link>
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            <Link to={"/"}> About</Link>
          </Link>
          <Link
            onClick={onLoginClick}
            to="/login"
            className="hover:text-gray-300"
          >
            {onLoginClick ? "Login" : <Link to={"/login"}> 'LogOut'</Link>}{" "}
          </Link>
        </nav>
        <button className="md:hidden flex items-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
