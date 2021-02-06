import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateTick } from './redux/actions';

function mapStateToProps(state) {
    return {
        tick: state.tick,
    };
}

export default connect(mapStateToProps)(function Timer({tick  , dispatch}) {

    useEffect(()=>{
        dispatch(updateTick(tick + 1 , 1000));
    },[tick]);


    return (
        <p>Ticks : {tick}</p>
    );
})