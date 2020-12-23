import React from 'react';
import { useState } from 'react';

import MainGameArea from './main-game-area';
import SideBox from './side-box';

export default function GameCatchTheRed(props) {
    const { countOfSquers } = props;
    const [score , setScore] = useState(0);
    const [indexOfRed , setIndexOfRed] = useState(randomNumberFromZeroToCount());

    function updateScore(goodClick) {
        goodClick  && setScore(score + 10);
        !goodClick && setScore(score - 5);
    }
      
    function randomNumberFromZeroToCount() {
        return Math.floor(Math.random()*countOfSquers);
    }

    function randomNewRed() {
        setIndexOfRed(randomNumberFromZeroToCount());
    }

    function newGame() {
        setScore(0);
        randomNewRed();
    }

    return (
        <>
            <h1>Catch the red</h1>
            <MainGameArea countOfSquers = {countOfSquers} updateScore = {updateScore} indexOfRed = {indexOfRed} randomNewRed = {randomNewRed}/>
            <SideBox score = {score} newGame = {newGame}/>
        </>
    );
}