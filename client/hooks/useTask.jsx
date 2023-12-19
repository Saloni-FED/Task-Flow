import React from "react";
import { getAllTaskOfUser } from "../src/api";
import { useEffect, useState } from "react";
const useTask = () => {
  const [allTask, setAllTask] = useState([]);
  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getAllTaskOfUser();
      setAllTask(data);
    };
    fetchTask()
  }, []);
  return [allTask, setAllTask];
};

export default useTask;
