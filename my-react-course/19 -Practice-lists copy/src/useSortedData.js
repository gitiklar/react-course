import { useState } from 'react';

export default function useSortedData(data) {
    const [indexOfColumnAndDirection , setindexOfColumnAndDirection] = useState( {index: 0 , direction: 'up'} ) ;

    function sortMe(a , b) {
        if(indexOfColumnAndDirection.direction === 'up') return (a > b) ? -1 : (a < b) ? 1 : 0;
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    const sortedData =  [data[0]].concat(data.slice(1).sort((b , a) => {
        let itemA = a[indexOfColumnAndDirection.index];
        let itemB = b[indexOfColumnAndDirection.index];
        indexOfColumnAndDirection.index !== 0 && (itemA = itemA.toUpperCase() , itemB = itemB.toUpperCase());
        return sortMe(itemA , itemB);
    }));

    return [indexOfColumnAndDirection , setindexOfColumnAndDirection , sortedData];
}
