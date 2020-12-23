import React from 'react';

export default function ListByFilter(props) {
    let { list , filter} = props;
    
    function tryToCreateRegexp() {
        try {
            return new RegExp(filter);
        } catch {
            return false;
        }
    }

    return(
        <div className = "listByFilter">
           <select multiple="multiple">
               {
                   (() => {
                        const regexp = tryToCreateRegexp();
                        filter && (list =list.filter(item => regexp ? regexp.test(item) : item.includes(filter)));
                        return list.map( item => <option key= {item}> {item} </option>);
                   })()
               }
            </select> 
        </div>
    )
}