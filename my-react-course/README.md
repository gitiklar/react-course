```JS
1-6 , 9 (class) Person                      Component
7-8             Counter                     Component
11/1            TimeInitConverter           Component
11/2            SynchronizedTextBoxes       Component
11/3            GuessingNumberGame          Component
11/4            ChooseColor                 Component
11/5            ChooseColors                Component
12              CounterDisplayMax           Component
13              SelectableList              Component
14              CounterDisplayMaxColor      Component
15              SelectedCountryAndCity      Component - Genery by component 'SelectedOptions' & Not genery
16/1            CatchTheRedGame             Component
16/2            FilterItemsFromAList        Component
16/3            FormWithThreePages         Component


```
# lists and key
example 1:
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from "lodash"

// Without key
function CheckableListOld({items}) {
  const [selected , setSelected] = useState(new Set());

  function handlerOnChange(add , item) {
    add && setSelected(new Set(selected.add(item)));
    !add && setSelected(new Set(selected.delete(item)));
  }

  return (
      <ul>
          {items.map(item =>(
            <li>
                <label>
                    {item}
                    <input type="checkbox" checked={selected.has(item)} onChange={(e)=>{handlerOnChange(e.target.checked , item)}}/>
                </label>
            </li>
            )
          )}
      </ul>
  );
}

function CheckableList({items}) {
  
  const [keyUl , setKeyUl] = useState(0);

  function reset() {
    setKeyUl(keyUl => !keyUl);
  }

  return (
    <>
      <button onClick={reset}>Reset</button>
      <ul key={keyUl}>
          {items.map(item =>(
            <li key={item}>
                <label>
                    {item}
                    <input type="checkbox"/>
                </label>
            </li>
            )
          )}
      </ul>
    </>
);
}


