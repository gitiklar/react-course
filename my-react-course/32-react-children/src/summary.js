import React from 'react';

export function Summary(props) {
    const { dataObjOfAllPages } = props;

    return (
      <form>
        <h1>Country and City</h1>
        <div>
            <label id="name">Name: {dataObjOfAllPages.name}</label>
        </div>
        <div>
            <label id="password">Password: {dataObjOfAllPages.password}</label>
        </div>
        <div>
            <label id="country">Country: {dataObjOfAllPages.country}</label>
        </div>
        <div>
            <label id="city">City: {dataObjOfAllPages.city}</label>
        </div>
        <div>
            <label id="hobbies">
                Hobbies: 
                <ul style={{listStyle:"none"}}>
                     { Array.from(dataObjOfAllPages.hobbies).map((hobby , index)=> <li key={index}> {index+1}.) {hobby} </li>)}
                </ul>
            </label>
        </div>
      </form>
    );
  }

  Summary.defaultProps = {
    dataObjOfAllPages: {
      name:'guest',
      password:'123456',
      country:'none',
      city:'none',
      hobbies:[],
    }
  }
