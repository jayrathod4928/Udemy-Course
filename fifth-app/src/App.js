// import Input from './Input';
// import './App.css';

// function App() {
//     return (
//         <div id="content">
//             <Input type="text" placeholder="Your name" />
//             <Input richText placeholder="Your message" />
//         </div>
//     );
// }

// export default App;

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

