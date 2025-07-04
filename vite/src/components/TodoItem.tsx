import React from "react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onToggle(todo.id)}
        style={{ cursor: "pointer" }}
      >
        {todo.text}
      </span>
      <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
