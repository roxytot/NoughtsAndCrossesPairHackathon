import React, { useState } from 'react';


function Square({ index, handleClick }) {

    return (
        <button className="square" onClick={() => { return handleClick(index) }}>
            { index}
        </button >
    )
}

export default Square;