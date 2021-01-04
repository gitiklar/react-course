import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function ShowFilmInfo({data , number}) {
    return(
        <div className="showFilmInfo">
            <h3>{number}.) {data.title}</h3>
            <p><b>Episode id:</b> {data.episode_id}</p>
            <p><b>Opening crawl:</b></p> 
            <div>{data.opening_crawl}</div>
            <p><b>Director:</b> {data.director}</p>
            <p><b>Producer:</b> {data.producer}</p>
            <p><b>Release_date:</b> {data.release_date}</p>
        </div>
    );
}

export default function StarWarsFilm({filmUrl , number}) {
    const [data , setData] = useState(null);

    useEffect(()=>{
        setData(null);
        const xhr = $.getJSON(filmUrl , setData);
        return ()=>xhr.abort();
    },[filmUrl]);

    return (
        <>
            {data ? <ShowFilmInfo data = {data} number = {number}/> : <div> loading film , please wait... </div>}
        </>
    )
}