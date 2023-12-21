import React from "react";
import NavLinks from "./NavBar";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <nav className=" w-full flex justify-between md:p-5 p-2 gap-5 max-sm:flex-col bg-custom_black ">
          <h1 className="mt-1 font-logo text-3xl text-white">TaskFlow</h1>
          <ul className="flex items-center  gap-5 font-body font-bold  max-sm:top-20 max-sm:flex-col  max-sm:items-start">
            <li className="text-custom_white">Profile</li>
            <li className="text-custom_white">About</li>
            <li className="buttons">Sign in </li>
            <li className="buttons">Sign out</li>
          </ul>
        </nav>
        <div className="flex max-sm:flex-col">
          <NavLinks />
          <Outlet />
        </div>
      </header>
    </>
  );
};

export default Header;
