import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from './containers/TodoContainer/TodoHeaderContainer'
import TodoListContainer from './containers/TodoContainer/TodoListContainer'

const TodoApp = () => (
  <div>
    <TodoHeaderContainer/>
    <TodoListContainer/>
  </div>
);

export default TodoApp;
