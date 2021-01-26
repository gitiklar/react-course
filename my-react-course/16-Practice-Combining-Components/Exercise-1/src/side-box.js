import React from 'react';

export default function SideBox({ score , newGame}) {
    return (
        <div className="sideBox">
            <div className="score">
                <h1>Score:</h1>
                <p> {score} </p>
            </div>
            <button onClick={newGame} className="newGame btn btn-secondary btn-lg btn-block">New Game</button>
        </div>
    );
}