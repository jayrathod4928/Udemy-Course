import {useState} from 'react';
import Header from "./Header";
import './App.css';
import TabButton from "./TabButton";
import { EXAMPLES } from './data.js';
import Concepts from "./Concepts.js";
import Example from "./Example";
function App() {


    return (
        <>
            <Header/>
            <main>
                <Concepts/>
                <Example/>

            </main>
        </>
    );
}


export default App;
