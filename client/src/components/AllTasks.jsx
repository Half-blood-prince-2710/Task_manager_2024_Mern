import React, { useState } from "react"; // Import useState
import NewTask from "./AllTasksComponents/NewTask";
import TaskCards from "./AllTasksComponents/TaskCards";

const TaskList = () => {
  const [addTaskShow, setAddTaskShow] = useState(false);

  const handleClick = () => {
    setAddTaskShow(!addTaskShow);
  };

  return (
    <div className="bg-gray-950 w-2/5 h-screen m-auto flex justify-center items-center">
      <div className="w-4/5 bg-gray-900 flex flex-col h-5/6 shadow-lg border-2">
        <div className="flex justify-between mx-4 mt-4 p-4">
          <h1 className="text-heading font-bold"> {!addTaskShow ? 'All Tasks': 'Create Task'}</h1>
          <button
            className="bg-indigo-800 font-bold border-1 rounded-xl shadow-md shadow-black p-4 w-fit hover:bg-indigo-950"
            onClick={handleClick}
          >
            {addTaskShow ? 'All Tasks': 'Create Task'}
          </button>
        </div>
        <div className="h-full">
          {addTaskShow ? <NewTask /> : <TaskCards />}
        </div>
      </div>
    </div>
  );
};

export default TaskList;