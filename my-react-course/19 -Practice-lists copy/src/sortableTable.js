import React  from 'react';
import useSortedData from './useSortedData';

export default function SortableTable ({data}) {
    const [indexOfColumnAndDirection , setindexOfColumnAndDirection , sortedData] = useSortedData(data);
    
    function clickItemHandler(indexOfColumn) {
        setindexOfColumnAndDirection( {index: indexOfColumn , direction: indexOfColumnAndDirection.direction === 'up' ? 'down' : 'up'} ) ;
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
    )
}