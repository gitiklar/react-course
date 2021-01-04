import React from 'react' ;

import StarWarsFilm from './starWarsFilm';
import dataById from '../src/dataById';

function ShowCharacterInfo({data}) {
    return (
        <>
            <div className="showCharacterInfo">
                <h1>Character Info</h1>
                <div>
                    <p><b>name: </b>{data.name}</p>
                    <p><b>height: </b>{data.height}</p>
                    <p><b>mass: </b>{data.mass}</p>
                    <p><b>hair color: </b>{data.hair_color}</p>
                    <p><b>skin color: </b>{data.skin_color}</p>
                    <p><b>eye color: </b>{data.eye_color}</p>
                    <p><b>birth year: </b>{data.birth_year}</p>
                    <p><b>gender: </b>{data.gender}</p>
                </div>
            </div>
            <div className="starWarsFilm">
                <h2>Character Films</h2>
                {data.films.map((filmUrl , index) => <div key={filmUrl}> 
                                                          <span className="h3FilmName number"> {index + 1}.) </span> 
                                                          <StarWarsFilm id = {filmUrl.split('/')[5]}/> 
                                                     </div> 
                )}
            </div>
        </>
    );
}

export default function StarWarsCharacter({id}) {
    const data = dataById(`https://swapi.dev/api/people/${id}/`);
    return (
        <>
            {data ? <ShowCharacterInfo data = {data}/> : <div> Loading , please wait ...</div>}
        </>
    );
}