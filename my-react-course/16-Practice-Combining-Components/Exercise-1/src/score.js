import React from 'react';

export default function Score(props) {
    const { score } =props;

    return (
        <div className="score">
            <h1>Score:</h1>
            <p> {score} </p>
        </div>
    );
}