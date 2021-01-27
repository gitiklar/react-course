import React from 'react';

import useRemoteData from './useRemoteData';

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
    const [data , isLoading , error] = useRemoteData(`https://swapi.dev/api/films/${id}/`);

    if (error) return <p className='error'>{error}</p>

    if (isLoading) return <p className='loading'> Loading film , please wait... </p>

    return (
        <>
            <ShowFilmInfo data = {data}/>
        </>
    );
}