import React from 'react' ;
import { connect } from 'react-redux';

import UndoRedo from './undoRedo';
import { goToCurrentFormUrl , getPagesNamesObjFromProps , getKeyByValue} from './redux/actions';
import { useParams, withRouter } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        currentIndexPage: state.router.currentIndexPage,
    };
}

export default withRouter(connect(mapStateToProps)(function FormsContainer(props) {
    const { currentIndexPage , history , dispatch } = props;
    const countOfPages = React.Children.count(props.children);
    const pages = getPagesNamesObjFromProps(props);

    return (
        <div className="divContainerForm">
            <UndoRedo/>
            {props.children[getKeyByValue(pages , useParams().id)]}
            <div className="btnsContainer">
                <button className="btn btn-lg btn-primary" onClick={()=>dispatch(goToCurrentFormUrl(history , pages[currentIndexPage - 1] , currentIndexPage - 1))} disabled={currentIndexPage===0}>Previous</button>
                <button className="btn btn-lg btn-primary" onClick={()=>dispatch(goToCurrentFormUrl(history , pages[currentIndexPage + 1] , currentIndexPage + 1))} disabled={currentIndexPage===countOfPages-1}>Next</button>
            </div>
        </div>
    );
}));