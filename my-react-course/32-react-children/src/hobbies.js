import React from 'react';
import hobbies  from './hobbiesData';

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
