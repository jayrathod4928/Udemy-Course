// // import logo from './logo.svg';
// import './App.css';
// export  function CourseGoal({title,description}){
//   return(
//       <li>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </li>
//   );
// }
//
// function App() {
//   return (
//     <div id="app" data-test-id="app">
//       <h1>Time to Practice</h1>
//       <p>One course, many goals! 🎯 </p>
//       <ul>
//         <CourseGoal
//             title = "learn react"
//             description = "In-depth"/>
//         <CourseGoal
//             title = "Practice"
//             description = "Practice working with React components etc"/>
//       </ul>
//
//     </div>
//   );
// }
//
// export default App;

// import React from 'react';
// import './App.css';
//
// // don't change the Component name "App"
// export default function App() {
//     const [isDeleting, setIsDeleting] = React.useState(false);
//
//     function deleteHandler() {
//         setIsDeleting(true);
//     }
//
//     function proceedHandler() {
//         setIsDeleting(false);
//     }
//
//     let warning;
//
//     if (isDeleting) {
//         warning = (
//             <div data-testid="alert" id="alert">
//                 <h2>Are you sure?</h2>
//                 <p>These changes can't be reverted!</p>
//                 <button onClick={proceedHandler}>Proceed</button>
//             </div>
//         );
//     }
//
//     return (
//         <div>
//             {warning}
//             <button onClick={deleteHandler}>Delete</button>
//         </div>
//     );
// }

 // 3rd prac code

import React from 'react';
import './App.css';


export default function App() {
    const [color, setColor] = React.useState(false);

    function handleClick() {
        setColor(color => !color) ;
    }
    return (
        <div>
            <p className={color ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}

