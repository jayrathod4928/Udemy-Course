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

import React from 'react';
import './App.css';

export default function App() {
    const [price, setPrice] = React.useState(100);

    function handleClick() {
        setPrice(75);
    }

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}

