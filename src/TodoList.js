import React from 'react';

const todoList = [
  {
    id: 1,
    title: "item 1"
  },
  {
    id: 2,
    title: "item 2"
  },
  {
    id: 3,
    title: "item 3"
  }
];

const TodoList = () => {
  return (
      <ul>
        {todoList.map((item) => {
          return <li key={`item-{item.id}`}>{item.title}</li>
        })}
      </ul>
    );
}

export default TodoList;
