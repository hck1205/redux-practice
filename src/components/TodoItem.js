import React from "react";
import "./TodoItem.css";

function TodoItem({ todo }) {
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
