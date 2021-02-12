import React, { useState } from 'react';
import Square from '../Square/';



function DisplayBoard() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    function handleClick(index) {
        const gridSquares = [...squares.splice(0, index), 'X', ...squares.splice(index + 1)];
        setSquares(gridSquares);
    }

    function RenderSquare(i) {
        return (
            <Square index={squares[i]} handleClick={handleClick} />
        )
    }

    return (
        <div>
            <div className="status">Game Status</div>
            <div className="board-row">
                {RenderSquare(0)}
                {RenderSquare(1, handleClick)}
                {RenderSquare(2, handleClick)}
            </div>
            <div className="board-row">
                {RenderSquare(3, handleClick)}
                {RenderSquare(4, handleClick)}
                {RenderSquare(5, handleClick)}
            </div>
            <div className="board-row">
                {RenderSquare(6, handleClick)}
                {RenderSquare(7, handleClick)}
                {RenderSquare(8, handleClick)}
            </div>
        </div>
    )
}

export { DisplayBoard };