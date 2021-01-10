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