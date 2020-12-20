import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import GuessInput from './guessInput.js';
import LabelIndication from './labelIndication.js';
import BtnNewGame from './btnNewGame.js';

function Game() {
    const [input , setInput] = useState('');
    const [indication , setIndication] = useState('');
    const [randomNumber , setRandomNumber] = useState(getRandomNumber());
    const [disabledBtnNewGame , setdisabledBtnNewGame] = useState(true);
    const [disabledInput , setdisabledInput] = useState(false);
    const indicationsObj = {
        'big':'Too big try again',
        'small':'Too small try again',
        'good':'Yes you guessed it!!!',
    }

    function getRandomNumber() {
        return Math.floor(Math.random()*1001);
    }

    function sleep(ms) {
        return new Promise((resolve , reject)=>{
            setTimeout(resolve, ms);
        });
    }

    function clearIndicateAndInput() {
        setIndication('');
        setInput('');
    }

    function newGameFunction() {
        clearIndicateAndInput();
        setRandomNumber(getRandomNumber());
        setdisabledBtnNewGame(true);
        setdisabledInput(false);
    }

    function setIndicationAccordingToGuess(number) {
        const confuse = Math.random() > 0.8;
        if (number > randomNumber) {
            !confuse ? setIndication(indicationsObj['big']) : setIndication(indicationsObj['small']);
        } else if(number < randomNumber) {
                !confuse ? setIndication(indicationsObj['small']) : setIndication(indicationsObj['big']);
            } else {
                    setIndication(indicationsObj['good']);
                }
    }

    async function checkCurrentGuessInput(number) {
        setIndicationAccordingToGuess(number);
        number === randomNumber && (setdisabledBtnNewGame(false) , setdisabledInput(true));
        number !== randomNumber && (await sleep(1500) , clearIndicateAndInput());
    }

    const propertiesObj = {input, setInput, checkCurrentGuessInput, disabledInput, indication, disabledBtnNewGame, newGameFunction,};

    return (
        <>
            <h1>Guess a number - exercise 3</h1>
            <GuessInput {...propertiesObj}/>
            <LabelIndication {...propertiesObj}/>
            <BtnNewGame {...propertiesObj}/>
        </>
    );
}

ReactDOM.render(<Game/> , document.querySelector('main'));