import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icons.js";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
    setNewTask("");
  };

  const clearTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task to clear");
      return;
    }
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <div className="inputfield">
          <textarea
            id="task-input"
            className="textarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Write your task here..."
          />
          <div className="input-buttons">
            <button className="buttoninput" onClick={addTask}>
              <FontAwesomeIcon icon="plus" />
            </button>
            <button className="clearinput" onClick={clearTask}>
              <FontAwesomeIcon icon="eraser" />
            </button>
          </div>
        </div>
      </div>

      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
      <Footer />
    </div>
  );
}

export default App;