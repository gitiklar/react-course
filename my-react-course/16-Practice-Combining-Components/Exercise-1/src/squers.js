import React from 'react';

export default function Squres(props) {
    const { countOfSquers , indexOfRed , randomNewRed ,updateScore} = props;

    const style = {
        width: "25%",
        border: "1px solid black",
    }

    function checkClick(indexOfClick) {
        const goodClick = indexOfClick === indexOfRed;
        goodClick && randomNewRed();
        updateScore(goodClick);
    }

    function getDivs() {
        const squres = [];
        for(let i=0 ; i < countOfSquers ; i++) {
            squres.push(
                <div className={ i === indexOfRed ? "red" : "white"} 
                     style={style} 
                     key={i} 
                     onClick={()=> {checkClick(i);}}>
                </div>
            );
        }
        return squres;
    }

    return (
        <>
            {
              getDivs()
            }
        </>
    );
}