import React from "react";
import { useState } from "react";
const Tasks = () => {
  const [show, setShow] = useState(false);
  const handleIsShow = () => {
    console.log(show)
    setShow((prevShow) => !prevShow);
  };
  return (
    <div>
      <button onClick={handleIsShow} className="border p-3">Create</button>
      {show && <input type="text" className="border w-fit "></input>}
    </div>
  );
};

export default Tasks;
