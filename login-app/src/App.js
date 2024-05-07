// import logo from './logo.svg';
import './App.css';

// export const user = {
//     email: '',
//     password: '',
//     loggedIn: false,
// };
//
// function App() {
//     function handleLogin() {
//         user.email = 'test@example.com';
//         user.password = 'test';
//         user.loggedIn = true;
//     }
//   return (
//       <div id="app">
//         <h1>User Login</h1>
//         <p>
//           <label>Email</label>
//           <input type="email"/>
//         </p>
//
//         <p>
//           <label>Password</label>
//           <input type="password"/>
//         </p>
//
//         <p id="actions">
//           <button onClick={handleLogin}>Login</button>
//         </p>
//       </div>
//   );
// }
//
// export default App;

export const user ={
   name:'',
}

function App(){
    function handleCreateUser(name){
        user.name = name;
    }
    return(
        <div id="app">
            <h1>User Login</h1>
            <p>
                <label>Name</label>
                <input type="text"/>
            </p>
            <p id="actions"></p>
            <button onClick={() => handleCreateUser('Max')}>Create User</button>
        </div>
    )
}
export default App;

