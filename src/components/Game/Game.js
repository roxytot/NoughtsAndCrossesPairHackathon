
import "./Game.css";
import Board from '../Board';
import { useState } from "react";


function Game() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hacking Bootcampers!</h1>
        <Board />
      </header>
    </div>
  );
}

export default Game;
