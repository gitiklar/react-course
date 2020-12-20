import React from 'react';

export default function BtnNewGame(props) {
    const {disabledBtnNewGame , newGameFunction} = props;
    return (
        <button disabled={disabledBtnNewGame} className="btn btn-secondary btn-lg" onClick = {newGameFunction}>New Game</button>
    );
}