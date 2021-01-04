import React, { useEffect, useState } from 'react' ;
import $ from 'jquery';

import StarWarsFilm from './starWarsFilm';

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
                {data.films.map((filmUrl , index) => <StarWarsFilm key={filmUrl} filmUrl = {filmUrl} number={index+1}/>)}
            </div>
        </>
    );
}

export default function StarWarsCharacter({id}) {
    const [data , setData] = useState(null);

    useEffect(()=>{
        setData(null);
        const xhr = $.getJSON(`https://swapi.dev/api/people/${id}/` , setData);
        return () => xhr.abort();
    }, [id]);

    return (
        <>
            {data ? <ShowCharacterInfo data = {data}/> : <div> Loading , please wait ...</div>}
        </>
    );
}