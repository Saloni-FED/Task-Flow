import React from "react";
import useTask from "../../../hooks/useTask";
import AllTaskMain from "./AllTaskMain";
const GetAllTask = () => {
  const [allTask, setAllTask] = useTask();
  console.log(allTask);
   if(!allTask) {
    return <h1 className="font-body bg-custom_black">Loading please wait </h1>
   }
  return (
    <>
      <div className=" w-screen h-screen bg-custom_black text-white border-custom_white p-3 grid gap-5 grid-cols-3 ">
        {allTask.map((taskItems)=>{
          return <AllTaskMain key={taskItems._id}/>
        })}
        <AllTaskMain/>
        <AllTaskMain/>
        <AllTaskMain/>
        <AllTaskMain/>
        <AllTaskMain/>
        <AllTaskMain/>
        
      </div>
    </>
  );
};

export default GetAllTask;
