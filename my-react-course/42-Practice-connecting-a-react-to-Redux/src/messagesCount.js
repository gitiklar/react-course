import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.messages.count,
    }
}

export default connect(mapStateToProps)(function MesaagesCount({count}){
    return (
        <p>Count: {count}</p>
    );
});