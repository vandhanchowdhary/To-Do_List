import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onDelete, onToggleComplete, onEdit }) {
  return (
    <div className="todolist" id="todo">
      <div className="tododiv">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
