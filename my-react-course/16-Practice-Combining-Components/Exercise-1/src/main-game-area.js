import React from 'react';

import Squers from './squers';

export default function MainGameArea(props) {
    const { countOfSquers , updateScore , indexOfRed , randomNewRed} = props;

    return (
        <div className = "main">
            <Squers countOfSquers = {countOfSquers}  indexOfRed = {indexOfRed} randomNewRed = {randomNewRed} updateScore = {updateScore}/>
        </div>
    );
}