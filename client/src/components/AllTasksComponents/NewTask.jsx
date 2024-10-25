import React, { useState } from 'react';
import axios from 'axios';

const NewTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '', // New field for priority
    status: ''    // New field for status
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task)
    if (!task.title || !task.description || !task.priority || !task.status || !task.dueDate) {
      alert('Title, Description, DueDate, Priority, and Status are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/tasks/add', task);
      console.log(response.data);
      // Optionally reset the form after successful submission
      setTask({
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        status: ''
      });
    } catch (error) {
      console.error('There was an error submitting the task:', error);
      alert('Failed to add task. Please try again.');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask({ ...task, [id]: value });

  };

  return (
    <div className="h-full flex items-center justify-center p-4 md:p-8">
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
    
    {/* Title Field */}
    <div className="flex flex-col rounded">
      <label className="text-white font-semibold mb-1" htmlFor="title">
        Title:
      </label>
      <input
        type="text"
        id="title"
        value={task.title}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    {/* Description Field */}
    <div className="flex flex-col">
      <label className="text-white font-semibold mb-1" htmlFor="description">
        Description:
      </label>
      <textarea
        id="description"
        value={task.description}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
        rows="4"
      />
    </div>

    {/* Due Date Field */}
    <div className="flex flex-col">
      <label className="text-white font-semibold mb-1" htmlFor="dueDate">
        Due Date:
      </label>
      <input
        type="date"
        id="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
    </div>

    {/* Priority Field */}
    <div className="flex flex-col">
      <label className="text-white font-semibold mb-1" htmlFor="priority">
        Priority:
      </label>
      <select
        id="priority"
        value={task.priority}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
      >
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

    {/* Status Field */}
    <div className="flex flex-col">
      <label className="text-white font-semibold mb-1" htmlFor="status">
        Status:
      </label>
      <select
        id="status"
        value={task.status}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
      >
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </div>
  </form>
</div>

  );
};

export default NewTask;