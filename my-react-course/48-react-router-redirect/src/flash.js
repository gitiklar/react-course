import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function Flash(props) {
    const { state  } = props.location;
    if(state && state.flash) {
        return (
            <div>
                {state.flash}
            </div>
        );
    } else {
        return false;
    }
 
});