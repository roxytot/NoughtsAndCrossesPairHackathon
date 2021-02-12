import React, { useState } from 'react';
import Square from '../Square/';
import Button from '../Button/';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true); //start with 'X'
    console.log(squares);

    function newGame() {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }
    function handleClick(index) {
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        if (xIsNext === true) {
            const gridSquares = [...squares.slice(0, index), 'X', ...squares.slice(index + 1)];
            setSquares(gridSquares);
        }
        else {
            const gridSquares = [...squares.slice(0, index), 'O', ...squares.slice(index + 1)];
            setSquares(gridSquares);
        }
        setXIsNext(!xIsNext); // change turns
        console.log(squares);
    }

    function renderSquare(i) {
        return (
            <Square value={squares[i]} handleClick={() => handleClick(i)} />
        )
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    }
    else if (squares.includes(null) === false) {
        status = "No winner! Try again"
    }

    else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div className="grid-container">
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div>
                <Button newGame={newGame}></Button>

            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;

}

export default Board;