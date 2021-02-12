
import "./Game.css";
import { DisplayBoard } from '../Board';
import { useState } from "react";


function Game() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hacking Bootcampers!</h1>
        <DisplayBoard />
      </header>
    </div>
  );
}

export default Game;
