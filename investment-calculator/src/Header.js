import logo from './investment-calculator-logo.png';
export default function Header(){
    return(
            <header id= "header">
                <img src = {logo} alt='logo'></img>
                <h1>Investment Calculator</h1>
            </header>
    );
}