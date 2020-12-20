import React from 'react';
import Input from './input.js';
import { useState } from 'react';

export default function MultiInput() {
    const [inputValue , setInputValue] = useState('');

    function inputEventHandler(e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <Input inputValue = {inputValue} inputEventHandler = {inputEventHandler}/>
            <Input inputValue = {inputValue} inputEventHandler = {inputEventHandler}/>
            <Input inputValue = {inputValue} inputEventHandler = {inputEventHandler}/>
            <Input inputValue = {inputValue} inputEventHandler = {inputEventHandler}/>
            <Input inputValue = {inputValue} inputEventHandler = {inputEventHandler}/>           
        </>
    );
}