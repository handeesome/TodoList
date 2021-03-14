import React from "react";

//import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={filteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
