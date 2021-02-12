import React from 'react';

function Button({ newGame }) {
    return (
        <button onClick={newGame} className="reset-button">New Game</button>
    )
}

export default Button
