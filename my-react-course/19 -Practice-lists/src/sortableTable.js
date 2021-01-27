import React , { useState } from 'react';

function getSortedData(indexOfColumnAndDirection , data) {
    function sortMe(a , b) {
        if(indexOfColumnAndDirection.direction === 'up') return (a > b) ? -1 : (a < b) ? 1 : 0;
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    return [data[0]].concat(data.slice(1).sort((b , a) => {
        let itemA = a[indexOfColumnAndDirection.index];
        let itemB = b[indexOfColumnAndDirection.index];
        indexOfColumnAndDirection.index !== 0 && (itemA = itemA.toUpperCase() , itemB = itemB.toUpperCase());
        return sortMe(itemA , itemB);
    }));
}


export default function SortableTable({data}) {
    const [indexOfColumnAndDirection , setindexOfColumnAndDirection] = useState( {index: 0 , direction: ''} ) ;

    const sortedData = getSortedData(indexOfColumnAndDirection, data);

    function clickItemHandler(indexOfColumn) {
        const direction = indexOfColumnAndDirection.direction === 'up' ? 'down' : 'up';
        setindexOfColumnAndDirection( {index: indexOfColumn , direction: direction} ) ;
    }

    return (
        <table className= "table table-hover table-dark">
            <tbody>{
                sortedData.map ((row , i) =>
                    <tr key = {i}>
                        {
                            row.map((item , j) => 
                                <td key = {j} 
                                    onClick = { i === 0 ? () => { clickItemHandler(j) } : ()=>{}}>
                                    {item}
                                </td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>    
        </table>
    );
}