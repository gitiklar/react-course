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
15              SelectedCountryAndCity      Component - Genery by component 'SelectedOptions' | Not genery
16/1            CatchTheRedGame             Component
16/2            FilterItemsFromAList        Component
16/3            FormWithThreePages          Component
17              CheckableList               Component - List and key
18              CheckableListWithDelete     Component - List and key
19              SortableTable               Component - With custom hook | Without
21              MultiSelectAndDeleteList    Component - With useRef
22/1            InputFocusSwitch            Component - With useRef
22/2            FormsWithConfirmPassword    Component - With useRef | With useState
23              Title                       Component - With useEffect
24              Timer                       Component - With useEffect
25              starwarsWithServerAPI       Component - With useEffect
26              youtubeAPI                  Component - With useEffect & useRef
27/1            ViemoPlayerAPI              Component - With useEffect & useRef
27/2            filmsWithServerAPI          Component - With useEffect
27/3            starwarsAndFilmsTogether    Component - With useEffect with useRemoteData Custom hook
28              classComponentLifecycle     Component - 01_component_will_unmount - clear Timer
                                                        02_component_did_mount - flatpickr()
                                                        03_get_derived_state_from_props - TextBox
                                                        04_component_did_update - onYouTubeIframeAPI
                                                        05_component_did_catch - Bomb
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