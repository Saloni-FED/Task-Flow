import React from "react";
import { useForm } from "react-hook-form";
import { CiSquarePlus } from "react-icons/ci";
import { createTask } from "../../api";
const Tasks = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (taskData) => {
    console.log("clicked", taskData)
    try {
      const { dueDate, priority, taskName } = taskData;
      const data = { dueDate, priority, taskName };
      const resData = await createTask(data);
      console.log(resData);
    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div className="border-2 z-50 w-full max-sm:h-full h-screen truncate flex justify-center p-5 bg-custom_black">
      <form
        className="flex flex-col gap-10 p-5 w-fit h-fit max-sm:w-screen truncate rounded shadow-lg shadow-white text-custom_white bg-slate-900 font-body"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="text-xl text-l_green">Task :</label>
          <input
            type="text"
            className="tasks_input"
            {...register("taskName", {
              required: {
                value: true,
                message: "Please Enter Task",
              },
            })}
          />
          <p className="text-xs text-red-500 mt-2">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl text-l_green">Due Date :</label>
          <input
            type="date"
            className="tasks_input"
            {...register("dueDate", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl text-l_green">
            <h1>Priority:-</h1>
          </div>
          <div className="flex gap-10">
            <label htmlFor="">Low : </label>
            <input
              type="radio"
              name="priority"
              value="low"
              {...register("priority")}
            />
            <label htmlFor="">Medium : </label>
            <input
              type="radio"
              name="priority"
              value="medium"
              {...register("priority")}
            />
            <label htmlFor="">High : </label>
            <input
              type="radio"
              name="priority"
              value="high"
              {...register("priority")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-start items-center gap-1 border w-fit p-3 text-l_green font-bold border-d_green rounded-lg"
        >
          Create <CiSquarePlus className="text-white text-xl" />{" "}
        </button>
      </form>
    </div>
  );
};

export default Tasks;
