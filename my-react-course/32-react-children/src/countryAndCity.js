import React from 'react';

function Countries({countries , dataObjOfAllPages , updateDataObjOfAllPages}) {
    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value , city: null});
    }
  
    return (
      <div className="form-outline mb-4">
          <label className="form-label" htmlFor="country">Country:</label>
          <select className="custom-select" id="country" value={dataObjOfAllPages.country||'default'} onChange={(e)=>handlerInputChange(e)}>
            <option disabled value="default">Choose country...</option>
            {countries.map(country=>
              <option key={country} value={country}>{country}</option>)}
          </select>
        </div>
    );
  }
  
  function Cities({cities , dataObjOfAllPages , updateDataObjOfAllPages}) {
    function handlerInputChange(e) {
      updateDataObjOfAllPages({[e.target.id] : e.target.value});
    }
  
    return (
      <div className="form-outline mb-4">
          <label className="form-label" htmlFor="city">City:</label>
          <select className="custom-select" id="city" value={dataObjOfAllPages.city||'default'} onChange={(e)=>handlerInputChange(e)}>
            <option disabled value="default">Choose city...</option>
            {cities.map(city=>
              <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
    );
  }
  
  export function CountryAndCity({dataObjOfAllPages , updateDataObjOfAllPages}) {
    const countries = require ('countries-cities').getCountries();
    let cities = null;
    dataObjOfAllPages.country && (cities = require ('countries-cities').getCities(dataObjOfAllPages.country));
    cities && (cities = cities.sort());

    return (
      <form>
        <h1>Country and City</h1>
          <Countries countries={countries} dataObjOfAllPages ={dataObjOfAllPages} updateDataObjOfAllPages = {updateDataObjOfAllPages}/>
          {cities &&
          <Cities cities={cities} dataObjOfAllPages = {dataObjOfAllPages} updateDataObjOfAllPages = {updateDataObjOfAllPages}/>}
      </form>
    );
  }