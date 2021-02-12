import React from 'react';
import Square from '../Square/';

function Board(i)
{
    return(
        <Square value={i}/> 
    )
}

function DisplayBoard()
{
   return(
       <div>
           <div className="status">Game Status</div>
           <div className="board-row">
               {Board(0)}
               {Board(1)}
               {Board(2)}
           </div>
           <div className="board-row">
               {Board(3)}
               {Board(4)}
               {Board(5)}
           </div>
           <div className="board-row">
               {Board(6)}
               {Board(7)}
               {Board(8)}
           </div>
       </div>
   ) 
}

export {Board, DisplayBoard};