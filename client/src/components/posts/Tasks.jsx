import React from "react";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
const Tasks = () => {
  return (
    <div className="border-2  z-50 w-full max-sm:h-full  h-screen truncate  flex justify-center p-5  bg-custom_black ">
      <form className="flex flex-col gap-10 p-5 w-fit h-fit max-sm:w-screen truncate rounded shadow-lg shadow-white text-custom_white bg-slate-900 font-body">
        <div className="flex flex-col gap-1">
          <label className="text-xl  text-l_green ">Task :</label>
          <input type="text" className="tasks_input" />
        </div>
        <div className="flex flex-col gap-1 ">
          <label className="text-xl  text-l_green ">Due Date :</label>
          <input type="date" className="tasks_input" />
        </div>
        <div className="flex flex-col gap-1  ">
          <div className="text-xl  text-l_green">
            {" "}
            <h1 >Priority:-</h1>
          </div>
          <div className="flex gap-10 ">
            <label htmlFor="">Low : </label>
            <input type="radio" name="priority" />
            <label htmlFor="">Medium : </label>
            <input type="radio" name="priority" />
            <label htmlFor="">High : </label>
            <input type="radio" name="priority" />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-start items-center gap-1 border w-fit p-3 text-l_green font-bold border-d_green rounded-lg"
        >
          Create <CiSquarePlus className="text-white text-xl " />{" "}
        </button>
      </form>
    </div>
  );
};

export default Tasks;
