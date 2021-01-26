import React from 'react';

export default function MainGameArea( { countOfSquers , checkClick , indexOfRed }) {  
    const style = {width: "25%", border: "1px solid black", };
    return (
        <div className = "main">
            {
                new Array(countOfSquers).fill(0).map((_ , i)=>(
                    <div className={ i === indexOfRed ? "red" : "white"} 
                        style={style} 
                        key={i} 
                        onClick={()=> {checkClick(i);}}>
                    </div>
                ))
            }
        </div>
    );
}