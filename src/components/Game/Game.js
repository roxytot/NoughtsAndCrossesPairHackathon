
import "./Game.css";
import {DisplayBoard} from '../Board';

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hacking Bootcampers!</h1>
        <DisplayBoard/>
      </header>
    </div>
  );
}

export default Game;
