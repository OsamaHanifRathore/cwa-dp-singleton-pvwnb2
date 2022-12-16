import React, { useState } from 'react';
import TodoList from './TodoList';
import './style.css';
import todosInstance from './Todos';

export default function App() {
  const [todos, setTodos] = useState(todosInstance.getTodos());
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ marginTop: 20 }}>
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
      <div style={{ marginTop: 20 }}>
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
    </div>
  );
}
