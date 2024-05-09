// import './App.css';
import Player from "./Player";
import GameBoard from "./GameBoard";
import {useState} from "react";
import Log from "./Log";

function App() {
    const [gameTurns, setGameTurns] =useState([]);
    // const [activePlayer, setActivePlayer] = useState('X');
    let currentPlayer = 'X';

    if (gameTurns.length > 0 &&  gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }


    function handleSelectSquare(rowIndex , colIndex) {
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns((prevTurns) => {
            let currentPlayer = 'X';

            if (prevTurns.length > 0 &&  prevTurns[0].player === 'X'){
                currentPlayer = 'O';
            }

            const updatedTurns = [{square : {row : rowIndex, col: colIndex}, player : currentPlayer }
            , ...prevTurns,
            ];

                return updatedTurns;

        });

    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>

                </ol>
                <GameBoard onSelectSquare={handleSelectSquare}
                turns = {gameTurns}
                />
            </div>
            <Log turns={gameTurns} />
        </main>

    );
}

export default App;
