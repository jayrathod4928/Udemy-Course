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


                                //2nd app


// import React from 'react';
 
// // don't change the Component name "App"
// export default function App() {
//     const [highlighted, setHighlighted] = React.useState(false);
    
//     function clickHandler() {
//         setHighlighted(isHighlighted => !isHighlighted);
//     }
    
//     return (
//         <div>
//             <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
//             <button onClick={clickHandler}>Toggle style</button>
//         </div>
//     );
// }

                                        /* 3rd app */


//  import React from 'react';

// import './App.css';

// // don't change the Component name "App"
// export default function App() {
//     const clickHandler = () => {
//         console.log('Clicked');
//     };
    
//     return (
//         <div>
//           <h2>You're logged in</h2>
//           <p>Welcome to your user profile!</p>
//           <button onClick={clickHandler}>Click me</button>
//         </div>
//     );
// }


                                            /* 4th app */

import React from 'react';
import './App.css';
 
function App() {
  const filePicker = React.useRef();
 
  function handleStartPickImage() {
    filePicker.current.click();
  }
 
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker} />
        <button onClick={handleStartPickImage}>Pick Image</button>
      </p>
    </div>
  );
}
export default App;

                                    


