import React from "react";

const AllTaskMain = () => {
  return (
    <div className="w-fit h-fit p-5 task_creation">
      <p className="font-bold mt text-2xl text-custom_white">
        Task is here this is the task
      </p>
      <p className="mt-5 text-bold text-l_green">Created At :- 20/10/12 </p>
      <p className="  text-red-700">Due At :- 20/10/12</p>
      <select
        name="task "
        id="task"
        className="mt-3 bg-custom_black p-3 outline-none rounded-sm shadow-md shadow-custom_white"
      >
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
};

export default AllTaskMain;
