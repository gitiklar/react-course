# React On Windows

1. Requirements:
  - Install Node.JS
  - Install Visual Studio Code

2. A New React Project Template
  - HTML file
  - JavaScript React file
  - CSS files

3. Running The Example Project
  - npx webpack-dev-server -d
  - npx webpack -p

4. Creating a new component
  - Add a new JavaScript file
  - Import the component and show it on screen

# For react project with scss need (in this order only!):

1.) Install Node.JS

At the general folder of all projects or at the specific project do this to install react and webpack:</br>
2.) create new folder and:</br>
3.) npm init -y</br>
4.) npm install --save-dev react react-dom webpack webpack-cli@3.3.12 babel-cli @babel/core @babel/preset-react html-webpack-plugin clean-webpack-plugin webpack-dev-server babel-loader mini-css-extract-plugin css-loader node-sass sass-loader

5.) Copy this structure into folder with package.json or new folder inside the same path:</br>
<pre>
styles/main.scss
html/index.html
src/main.js   --->  import '../styles/main.scss'
</pre>
Create webpack.config.js file at the specific project and copy that:
```JS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devServer: {
    overlay: true,
  },
  module: {
    rules: [      
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          }
        }
      },
      {
        test: /\.scss$/, 
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          'css-loader',
          'sass-loader',
        ],
      },
      
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    }),
    new CleanWebpackPlugin(),
  ]
};
```
6.) npx webpack-dev-server -d for development environment or npx webpack -p for production environment

7.) If not work can copy to new create package.json file and run inside empty folder "npm install" and rename name to your name of th folder:

```JS
{
  "name": "new",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/preset-react": "^7.12.10",
    "babel-cli": "^6.26.0",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^5.0.1",
    "html-webpack-plugin": "^4.5.0",
    "mini-css-extract-plugin": "^1.3.3",
    "node-sass": "^5.0.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "sass-loader": "^10.1.0",
    "webpack": "^5.11.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "lodash": "^4.17.20"
  }
}

```

# -----------------    SASS/SCSS    ----------------
```
בו משתמשים CSS-דומה יותר ל SCSS-שניהם שווים רק בסינטקס אחר וכיון ש

CSS - אין אפשרות להריץ אותו ככה הוא חייב להיות מתורגם ל
http://koala-app.com/  :הכלי שמתרגם הוא
SCSS צריך להוריד ולהתקין ואז להוסיף בפלוס את התיקיה של הפרויקט והוא יודע למצא את הקובץ 
CSS - הוא מתרגם אותו אוטומטית ל

:ואז הוא פותח את הקובץ שאותו מקנפגים Edit Settings <- Project Settings <- אחרי שמעלים את התיקיה - לחצן ימני על התיקיה 
"mappings": [
		 {	
		 	"src": "scss",
		 	"dest": "css"
		 }
],

שעליו עובדים SCSS -ולשני קובץ CSS - עושים 2 תיקיות לאחד מכניסים קובץ
```
> To use css do one of 2 options:
>> 1.) in index.html file add css path.
>> 2.) In main.js import '../css/style.css';

----------------------------------------------------------------------------------------------------------------
# Debugging React Apps

1. Debug with Source Maps

2. Compiler vs. Runtime Errors

3. Create a break point from debugger

4. Create a break point from code

5. React Dev Tools


-------------------------------------------------------------------------------------------------------------------
# JSX Basics

1. Inject JavaScript Code to JSX with {...} and Conditionals in JSX
```JS
  function App() {
  const n = Math.random();

  return (
    <div className="App">
      <p>{n}</p>
      {n > 0.5 ? <p>Hello</p> : <p>Bye bye</p>}
    </div>
  );
}
```
2. Inline styles
```JS
function App() {
  const n = Math.random();
  let text, style;

  if (n > 0.5) {
    text = "Hello";
    style = { color: "blue" };
  } else {
    text = "Bye bye";
    style = { color: "red" };
  }

  return (
    <div className="App">
      <p>{n}</p>
      <p style={style}>{text}</p>
    </div>
  );
}
```
3. Return multiple elements from a single component
```JS
function Person(props) {
  const { name } = props;
  return (
    <>
      <p>Hi! My name is {name}</p>
      <p>Nice to meet you</p>
    </>
  );
}
```
----------------------------------------------------------
# Props Agenda

1. Passing and accepting props

2. What can you pass as props:
  - Passing numbers
  - Passing arrays

3. Default property values

example:
# main.js
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

