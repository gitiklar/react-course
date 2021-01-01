
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import YouTubePlayer from 'youtube-player';


function YouTubePlayerComponent({videosIdList}) {
  const [currentId , setCurrentId] = useState(videosIdList[0]);
  const [isPlay , setIsPlay] = useState(false);
  const layerDivRef = useRef(null);
  const playRef = useRef(null);

  useEffect(()=>{
     playRef.current = YouTubePlayer(layerDivRef.current.id);
  } , []);

  useEffect(()=>{
    playRef.current.loadVideoById(currentId);
    playRef.current.stopVideo();
  } , [currentId]);

  useEffect(()=>{
    isPlay ? playRef.current.playVideo(): playRef.current.stopVideo();
  } , [isPlay]);

  function playOrStop() {
    setIsPlay(oldVal=>!oldVal);
  }

  function changedIdHandler(e) {
    setCurrentId(e.target.value);
  }

  return(
      <>
        <div id={"divForPlayer"} ref={layerDivRef}/>
        <div>
          <select defaultValue="default" onChange={changedIdHandler}>
            <option disabled value="default">Please Choose A Player</option>
            {videosIdList.map((videoId , index)=>(
              <option key={index} value={videoId}>Video number {index+1}</option>
            ))}
          </select>
        </div>
        <button onClick={playOrStop}>Play/stop</button>
      </>
  );
}

const App = () => {
  const videosIdList = ['etBJl2vfhb4',  'dxdfIQLcWN8',  'rFn5TbT_GgU',  'rj4t2oIhjSE',  'xZWSaQSG1Ws'];
  return (
    <YouTubePlayerComponent videosIdList = {videosIdList}/>
  );
}

ReactDOM.render(<App/> , document.querySelector('main'));