const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five' ,'six' , 'seven' , 'height' , 'nine' , 'ten']);

  function shuffleItems() {
    setItems(_.shuffle(items));
  }

  return (
    <div>
      <button onClick={shuffleItems}>Shuffle</button>
      <CheckableList items={items}/>
    </div>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```
example 2
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function SelectableList({ items , reset}) {
  const [selectedItems , setSelectedItems] = useState([]);
  const [showItems , setShowItems] = useState(items);
  

  function updateSelectedItem(add , item) {
    add  && setSelectedItems([...selectedItems , item]);
    !add && setSelectedItems(selectedItems.filter(i=> i !== item))
  }

  function deleteSelectedItemsFromShowItems() {
    setShowItems(items.filter(item => !selectedItems.includes(item)));
  }

  return (
    <>
      <button onClick = {deleteSelectedItemsFromShowItems}>Delete</button>
      <button onClick = {reset}>Reset</button>

      <ul>
        {showItems.map(item => (
          <li key={item}>
            <label>
              <input type="checkbox" checked={selectedItems.includes(item)}  onChange = { (e)=>updateSelectedItem(e.target.checked , item)}/>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

const App = () => {
  const items = ['one', 'two', 'three', 'four', 'five' , 'six' , 'seven' , 'height' , 'nine' , 'ten'];
  const [keyS , setKey] = useState(0);
  
  function reset() {
    setKey(keyS => !keyS);
  }

  return (
    <div>
      <SelectableList key = {keyS} items={items} reset={reset}/>
    </div>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```

# use Ref 

How to use:
```JS
import { useState, useRef } from 'react'; // import

const divContainer = useRef(null); // definition

<div data-my-stuff="hello" data-my-name = "gita" ref={divContainer}> </div> //connect

function showMyThing() {

    const divDOM = divContainer.current; //DOMElement

    alert(`${divDOM.getAttribute("data-my-stuff")} ${divDOM.getAttribute("data-my-name")}`); //getAttribute

    alert(`${divDOM.dataset.myStuff} ${divDOM.dataset.myName}`); //dataset
    
}
```
Example
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';

import '../styles/main.scss';

const App = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const divContainer = useRef(null);
  const word2Ref = useRef(null);

  function showMyThing() {
    const divDOM = divContainer.current;
    alert(`${divDOM.getAttribute("data-my-stuff")} ${divDOM.getAttribute("data-my-name")}`);
    alert(`${divDOM.dataset.myStuff} ${divDOM.dataset.myName}`);
  }

  function setFirstWord(val) {
    setWord1(val);
    if(val.endsWith(' ')) {
        word2Ref.current.focus();
    }
  }

  function setSecondWord(val) {
    setWord2(val);
  }

  return (
    <div data-my-stuff="hello" data-my-name = "gita" ref={divContainer}>
      <button onClick={showMyThing}>Show My Thing</button>
      <input type="text" value={word1} onChange={(e) => setFirstWord(e.target.value)} />
      <input type="text" value={word2} onChange={(e) => setSecondWord(e.target.value)} ref = {word2Ref}/>
    </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```
# useEffect

[State] -> Render -> UI -> State -> Render -> UI

1. What's outside React?
  - Global variables => document.title
  - External APIs    => Youtube API
  - Async actions    => Fetch data after state change
  - Handle component mounting => run some init code

2. useEffect Template
```JS
  useEffect(function() {
    // run code here if dependencies change

    return function abort() {

    }
  }, []);
```

3. Demo: change document title when state var changes

example title:
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function DocumentTitleChanger(props) {
  const [title, setTitle] = useState(document.title);  

  useEffect(function() {
    document.title = title;    
  }, [title]);

  return (
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  );
}

const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <DocumentTitleChanger />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```
example timer -> Start When a component enters , and canceled when component exits from a page:
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function Timer(props) {
  const [ticks, setTicks] = useState(0);

  useEffect(function() {
    // What to do
    const timer = setInterval(function() {
      console.log('Ouch!');
      setTicks(t => t + 1); //and not setTicks(ticks + 1) -> this option will look on the first tick only and will not update on each calling.
    }, 1000);
    
    // What to undo
    return function abort() {
      clearInterval(timer);
    }
    
    // When to undo/do
  }, []);

  return (
    <p>Ticks: {ticks}</p>
  );
  
}

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  function toggleTimer() {
    setShowTimer(val => !val);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleTimer}>Hide/Show timer</button>
      {showTimer && <Timer />}
    </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```
# ajax:
 https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook
 -
example ajax from swapi 1:
-
# main.js
```JS
import ReactDOM from 'react-dom';
import StarwarsCharacter from './starwarsCharacter';

const App = () => {
  const [id , setId] = useState(1);

  return (
    <div>
        <input type ="number" value={id} onChange={(e)=>setId(e.target.value)}/>
        <StarwarsCharacter id = {id}/>
    </div>
  );
}

ReactDOM.render(<App/> , document.querySelector('main'));
```
# starwarsCharacter.js
```JS
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
            <ShowCharacterInfo dataCharacterDescription = {dataCharacterDescription} dataFilms = {dataFilms}/> :
            'loading, please wait...'}
        </div>
    );
}
```

example ajax from swapi 2
-
# main.js
```JS
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import StarWarsCharacter from './starWarsCharacter';
import '../styles/main.scss';

const InfoByID = () => {
    const [id , setId] = useState(1);

    return (
        <>  
            <div className="characterId">
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
            </div>
            <StarWarsCharacter id={id}/>
        </>
    );
}

const App = () => {
    return (
        <InfoByID/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));
```
# dataByID.js
```JS
import {useState , useEffect} from 'react';
import $ from 'jquery';

export default function dataByID(url) {
    const [data , setData] = useState(null);

    useEffect(()=>{
        setData(null);
        const xhr = $.getJSON(url , setData);
        return () => xhr.abort();
    }, [url]);
    
    return data;
}
```
# starWarsCharacter.js
```JS
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
```
# starWarsFilm.js
```JS
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
```

example Youtube API
-
```JS


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
    setIsPlay(false);
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
```
# Custom Hook - example:
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function useTimer(ms = 1000) {
  const [tick , setTick] = useState(0);

  function updateTick() {
    setTick(v => v + 1);
  }

  useEffect(()=>{
    const timerId = setInterval(updateTick , ms);
    return ()=>clearInterval(timerId);
  },[]);

  return tick;
}

function NewsTicker({items}) {
  const index = useTimer();
  return (
    <p>{items[index % items.length]}</p>
  );
}

function Clock() {
  const tick = useTimer();
  return (
    <p>tick... {tick}</p>
  );
}

const App = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
```

