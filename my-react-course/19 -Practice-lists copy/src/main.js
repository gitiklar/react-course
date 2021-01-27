import React from 'react';
import ReactDOM from 'react-dom';
import SortableTable from './sortableTable';
import '../styles/main.scss';

const App = () => {
    const data = [
        ['id', 'Name', 'Country', 'Email'],
        [0, 'dan', 'Israel', 'dan@gmail.com'],
        [1, 'dana', 'Hungary', 'dana@gmail.com'],
        [2, 'anna', 'Israel', 'anna@gmail.com'],
        [3, 'lea', 'UK', 'havlea@gmail.com'],
        [4, 'dina', 'Denmark', 'cohdina@gmail.com'],
        [5, 'ester', 'England', 'leviester@gmail.com'],
        [6, 'nurit', 'Germany', 'tigernurit@gmail.com'],
        [7, 'zina', 'Belgium', 'libszina@gmail.com'],
    ];
    
    return (
        <SortableTable data={data} />
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));