const App = () => {
const obj = {  name:"bob", live:"israel", likes:"stuff",};
const colors = ['red', 'blue' , 'yellow'];
const p = Math.random();
return (
    <div>
      <Person {...obj} show={p > 0.5} />
      <Person name = "bob" age = {25} favoriteColors = {colors} show={p > 0.5}/>
    </div>
  )
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
```

# person.js
```JS
import React from 'react';

export default function Person(props) {
  const {name , live , likes , age , favoriteColors , show} = props;
  const nextYear = age + 1;
  const joincolors = favoriteColors.join('-');
  if(!show) return false;

  return (
    <>
    <h2>Hello! My name is: {name} I live in: {live} love {likes} and my favorite colorsis: {joincolors}</h2>
    <p>Next year I'll be {nextYear} years old</p>
    </>
  );
}

Person.defaultProps = {
  live:'Israel',
  likes:'react',
  age:20,
  favoriteColors: ['black' , 'pink'],
}
```
----------------------------------------------------------
# State

1. What is state

2. Counter component

3. Add delta(numberInput in my example) to Counter's state

4. Careful: mutability
  - Trying to save an object in state
  - React won't detect the change

example:
# main.js
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
```

# counter.js
```JS
import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count , setCount] = useState(0);
  const [numberInput , setNumberInput] = useState(1);

  function saveNewInput(e) {
      setNumberInput(Number(e.target.value));
  }
  
  function inc() {
      setCount(oldValue => oldValue + numberInput);
  }

  function dec() {
    setCount(oldValue => oldValue - numberInput);
  }

  function reset() {
      setCount(0);
  }

  const styleBtn = {
    width: '5rem',
    margin: '5px',
  }

  return (
    <div>
      <label>
        Increase By:
        <input type="number" value={numberInput} onChange={saveNewInput}/>
      </label>
      <p>
        I was clicked {count} times    
        <button style={styleBtn} onClick={inc}>Click Me to increase</button>
        <button style={styleBtn} onClick={dec}>Click Me to decrease</button>
        <button style={styleBtn} onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
```
----------------------------------------------------------
# Passing state as props

1. Data ownership in React

2. Refactoring: Moving state up the component tree

3. Refactoring: Sending the state down as props

example:
# main.js
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
const root = document.querySelector('main');
ReactDOM.render(<App/> , root);
```

# app.js
```JS
import React from 'react';
import Counter from './counter.js';
import NumbersBox from './numbersBox.js';
import { useState } from 'react';

export default function App() {
  const [delta , setDelta] = useState(1);

  return (
    <>
        <NumbersBox delta={delta} setDelta={setDelta}/>
        <Counter delta={delta} value={1} setDelta={setDelta}/>
        <Counter delta={delta} value={2} setDelta={setDelta}/>
        <Counter delta={delta} value={3} setDelta={setDelta}/>
        <Counter delta={delta} value={4} setDelta={setDelta}/>
        <Counter delta={delta} value={5} setDelta={setDelta}/>
    </>
  );
}
```

# numbersBox.js
```JS
import React from 'react';

export default function NumbersBox(props) {
  const {delta , setDelta} = props;

  function hadndleInputChange(e) {
      setDelta(Number(e.target.value));
  }

  return(
    <label>
        Increase by: 
        <input type="number" value={delta} onChange={hadndleInputChange}></input>
    </label>
  );
}
```

# counter.js
```JS
import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
  const {delta , value , setDelta} = props;
  const [count , setCount] = useState(0);

  function inc() {
    const newVal = count + delta;
    if(newVal > value*10 && delta!==1) {
      setDelta(1);
    } else {
      setCount(newVal);
    }
  }

  function dec() {
    setCount(oldVal => oldVal - delta);
  }

  function reset() {
    setCount(0);
  }

  return(
    <div>
        <label>I was clicked {count} times and max to change increase to 1: {10*value}
            <button onClick = {inc}>Click me to increase</button>
            <button onClick = {dec} >Click me to decrease</button>
            <button onClick = {reset}>Click me to reset</button>
        </label>
    </div>
  );
}
```

# React Class Syntax

1. React Syntaxes: React.createClass -> Classes -> Hooks
  2013 -> React.createClass({ ... })
  2016 -> React 16   -> class Person extends React.component { ... }
  2019 -> React 16.8 -> useState(), ...


2. Refactoring: From hooks to classes
  - Component template
  - Passing props
  - Using state
  - Creating event handlers

3. Which one should you use?

How to change hooks to classes:

1. class need extends React.Component
2. class need constructor to get props
3. super(props) save it in this.props
4. Must one render function that return JSX
5. There is one state obj that saved in this.state = {one : ... , two : ...};
6. To update state parameter do: this.setState({one : ... , two : ...});

for example:
# Person component with Hooks vs class:
```JS
import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

