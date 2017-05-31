import React from 'react';
import ReactDOM from 'react-dom';

const TodoHeader = ({
  onCreateTodo,
  onChangeText,
  text
}) => (
  <div>
    <h1>Todo List</h1>
    <input type="text" value={text} onChange={onChangeText}/>
    <button onClick={onCreateTodo}>Send</button>
  </div>
);

export default TodoHeader
