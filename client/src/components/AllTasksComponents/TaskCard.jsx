import React from 'react';

const TaskCard = ({ task }) => {

  // Destructure the properties from the task object

  const { id, title, description, priority, status } = task;


  return (

    <div key={id} className="border p-4 rounded shadow-xl shadow-black">

      <h1 className="font-bold text-lg">{title}</h1>

      <p>{description}</p>

      <p>Priority: {priority}</p>

      <p>Status: {status}</p>

    </div>

  );

};


export default TaskCard;
