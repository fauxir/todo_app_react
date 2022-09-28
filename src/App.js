
import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [activityTitle, setActivityTitle] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  const addTask = () => {
    setList([
      ...list,
      { title: activityTitle, description: activityDescription, id: id},
    ]);
    setActivityTitle("");
    setActivityDescription("");
    setId(0);
  };

  const updateId = () => {
    setId(id + 1)
  }

  const onDelete = (id) => {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }
 

  return (
    <div className="main-container">
      <h1 className="title"> To do list</h1>
      <div className="input-containers">
        <div className="activity">
        <div className="activity-label-container">
          <label className="activity-label">Activity title:</label>
          </div>
          <input
            minLength="5"
            id="title"
            onChange={(e) => {
              setActivityTitle(e.target.value);
            }}
            className="activity-input"
          ></input>
        </div>
        <div className="description">
        <div>
          <label className="description-label">Activity description:</label>
          </div>
          <input
            className="activity-input"
            minLength="5"
            onChange={(e) => {
              setActivityDescription(e.target.value);
            }}
          ></input>
        </div>
        <div className="submit-btn">
          <button onClick={() => addTask() & updateId()}>Submit</button>
        </div>
      </div>
      {list.map((task) => {
        return (
          <div key={task.id}>
          <div>
            <Task task={task.title} description={task.description} id={task.id}/>
            </div>
            <div className="done-btn">
            <button onClick={() =>{onDelete(task.id)}}>Done</button>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
