import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleToggleComplete = (index) => {
    // Create a copy of the current todo list
    const updatedTodoList = [...todoList];

    // Toggle the completed status of the selected todo item
    updatedTodoList[index].completed = !updatedTodoList[index].completed;

    // Update the todo list state
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
