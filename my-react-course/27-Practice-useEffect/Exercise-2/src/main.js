import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../styles/main.scss';

function FilmsShowInfo({data}) {
    return(
        <div>
            <p> Title: {data.title}</p>
            <p> Episode id: {data.episode_id}</p>
            <p> Opening crawl: {data.opening_crawl}</p>
            <p> Director: {data.director}</p>
            <p> Producer: {data.producer}</p>
            <p> Release_date: {data.release_date}</p>
        </div>
    );
}

export function FilmsStarWars({id}) {
    const [data, setData] = useState(null);

    useEffect(()=>{
        setData(null);
        const xhr = $.getJSON(`https://swapi.dev/api/films/${id}/`, setData);
        return(()=>{ xhr.abort();});
    } , [id]);

    return (
        <div>
            {data ? <FilmsShowInfo data={data}/> : <div> loading, please wait... </div>}
        </div>
    )
}

const App = () => {
    const [id , setFilmId] = useState(1);

    return (
        <>
            <h1>Exercise-2</h1>
            <input type="number" value={id} onChange={e => setFilmId(e.target.value)}/>
            <FilmsStarWars id={id}/>
        </>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));