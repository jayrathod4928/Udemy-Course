// import './App.css';
// import React from 'react';
// import Todo from './Todo.js';
//
// export const DUMMY_TODOS = [
//   'Learn React',
//   'Practice React',
//   'Profit!'
// ];
//
// // don't change the Component name "App"
//  function App() {
//   return (
//       <ul>
//         {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
//       </ul>
//   );
// }
//
// export default App;

import './App.css';
import React from 'react';

function Summary({ text }) {
    return (
        <>
            <h1>Summary</h1>
            <p>{text}</p>
        </>
    );
}
function App() {
    return (
        <div id="app" data-testid="app">
            <Summary text="Fragments help you avoid unnecessary HTML elements." />
        </div>
    );
}

export default App;


