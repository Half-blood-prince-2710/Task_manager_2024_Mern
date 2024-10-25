import React from "react";
import AllTasks from "./components/AllTasks";
import CompletedTasks from "./components/CompletedTasks";
import DueTasks from "./components/DueTasks";
import IntroPage from "./components/IntroPage";
import NavBar from "./components/Layout/NavBar";
import taskManageImage from "./assets/taskmanage.jpg";
import CalendarApp from "./components/CalendarApp";
const App = () => {
  return (
    <div className="w-full bg-gray-950 h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-grow">
        <div className="w-3/5 h-full flex items-center">
          <img src={taskManageImage} alt="Illustration of task management" className="shadow-lg border-2 border-white rounded-xl m-2 p-2"/>
        </div>
        <AllTasks />
      </div>
      <div className="flex-grow"> {/* Ensure this div allows growth */}
        <CalendarApp className="h-full" /> {/* Ensure Calender can take full height */}
      </div>
    </div>
  );
};

export default App;
