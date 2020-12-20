import React from 'react';

export default function GuessInput(props) {
    const {input , setInput ,checkCurrentGuessInput , disabledInput} = props;

    function handlerInputChange(e) {
        const number = Number(e.target.value);
        number > 1000 ? setInput(1000) : number < 0 ? setInput(0) : setInput(number);
    }

    function checkCurrentGuessInputIfEnter(e) {
        e.key === "Enter" && checkCurrentGuessInput(Number(input));
    }

    return (
        <label>
            <span>Guess a number between 1 to 1000 and press enter</span>
            <input type="number" disabled = { disabledInput } value={input} onChange={handlerInputChange} onKeyDown={checkCurrentGuessInputIfEnter}/>
        </label>
    );
}