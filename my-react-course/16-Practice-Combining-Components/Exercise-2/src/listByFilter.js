import React from 'react';

export default function ListByFilter({ list , filter , filterFn , renderItem}) {

    const filterList = filterFn(list ,filter);

    return(
        <div className = "listByFilter">
           <select multiple="multiple">
               {    filterList.map( item => renderItem(item))  }
            </select> 
        </div>
    )
}

ListByFilter.defaultProps = {

    filterFn: (list , filter)=>{
        const regexp = (()=> {try {return new RegExp(filter);} catch {return false;}})();
        filter && (list =list.filter(item => regexp ? regexp.test(item) ? item: '' : item.includes(filter)));
        return list;
    },

    renderItem: (item) => <option key= {item}> {item} </option>
};