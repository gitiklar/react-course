import React from 'react';
import { useState } from 'react';

const SelectCountry = (props) => {
    const { countries , setCountrySelected , countrySelected} = props;
    
    return (
        <select value={countrySelected} onChange = {(e) => {setCountrySelected(e.target.value)}}>
            <option disabled selected>Please select a country</option>
            {countries.map(country =>           
                 <option key={country} value={country}>{country}</option>
            )}
        </select>
    );
}

const SelectCity = (props) => {
  const { cities , setCitySelected , citySelected} = props;
  
  return (
      <select value={citySelected} onChange={(e)=>{setCitySelected(e.target.value)}}>
          <option disabled selected> Please select a city </option>
          {cities.map(city => 
              <option key={city} value={city}>{city}</option>
          )}
      </select>
  );
}

export default function SelectCountryAndCity(props) {
  const { countriesAndCities } = props;
  const [ countrySelected , setCountrySelected ] = useState(null);
  const [ citySelected , setCitySelected ] = useState(null);
  const [ cityKey , setCityKey ] = useState(0);

  const countries = Object.keys(countriesAndCities);
  const cities = countriesAndCities[countrySelected];

  function countrySelectedHandler(country) {
      setCountrySelected(country);
      setCitySelected(null);
      setCityKey(!cityKey);
  }

  return(
      <>
        <p> Your selected: {countrySelected} / {citySelected}</p>
        <SelectCountry countries = {countries} setCountrySelected = {countrySelectedHandler} countrySelected ={countrySelected}/>
        {cities && 
        <SelectCity key={cityKey} cities = {cities} setCitySelected = {setCitySelected} citySelected = {citySelected}/>}
      </>
  );
}




















































/*
import React from 'react';
import { useState } from 'react';

const SelectCity = (props) => {
  return (
    <select></select>
  );
};

const SelectCountry = (props) => {
  return (
    <select></select>
  );
};

export default function SelectCountryAndCity(props) {
  return (
    <p>Main Component</p>
  );
}

*/