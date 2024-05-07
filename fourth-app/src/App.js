import './App.css';
import React from 'react';
import Todo from './Todo';

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
 function App() {
  return (
      <ul>
        {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
      </ul>
  );
}

export default App;
