import React from 'react';
import { connect } from 'react-redux';

import hobbies  from './hobbiesData';
import { updateHobby , resetSelectedHobies } from './redux/actions';

function mapStateToProps(state) {
    return {
        selectedHobbies: state.formsData.selectedHobbies,
    }
}


export default connect(mapStateToProps)(function HobbiesSelection({selectedHobbies , dispatch}) {      
    return (
      <form>
        <h1>Hobbies selection</h1>
        <div className="form-outline mb-4">
            <label className="form-label">Hobbies:</label>
            <ul className="hobbies">
                {hobbies.map(hobby=>(
                    <li key={hobby}>
                        <input type="checkbox" checked={selectedHobbies.has(hobby)} onChange={(e)=>dispatch(updateHobby(e , hobby))}/>
                        <span> {hobby} </span>
                    </li>
                ))}
            </ul>
            <button className="btn btn-lg btn-primary" onClick={(e)=>{e.preventDefault(); dispatch(resetSelectedHobies());}}>Reset</button>
        </div>
      </form>
    );
});