import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import anArrayOfEnglishWords from 'an-array-of-english-words';
import _ from 'lodash';

import ListByFilter from './listByFilter';
import TextBoxToFilter from './text-box-to-filter';
import '../css/style.css';

const list = (_.shuffle(anArrayOfEnglishWords)).slice(0,100);

const App = ()=> {
    const [filter , setFilter] = useState(null);
    
    function updateFilter(text) {
        setFilter(text);
    }

    return(
        <>
            <h1>Filter items from a list</h1>
            <ListByFilter list = {list} filter = {filter}/>
            <TextBoxToFilter updateFilter = {updateFilter}/>
        </>
    );
}
ReactDOM.render(<App/> , document.querySelector('main'));