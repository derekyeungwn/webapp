import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';

const TodoList = ({
  todos,
}) => (
  <ul>
    {
      todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
        </li>
      ))
    }
  </ul>
);

export default TodoList;
