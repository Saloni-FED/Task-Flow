import React, { useState, useEffect, useRef } from "react";

const AllTaskMain = ({ taskName, date, dueDate, priority, status }) => {
  const [taskStatus, setTaskStatus] = useState(status === "completed");
  const [updateTask, setUpdateTask] = useState({
    pending: status,
    taskName: taskName,
    priority: priority,
  });
  const[updateButton,setUpdateButton] = useState(false)
  console.log(updateTask);
  const buttonRef = useRef(null);
 
  const handlePriority = () => {
    setTaskStatus((prevStatus) => !prevStatus);
    const buttonValue = buttonRef.current.textContent;
    const status = buttonValue.split(" ");
    console.log(status[status.length - 1]);
  };

  return (
    <div className="flex-grow w-fit h-fit p-5 task_creation">
      <p className="font-bold mt text-2xl text-custom_white">{taskName}</p>
      <p className="mt-5 text-bold text-l_green">Created At :- {date}</p>
      <p className="text-red-700">Due At :- {dueDate}</p>
      <button
        ref={buttonRef}
        name="task"
        id="task"
        className="mt-3 bg-custom_black p-3 outline-none rounded-sm shadow-md shadow-custom_white"
        onClick={handlePriority}
      >
        Status:- {taskStatus ? "Completed" : "Pending"}
      </button>
    </div>
  );
};

export default AllTaskMain;
