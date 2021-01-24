import React, { useState } from 'react';
import useRemoteData from './useRemoteData';

function Film({url}) {
    const [data , isLoading , error] = useRemoteData(url);

    if (error) {
        return <p className='error'>{error}</p>
    }

    if (isLoading) {
        return <p>Please wait, loading data...</p>
    }

    return (
        <p>{data.title}</p>
    )
}

function StarwarsCharacter({id}) {
    const [data , isLoading , error] = useRemoteData(`https://swapi.dev/api/people/${id}`);

    if (error) {
        return <p className='error'>{error}</p>
    }

    if (isLoading) {
        return <p>Please wait, loading data...</p>
    }

    return (
        <div>
            <p>Character name: {data.name}</p>
            <p>Character height: {data.height}</p>
            <p>Character mass: {data.mass}</p>
            <p>Character hair_color: {data.hair_color}</p>
            <p>Character eye_color: {data.eye_color}</p>
            <h1>Films:</h1>
            {data.films.map(filmUrl=>(
                <Film key={filmUrl} url={filmUrl}/>
            ))}
        </div>
    );
}

export default function StarwarsCharacters() {
    const [id, setId] = useState(1);
    return (
        <>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
            <StarwarsCharacter id={id}/>
        </>
    );
}