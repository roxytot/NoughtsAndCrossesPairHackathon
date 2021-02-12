
import "./Game.css";
import Board from '../Board';



function Game() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="titles">
          <h1>Noughts and Tac-Toe!</h1>

          <h5>Realistic tile shifting O's-and-X's game! Can you keep your calm, as the tiles spin?</h5>
        </div>
        <Board />
      </header>
    </div>
  );
}

export default Game;
