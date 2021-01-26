import React , { useState } from 'react';

function getSortedData(indexOfColumnAndDirection , data) {
    if(!indexOfColumnAndDirection.index) return data;
    
    return [data[0]].concat(data.slice(1).sort((b , a) => {
        const textA = a[indexOfColumnAndDirection.index].toUpperCase();
        const textB = b[indexOfColumnAndDirection.index].toUpperCase();
        if(indexOfColumnAndDirection.direction === 'up') return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }));
}

export default function SortableTable ({data}) {
    const [indexOfColumnAndDirection , setindexOfColumnAndDirection] = useState( {index: 0 , direction: ''} ) ;

    const sortedData = getSortedData(indexOfColumnAndDirection, data);

    function clickItemHandler(indexOfColumn) {
        const direction = indexOfColumnAndDirection.direction === 'up' ? 'down' : 'up';
        setindexOfColumnAndDirection( {index: indexOfColumn , direction: direction} ) ;
    }

    return (
        <table className= "table table-hover table-dark">
            <tbody>{
                sortedData.map ((row , indexR) =>
                    <tr key = {row[0]}>
                        {
                            row.map((item , indexC) => 
                                <td key = {item+row[3]} 
                                    onClick = { indexR === 0 ? () => { clickItemHandler(indexC) } : ()=>{}}>
                                    {item}
                                </td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>    
        </table>
    )
}