# higher order component example:
```JS
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


//function return class Component;
function withClock(Component) {
  return class WithClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tick : 0};
      this.updateTick = this.updateTick.bind(this);
    }
    
    updateTick() {
      this.setState(state => ({tick : state.tick + 1}));
    }
  
    componentDidMount() {
      this.timerId = setInterval(this.updateTick , 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    render() {
      return (
        <Component {...this.props} tick = {this.state.tick}/>
      );
    }
  }
}


//function return function Component;
function withClock(Component) {
  return function WithClock(props) {
    const { ms } = props;
    const [tick , setTick] = useState(0);

    function updateTick() {
      setTick(tick => tick + 1);
    }

    useEffect(()=>{
      const timerId = setInterval(updateTick , ms);
      return ()=>clearInterval(timerId);
    });

    return(<Component {...props} tick={tick}/>);
  }
}


//function
const FourClick = withClock(function FourClick({tick}) {
      return (
        <p> 4 tick: {tick * 4} </p>
      );
    }
);
FourClick.defaultProps = {  ms: 1000,};


//function
const DoubleTick = withClock(function DoubleTick({tick}) {
    return (
      <p>double tick ... {tick * 2}</p>
    );
});
DoubleTick.defaultProps = {  ms: 1000,};


//class
const NewsTicker = withClock(class NewsTicker extends React.Component {
  render() {
    return (
      <p>{this.props.items[this.props.tick % this.props.items.length]}</p>
    );
  }
});
NewsTicker.defaultProps = { ms: 1000,};


//class
const Clock = withClock(class Clock extends React.Component {
  render() {
    return (
      <p>tick... {this.props.tick}</p>
    );
  }
});
Clock.defaultProps = { ms: 1000,};


const App = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
        <Clock/>
        <NewsTicker items={items} ms = {2000}/>
        <DoubleTick/>
        <FourClick/>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
```
# Render props example:
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from 'lodash';
import anArrayOfEnglishWords from 'an-array-of-english-words';

function CheckableList({items , renderItem}) {
  const [ulKey , setUlKey] = useState(0);
  function reset() {
    setUlKey(x=>!x);
  }

  return (
    <>
      <button onClick={reset}>Reset</button>
      <ul key={ulKey}>
        {items.map(item=>
          <li key={item}>
            <label>
              <input type="checkbox"/>
              {renderItem(item)}
            </label>
          </li>
        )}
      </ul>
    </>
  );
}
CheckableList.defaultProps = {
  renderItem:(item)=>item,
}


function FilteredList({ list , filterFn , renderItem , filterInput}) {
  const [filter , setFilter] = useState('');
  const updateList = filterFn(list , filter);

  return (
    <>
      <h1>Filtered List</h1>
      {filterInput(filter , setFilter)}
      <ul style={{listStyle:"none"}}>
          {updateList.map(item=> renderItem(item))}
      </ul>
    </>
  );
}

FilteredList.defaultProps = {
  filterFn:(list , filter)=>list.filter(item=>item.includes(filter)),
  renderItem:(item)=> <li key={item}>{item}</li>,
  filterInput:(filter , setFilter) =>(
    <label>
      Filter: 
      <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)}/>
    </label>
  ),
}

