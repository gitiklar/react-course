import React from 'react';
import { connect } from 'react-redux';
import { redo, undo } from './redux/actions';

export default connect()(function UndoRedo({dispatch}) {
    return (
        <>
            <img className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="undo" onClick={()=>dispatch(undo())} className="undo" src="../images/undo.svg"></img>
            <img className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="redo" onClick={()=>dispatch(redo())} className="redo" src="../images/redo.svg"></img>
        </>
    );
});