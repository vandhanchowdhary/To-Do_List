import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ToDoItem({ task, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (editedText.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div
      className="listitem"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <div className="listTask">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="textarea"
            style={{ flexGrow: 1 }}
          />
        ) : (
          <li
            style={{
              flexGrow: 1,
              textDecoration: task.completed ? "line-through" : "none",
              listStyle: "none",
              wordWrap: "break-word",
            }}
          >
            {task.text}
          </li>
        )}
      </div>
      <div className="taskAction">
        {isEditing ? (
          <button className="buttoninput" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="buttoninput" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="delete-task" onClick={() => onDelete(task.id)}>
          <FontAwesomeIcon icon="trash" />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
// This component represents a single to-do item in the list.
// It allows users to toggle completion, edit the task, and delete it.
