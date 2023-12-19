import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { MdCreate } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow((prevClick) => !prevClick);
  };
  return (
    <>
      <div className="border p-3 max-sm:p-1 w-fit rounded-full bg-custom_black max-sm:hidden">
        <CgMenuBoxed
          className="text-4xl max-sm:text-xl text-l_green text-bold"
          onClick={handleClick}
        />
      </div>
      {isShow && (
        <nav className="border w-fit max-sm:w-full max-sm:h-fit  px-24 pt-3 max-sm:p-1 max-sm:px-0 bg-custom_black truncate">
          <ul className="flex flex-col justify-center items-center max-sm:flex-row  max-sm:gap-3 gap-5 text-custom_white font-body font-bold text-sm mt-3">
            <NavLink to="/main/create">
              <li className="flex-row max-sm:flex-col max-sm:text-xs max-sm:gap-1 transition-y hover:translate-x-1 max">
                Create Task
                <span>
                  <MdCreate />
                </span>
              </li>
            </NavLink>

            <li className="flex-row max-sm:flex-col max-sm:text-xs max-sm:gap-1 transition-y hover:translate-x-1 ">
              DashBoard
              <span>
                <RiDashboard2Fill />
              </span>
            </li>
            <NavLink to = '/main/getalltask'>
              <li className="flex-row max-sm:flex-col max-sm:text-xs max-sm:gap-1 transition-y hover:translate-x-1 ">
                All Tasks{" "}
                <span>
                  <FaTasks />
                </span>
              </li>
            </NavLink>

            <li className="flex-row max-sm:flex-col max-sm:text-xs max-sm:gap-1 transition-y hover:translate-x-1">
              Update Task{" "}
              <span>
                <GrUpdate />
              </span>
            </li>
            {/* <li>Share task</li>
          <li>Add User</li> */}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavLinks;
