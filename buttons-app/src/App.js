// import Button from './Button';
// import HomeIcon from './HomeIcon';
// import PlusIcon from './PlusIcon';
// import './App.css'
//
// function App() {
//   return (
//       <div id="app">
//         <section>
//           <h2>Filled Button (Default)</h2>
//           <p>
//             <Button>Default</Button>
//           </p>
//           <p>
//             <Button mode="filled">Filled (Default)</Button>
//           </p>
//         </section>
//         <section>
//           <h2>Button with Outline</h2>
//           <p>
//             <Button mode="outline">Outline</Button>
//           </p>
//         </section>
//         <section>
//           <h2>Text-only Button</h2>
//           <p>
//             <Button mode="text">Text</Button>
//           </p>
//         </section>
//         <section>
//           <h2>Button with Icon</h2>
//           <p>
//             <Button Icon={HomeIcon}>Home</Button>
//           </p>
//           <p>
//             <Button Icon={PlusIcon} mode="text">
//               Add
//             </Button>
//           </p>
//         </section>
//         <section>
//           <h2>Buttons Should Support Any Props</h2>
//           <p>
//             <Button mode="filled" disabled>
//               Disabled
//             </Button>
//           </p>
//           <p>
//             <Button onClick={() => console.log('Clicked!')}>Click me</Button>
//           </p>
//         </section>
//       </div>
//   );
// }
//
// export default App;




// 2nd exercise

import React from 'react';
import Review from "./Review.js";
import './App.css';
import {useState} from "react";

// don't change the Component name "App"
// import Review from './Review';

function App() {
    const [studentName, setStudentName] = useState('');
    const [feedback, setFeedback] = useState('');

    function handleChangeName(event) {
        setStudentName(event.target.value);
    }

    function handleChangeFeedback(event) {
        setFeedback(event.target.value);
    }

    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea onChange={handleChangeFeedback} value={feedback} />
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" onChange={handleChangeName} value={studentName} />
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={feedback} student={studentName} />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}

export default App;
