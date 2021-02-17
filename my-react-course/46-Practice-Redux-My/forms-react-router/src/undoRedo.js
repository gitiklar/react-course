import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { redo, undo } from './redux/actions';

export default withRouter(connect()(function UndoRedo({dispatch , history}) {
    return (
        <>
            <img className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="undo" onClick={()=>dispatch(undo(history))} className="undo" src="../images/undo.svg"></img>
            <img className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="redo" onClick={()=>dispatch(redo(history))} className="redo" src="../images/redo.svg"></img>
        </>
    );
}));