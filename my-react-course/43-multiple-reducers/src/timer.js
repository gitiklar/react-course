import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setTick } from './redux/actions';

function mapStateToProps(state) {
    return {
      tick: state.timer.tick,
    };
  }

export default connect(mapStateToProps)(function Timer(props) {
    const { tick , dispatch} = props;

    function upTick() {
        dispatch(setTick(tick + 1));
    }

    useEffect(()=>{
       const id = setInterval(upTick , 1000);
       return ()=>clearInterval(id);
    },[]);

    return (
        <p>Timer {tick} 
            <button onClick={upTick}>Inc</button>
        </p>
    )
});