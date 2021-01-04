import '../styles/main.scss';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';


function ViemoPlayer({listIds}) {
    const [currentId , setCurrentId] = useState(listIds[0]);
    const [times , setTimes] = useState({});
    const vimeoPlayerDivRef = useRef(null);
    const vimeoPlayerRef = useRef(null);

    useEffect(()=>{
        vimeoPlayerRef.current = new Player (vimeoPlayerDivRef.current);
    },[]);

    useEffect(()=>{
        vimeoPlayerRef.current.loadVideo(currentId).then(()=> { vimeoPlayerRef.current.setCurrentTime(times[currentId] || 0); });
        return(saveCurrentTimeBeforeLive);
    },[currentId]);

    function saveCurrentTimeBeforeLive() {
        vimeoPlayerRef.current.getCurrentTime().then(seconds=>{
            if(!seconds) return;
            setTimes(oldTimes => { oldTimes[currentId] = seconds; return {...oldTimes}; });
        });
    }

    function changeSelectedHandler(e) {
        setCurrentId(e.target.value);
    }

    return (
        <>
            <select value={currentId} onChange={changeSelectedHandler}>
                <option value="default" disabled>Please choose a video</option>
                {
                    listIds.map((id, index)=>(
                        <option value={id} key={id}>video number {index+1}</option>
                    ))
                }
            </select>
            <div data-vimeo-id={currentId} ref={vimeoPlayerDivRef}/>
        </>
    );
}

const App = () =>{
    const listIds = ['121998615' , '364064317' , '417384705'];
    return(
        <>
            <h1>Viemo</h1>
            <ViemoPlayer listIds = {listIds}/>
        </>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));