const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five']);
  const [colors, setColors] = useState(['blue', 'red', 'yellow', 'green', 'orange']);

  function shuffle() {
    setItems(_.shuffle(items));         
    setColors(_.shuffle(colors));         
  }

  return (
    <div>
      <div>
        <button onClick={shuffle}>Shuffle All</button>
      </div>
      <CheckableList items={items} />
      <CheckableList items={colors} renderItem={(item)=><span style={{color:item}}>{item}</span>}/>
      <FilteredList list={(_.shuffle(anArrayOfEnglishWords)).slice(0,100)} 
                    filterFn={(list , filter)=> list.filter(item=>item.toUpperCase().includes(filter.toUpperCase()))}
                    renderItem={(item)=><div style={{color:"white" , background:"black"}} key={item}>{item}</div>}
                    filterInput={(filter , setFilter)=>(<input style={{background:"black" , color:"white"}} type="text" value={filter} onChange={(e)=>setFilter(e.target.value)}/>)}/>
      <FilteredList list={(_.shuffle(anArrayOfEnglishWords)).slice(0,100)} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
```

# React.Children :
main.js:
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';

import { MyFormsContainer } from './myFormsContainer';
import { Login } from './login';
import { CountryAndCity } from './countryAndCity';
import { Hobbies } from './hobbies';
import { Summary } from './summary';
import '../styles/style.scss';

const App = () => {
  return (
      <div>
          <MyFormsContainer>
                <Login/>
                <CountryAndCity/>
                <Hobbies/>
                <Summary/>
          </MyFormsContainer>
      </div>
  );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

```
myFormsContainer.js:
-
```JS
import React, { useState } from 'react';

export function MyFormsContainer(props) {
    const [dataObjOfAllPages , setDataObjOfAllPages] = useState({});
    const [currentIndex , setCurrentIndex] = useState(0);
    const countOfPages = React.Children.count(props.children);
  
    function updateDataObjOfAllPages(dataObj) {
      setDataObjOfAllPages({...dataObjOfAllPages, ...dataObj});
    }
  
    function getCurrentPage() {
      const child = React.Children.toArray(props.children)[currentIndex];
      return React.cloneElement(child , { dataObjOfAllPages : {...child.props.dataObjOfAllPages , ...dataObjOfAllPages} , updateDataObjOfAllPages});
    }
  
    return (
      <>
        {getCurrentPage()}
        <div className="btnsContainer">
            <button disabled={currentIndex === 0} onClick={()=>setCurrentIndex(v=>v-1)}>Previous</button>
            <button disabled={currentIndex === countOfPages-1} onClick={()=>setCurrentIndex(v=>v+1)}>Next</button>
        </div>
      </>
    );
  }
```
login.js
-
```JS
import React from 'react';

export function Login({dataObjOfAllPages , updateDataObjOfAllPages}) {

    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value});
    }
  
    return (
      <form autoComplete="on">
        <h1>Login Page</h1>
        <div className="form-outline mb-4">
            <label  className="form-label" htmlFor="name">User Name:</label>
            <input className="form-control" type="text" id="name" value={dataObjOfAllPages.name||''} onChange={(e)=>handlerInputChange(e)}/>
        </div>
        <div className="form-outline mb-4">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id="password" value={dataObjOfAllPages.password||''} onChange={(e)=>handlerInputChange(e)}/>
        </div>
      </form>
    );
  }
```
countryAndCity.js
-
```JS
import React from 'react';

function Countries({countries , dataObjOfAllPages , updateDataObjOfAllPages}) {
    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value , city: null});
    }
  
    return (
      <div className="form-outline mb-4">
          <label className="form-label" htmlFor="country">Country:</label>
          <select className="custom-select" id="country" value={dataObjOfAllPages.country||'default'} onChange={(e)=>handlerInputChange(e)}>
            <option disabled value="default">Choose country...</option>
            {countries.map(country=>
              <option key={country} value={country}>{country}</option>)}
          </select>
        </div>
    );
  }
  
  function Cities({cities , dataObjOfAllPages , updateDataObjOfAllPages}) {
    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value});
    }
  
    return (
      <div className="form-outline mb-4">
          <label className="form-label" htmlFor="city">City:</label>
          <select className="custom-select" id="city" value={dataObjOfAllPages.city||'default'} onChange={(e)=>handlerInputChange(e)}>
            <option disabled value="default">Choose city...</option>
            {cities.map(city=>
              <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
    );
  }
  
  export function CountryAndCity({dataObjOfAllPages , updateDataObjOfAllPages}) {
    const countries = require ('countries-cities').getCountries();
    let cities = null;
    dataObjOfAllPages.country && (cities = require ('countries-cities').getCities(dataObjOfAllPages.country));
    cities && (cities = cities.sort());

    return (
      <form>
        <h1>Country and City</h1>
          <Countries countries={countries} dataObjOfAllPages ={dataObjOfAllPages} updateDataObjOfAllPages = {updateDataObjOfAllPages}/>
          {cities &&
          <Cities cities={cities} dataObjOfAllPages = {dataObjOfAllPages} updateDataObjOfAllPages = {updateDataObjOfAllPages}/>}
      </form>
    );
  }
```
hobbies.js:
-
```JS
import React from 'react';
import hobbies  from 'hobbies';

export function Hobbies({dataObjOfAllPages , updateDataObjOfAllPages}) {      
    const selectedHobbies = dataObjOfAllPages.hobbies || new Set();

    function handlerInputChange(e , item) {
        e.target.checked ? selectedHobbies.add(item) : selectedHobbies.delete(item);
        updateDataObjOfAllPages({[e.target.id] : new Set(selectedHobbies)});
    }
  
    function reset(e) {
        e.preventDefault();
        updateDataObjOfAllPages({hobbies : new Set()});
    }

    return (
      <form>
        <h1>Hobbies</h1>
        <div className="form-outline mb-4">
            <label className="form-label">Hobbies:</label>
            <ul style={{listStyle:"none" , height:"50vh" , overflow:"auto"}}>
                {hobbies.map(hobby=>(
                    <li key={hobby}>
                        <input type="checkbox" id="hobbies" checked={selectedHobbies.has(hobby)} onChange={(e)=>handlerInputChange(e , hobby)}/>
                        <span> {hobby} </span>
                    </li>
                ))}
            </ul>
            <button onClick={(e)=>reset(e)}>Reset</button>
        </div>
      </form>
    );
  }

```
summary.js:
-
```JS
import React from 'react';

export function Summary(props) {
    const { dataObjOfAllPages } = props;

    return (
      <form>
        <h1>Country and City</h1>
        <div>
            <label id="name">Name: {dataObjOfAllPages.name}</label>
        </div>
        <div>
            <label id="password">Password: {dataObjOfAllPages.password}</label>
        </div>
        <div>
            <label id="country">Country: {dataObjOfAllPages.country}</label>
        </div>
        <div>
            <label id="city">City: {dataObjOfAllPages.city}</label>
        </div>
        <div>
            <label id="hobbies">
                Hobbies: 
                <ul style={{listStyle:"none"}}>
                     { Array.from(dataObjOfAllPages.hobbies).map((hobby , index)=> <li key={index}> {index+1}.) {hobby} </li>)}
                </ul>
            </label>
        </div>
      </form>
    );
  }

  Summary.defaultProps = {
    dataObjOfAllPages: {
      name:'guest',
      password:'123456',
      country:'none',
      city:'none',
      hobbies:[],
    }
  }
```
# Reduce renders using React.memo:
example:
-
main.js
-
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Fiver from './fiver';
import ColorPalette from './colors';


function ColorSelector(props) {
  console.log('Color Selector');
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState('#000000');

  useEffect(function() {
    if (ticks % 7 === 0) {
      setColor('#000000');
    }
  }, [ticks]);

  return (
    <div>
      <div>
        <Fiver ticks={ticks} />
        <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
        <div>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
        </div>
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

ReactDOM.render(<ColorSelector/>, document.querySelector('main'));

```
fiver.js
-
```JS
import React from 'react';

export default React.memo(function Fiver(props) {
  console.log('Fiver');
  const { ticks } = props;

  return (
    <p>{Math.floor(ticks / 5)}</p>
  );
},
  function(prevProps, nextProps) {
    return (Math.floor(prevProps.ticks / 5) === Math.floor(nextProps.ticks / 5));
  });

```
colors.js
-
```JS
import React, { useCallback, useRef } from 'react';
import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorBox = React.memo(function ColorBox(props) {
  console.log('Color Box');
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
});

export default React.memo(function ColorPalette(props) {
  console.log('Color Palette');
  const { start } = props;
  const deletedBoxesRef = useRef(new Set());
  const deletedBoxes = deletedBoxesRef.current;
  const [count , setCount] = useState(0);

  const removeBox = useCallback(function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setCount(v=>v+1);
  },[deletedBoxesRef]);

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        key={i}
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
      />
    );
  }
  return colors;
});
```