import React from 'react' ;
import { connect } from 'react-redux';

import UndoRedo from './undoRedo';
import { previousBtnClick , nextBtnClick } from './redux/actions';

function mapStateToProps(state) {
    return {
        currentFormIndex: state.router.currentFormIndex,
    };
}

export default connect(mapStateToProps)(function FormsContainer(props) {
    const { currentFormIndex , dispatch} = props;
    const countOfPages = React.Children.count(props.children);

    return (
        <div className="divContainerForm">
            <UndoRedo/>
            {props.children[currentFormIndex]}
            <div className="btnsContainer">
                <button className="btn btn-lg btn-primary" onClick={()=>dispatch(previousBtnClick())} disabled={currentFormIndex===0}>Previous</button>
                <button className="btn btn-lg btn-primary" onClick={()=>dispatch(nextBtnClick())} disabled={currentFormIndex===countOfPages-1}>Next</button>
            </div>
        </div>
    );
});