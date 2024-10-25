import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const TaskCards = () => {
  // Initialize tasks as an empty array
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/tasks/');
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // console.log(tasks); // For debugging

  return (
    <div className="flex flex-col gap-4 p-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> // Add a unique key prop
      ))}
    </div>
  );
};

export default TaskCards;