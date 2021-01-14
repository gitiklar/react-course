import React, { useState } from 'react';

export function MyFormsContainer(props) {
    const [dataObjOfAllPages , setDataObjOfAllPages] = useState({});
    const [currentIndex , setCurrentIndex] = useState(0);
    const countOfPages = React.Children.count(props.children);
  
    function updateDataObjOfAllPages(dataObj) {
      setDataObjOfAllPages({...dataObjOfAllPages, ...dataObj});
    }
  
    function getCurrentPage() {
      const child = React.Children.toArray(props.children)[currentIndex];
      return React.cloneElement(child , { dataObjOfAllPages : {...child.props.dataObjOfAllPages , ...dataObjOfAllPages} , updateDataObjOfAllPages});
    }
  
    return (
      <>
        {getCurrentPage()}
        <div className="btnsContainer">
            <button disabled={currentIndex === 0} onClick={()=>setCurrentIndex(v=>v-1)}>Previous</button>
            <button disabled={currentIndex === countOfPages-1} onClick={()=>setCurrentIndex(v=>v+1)}>Next</button>
        </div>
      </>
    );
  }