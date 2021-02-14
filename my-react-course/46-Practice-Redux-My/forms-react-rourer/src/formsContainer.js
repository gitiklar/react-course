import React from 'react' ;
import { withRouter } from 'react-router-dom';

import UndoRedo from './undoRedo';

export default withRouter(function FormsContainer(props) {
    const { currentFormIndex , history} = props;
    const countOfPages = React.Children.count(props.children);
    
    const pages = {
        0: "/loginPage",
        1: "/countryAndCitySelection",
        2: "/hobbiesSelection",
        3: "/summaryPage",
    }

    function previousBtnClick() {
        history.push(pages[currentFormIndex - 1]);
    }

    function nextBtnClick() {
        history.push(pages[currentFormIndex + 1]);
    }

    return (
        <div className="divContainerForm">
            <UndoRedo/>
            {props.children[currentFormIndex]}
            <div className="btnsContainer">
                <button className="btn btn-lg btn-primary" onClick={previousBtnClick} disabled={currentFormIndex===0}>Previous</button>
                <button className="btn btn-lg btn-primary" onClick={nextBtnClick} disabled={currentFormIndex===countOfPages-1}>Next</button>
            </div>
        </div>
    );
});