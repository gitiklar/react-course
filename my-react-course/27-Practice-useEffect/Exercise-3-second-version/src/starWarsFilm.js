import React from 'react';

import dataById from '../src/dataById';

function ShowFilmInfo({data}) {
    return(
        <>
            <span className="h3FilmName">{data.title}</span>
            <div className="showFilmInfo">
                <p><b>Episode id:</b> {data.episode_id}</p>
                <p><b>Opening crawl:</b></p>
                <div>{data.opening_crawl}</div>
                <p><b>Director:</b> {data.director}</p>
                <p><b>Producer:</b> {data.producer}</p>
                <p><b>Release_date:</b> {data.release_date}</p>
            </div>
        </>
    );
}

export default function StarWarsFilm({id}) {
    const data = dataById(`https://swapi.dev/api/films/${id}/`);

    return (
        <>
            {data ? <ShowFilmInfo data = {data}/> : <div> loading film , please wait... </div>}
        </>
    )
}