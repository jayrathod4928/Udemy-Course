// import logo from './logo.svg';
import reactImg from '../src/Img/react-core-concepts.png';

// import Image from './logoreact.png';
import {CORE_CONCEPTS} from "./data.js";
import './App.css';
// import './index.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1));

}
function App() {

     const description = reactDescriptions[getRandomInt(2)]

  return (
      <div>
        <header>
          <img src={reactImg} alt=""/>
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>

        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcept title = {CORE_CONCEPTS[0].title}
                                 description = {CORE_CONCEPTS[0].description}
                                 image = {CORE_CONCEPTS[0].image}
                    />

                    <CoreConcept title = {CORE_CONCEPTS[1].title}
                                 description = {CORE_CONCEPTS[1].description}
                                 image = {CORE_CONCEPTS[1].image} />

                    <CoreConcept title = {CORE_CONCEPTS[2].title}
                                 description = {CORE_CONCEPTS[2].description}
                                 image = {CORE_CONCEPTS[2].image}/>

                    <CoreConcept title = {CORE_CONCEPTS[3].title}
                                 description = {CORE_CONCEPTS[3].description}
                                 image = {CORE_CONCEPTS[3].image}/>

                </ul>

            </section>
            {/*<h2>Time to get started!</h2>*/}
        </main>
      </div>


  );
}

function CoreConcept(props){
    return( <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
    );
}
export default App;
