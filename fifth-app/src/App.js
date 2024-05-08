import Input from './Input';
import './App.css';

function App() {
    return (
        <div id="content">
            <Input type="text" placeholder="Your name" />
            <Input richText placeholder="Your message" />
        </div>
    );
}

export default App;