//PersonClass
export default class PersonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mood: getRandomMood()};
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood () {
    this.setState({mood:getRandomMood()});
  }

  render() {
    const { name } = this.props;
    const mood = this.state.mood;
    const style = { color: moods[mood] };
    return (
      <p style={style}>
          Hello. My name is {name} and I'm {mood}
          <button onClick={this.changeMood}>Change Mood</button>
      </p>
    );
  }
}

PersonClass.defaultProps = {
  name: 'Visitor',
}

//PersonHooks
export function PersonHooks(props) {
    const {name} = props;
    const [mood , setMood] = useState(getRandomMood());

    function changeMood() {
      setMood(getRandomMood());
    }

    const style = {color : moods[mood]};

    return (
        <p style={style}>
          Hello. My name is {name} and I'm {mood}
          <button onClick={changeMood}>Change Mood</button>
        </p>
    );
}

PersonHooks.defaultProps = {
  name: 'Visitor',
}


//General definitions for 2 components
const moods = {
  happy: 'pink',
  sad: 'blue',
  angry: 'red',
  tranquil: 'green',
}

function getRandomMood() {
  return _.sample(Object.keys(moods));  
}
```
------------------------------------------------------------------------
# JSX converts HTML tags into react elements instead of use React.createElement().
# Babel that powered by webpack converts JSX to JavaScript for browser.
- You are not required to use JSX, but JSX makes it easier to write React applications.

Example:
This code->
```JS
function App(props) {
  return (
    <div>
      <p className="demo">Hello World</p>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('main'));
```
Convert to :

```JS
function App(props) {
  return (
    React.createElement("div", null,
    React.createElement("p", { className: "demo" }, "Hello World")));
}

ReactDOM.render(React.createElement(App, null), document.querySelector('main'));
```

React.createElement create new element in Virtual DOM of react with childrens...

# Save an array or object (mutable) in State examples:

```JS
const arr = [10, 20, 30];
const newArray = [...arr];
newArray[0] = 10;
setStuff(newArray);

const obj = { a: 10, b: 20 };
const newObj = {...obj};
newObj.a = 50;
setStuff(newObj);
```
- Example of Counters:

```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

///////////////////////////////             Display              ///////////////////////////////

function Display(props) {
  const { count , reset ,isMax } = props;
  
  const backgroundColor = isMax ? 'lightBlue' : '#d2d2d2';

  const styleDivcontainer = {
    background: backgroundColor,
    padding: '10px 2px',
    boxShadow: '0 0 1px 1px rgba(0,0,0,0.6)',
  }

  const styleDivScore = {
    display: 'inline-block',
    background: 'black',
    color: 'white',
    padding: '10px',
    fontFamily: 'Orbitron, sans-serif',
  }

  return (
    <div style={styleDivcontainer}>
      You count:
      <div style={styleDivScore}>{count}</div>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

///////////////////////////////             Counter              ///////////////////////////////

function Counter(props) {
  const { count , inc , reset , isMax} = props;

  return (
    <div>
      <Display count = {count} reset = {reset} isMax = {isMax}/>
      <button onClick={inc}>Click Me</button>
    </div>
  );
}


///////////////////////////////             CounterGroup              ///////////////////////////////

const CounterGroup = (props) => {
  const { countOfCounts } = props;
  const [ countsArray , setCountsArray] = useState(new Array(countOfCounts).fill(0));
  const maxValue = countsArray.reduce((acc, val)=> val > acc ? val : acc);;

  function inc(index , reset) {
      reset ? countsArray[index] = 0 : countsArray[index]++;
      setCountsArray([...countsArray]);
  }

  function createCounters() {
      const arrayOfCounters = [];
      for(let i = 0 ; i < countOfCounts ; i++) {
          arrayOfCounters.push(
            <Counter key = {i} count = {countsArray[i]} inc = {()=>{inc(i , false)}} reset = {()=>{inc(i , true)}}  isMax = {countsArray[i] === maxValue}/>
          );
      }
      return arrayOfCounters;
  }

  return (
    <div> 
        <p>The largest count is : {maxValue} </p>
        {createCounters()}
    </div>
  )
};


///////////////////////////////             main.js              ///////////////////////////////
const root = document.querySelector('main');
ReactDOM.render(<CounterGroup countOfCounts = {5} />, root);

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

  useEffect(function() {
    // run code here if dependencies change

    return function abort() {

    }
  }, []);


3. Demo: change document title when state var changes

example:
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
