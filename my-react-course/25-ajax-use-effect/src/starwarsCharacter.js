import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function ShowCharacterInfo({dataCharacterDescription , dataFilms}) {
    return (
        <div>
            <p><b>name:</b>{dataCharacterDescription.name}</p>
            <p><b>hair color:</b>{dataCharacterDescription.hair_color}</p>
            <p><b>eye color:</b>{dataCharacterDescription.eye_color}</p>
            <ul>{dataFilms.map(dataFilm=><li key={dataFilm.title}>{dataFilm.title}</li>)}</ul>
        </div>
    )
}

export default function StarwarsCharacter({id}) {
    const [dataCharacterDescription , setDataCharacterDescription] = useState(null);
    const [dataFilms , setDataFilms] = useState(null);


    useEffect(()=>{
        if(!dataCharacterDescription) return;
        const filmsUrls = dataCharacterDescription.films;
        const xhrFilms = filmsUrls.map(filmsUrl=>$.getJSON(filmsUrl));
        Promise.all(xhrFilms).then(setDataFilms).catch(e=>console.log(e));
        return(()=>xhrFilms.forEach(xhrFilm => xhrFilm.abort()));
    },[dataCharacterDescription]);

    useEffect(()=>{
        setDataCharacterDescription(null);
        setDataFilms(null);
        const xhrDescription = $.getJSON(`https://swapi.dev/api/people/${id}/`, setDataCharacterDescription);
        return ()=> {xhrDescription.abort();}
    },[id]);

    return (
        <div>
            {dataCharacterDescription && dataFilms ? 
            <ShowCharacterInfo dataCharacterDescription = {dataCharacterDescription} dataFilms = {dataFilms}/> : 'loading, please wait...'}
        </div>
    );
}

/*
    //films comes one one
    function pushDataToDataFilms(data) {
        setDataFilms(oldData=>[...oldData||[], data]);
    }
    
    useEffect(()=>{
        if(!dataCharacterDescription) return;
        const filmsUrls = dataCharacterDescription.films;
        const xhrFilms = filmsUrls.map(filmsUrl=>$.getJSON(filmsUrl , pushDataToDataFilms));
        return(()=>xhrFilms.forEach(xhrFilm => xhrFilm.abort()));
    },[dataCharacterDescription]);
*/