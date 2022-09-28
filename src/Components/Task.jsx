import React from "react";
import "./Task.css"

function Task({ task, description }) {
  return (
    <div className="task">
      <h1>Task title: {task}</h1>
      <h3>Description: {description}</h3>
    </div>
  );
}

export default Task;
