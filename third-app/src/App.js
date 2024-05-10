// import logo from './logo.svg';
// import Card from "./Card";
// import './App.css';
//
// function App() {
//   return (
//       <div id="app">
//         <h1>Available Experts</h1>
//         <Card name="Anthony Blake">
//           <p>
//             Blake is a professor of Computer Science at the University of
//             Illinois.
//           </p>
//           <p>
//             <a href="mailto:blake@example.com">Email Anthony</a>
//           </p>
//         </Card>
//       </div>
//   );
// }
//
// export default App;

                                

                            // 2nd task code //



// import React from 'react';
// import './App.css';

// export default function App() {
//     const [price, setPrice] = React.useState(100);

//     function handleClick() {
//         setPrice(75);
//     }

//     return (
//         <div>
//             <p data-testid="price">${price}</p>
//             <button onClick={handleClick}>Apply Discount</button>
//         </div>
//     );
// }




import React from 'react';
// import { useState } from 'react';
 import './App.css';
 
function App() {
  const [choice, setChoice] = React.useState(null);
 
  let textColor = 'white';
 
  if (choice === 'yes') {
    textColor = 'green';
  } else if (choice === 'no') {
    textColor = 'red';
  }
 
  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}
export default App;

