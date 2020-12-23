import React from 'react';
import Score from './score';

export default function SideBox(props) {
    const { score , newGame} = props;
    return (
        <div className="sideBox">
            <Score score = {score}/>
            <button onClick={newGame} className="newGame btn btn-secondary btn-lg btn-block">New Game</button>
        </div>
    );
}