import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import TaskCard from './AllTasksComponents/TaskCard';

const CalendarApp = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async (date) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5001/api/tasks/${date.toISOString().split('T')[0]}`);
      setTasks(response.data);
    } catch {
      setError('Failed to fetch tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchTasks(selectedDate);
    } else {
      setTasks([]);
    }
  }, [selectedDate]);

  return (
    <div className="flex bg-gray-950 justify-center items-center h-screen w-full mt-16">
      <div className="w-1/2 h-3/5 p-6 justify-center shadow-lg shadow-black items-center border-l-4 border-t-4 bg-gray-900">
        <h2 className="text-2xl mb-4 text-white">Select a Date</h2>
        <Calendar 
          onChange={setSelectedDate} 
          value={selectedDate} 
          className="bg-white text-black h-5/6 w-full shadow" // Use grid for the calendar
          tileClassName="flex justify-center items-center h-16  w-full border border-transparent shadow-xl shadow- hover:bg-gray-700" // Custom tile class
        />
      </div>
      <div className="w-1/2 h-3/5 bg-gray-900 border-t-4 p-6 text-white shadow=black rounded-r-xl">
        <h2 className="text-2xl mb-4">
          Tasks for {selectedDate ? selectedDate.toISOString().split('T')[0] : 'No Date Selected'}
        </h2>
        {loading ? <p>Loading tasks...</p> : error ? <p className="text-red-500">{error}</p> : (
          tasks.length > 0 ? (
            <ul className="list-none">
              {tasks.map((task) => (
        <TaskCard key={task.id} task={task} /> // Add a unique key prop
      ))}
            </ul>
          ) : <p>No tasks for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarApp;