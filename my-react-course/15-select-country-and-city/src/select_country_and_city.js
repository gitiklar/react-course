import React from 'react';
import { useState } from 'react';

const SelectedOptions = ({name, items , selectedItem , setSelectedItem }) => {
  return (
    <select value={selectedItem || "default"} onChange={(e)=>{setSelectedItem(e.target.value)}}>
        <option disabled value = "default"> Please select a {name} </option>
        {items.map(item => 
            <option key={item} value={item}>{item}</option>
        )}
    </select>
  );
}

export default function SelectCountryAndCity(props) {
  const { countriesAndCities } = props;
  const [ selectedCounty , setSelectedCountry ] = useState(null);
  const [ selectedCity , setSelectedCity ] = useState(null);

  const countries = Object.keys(countriesAndCities);
  const cities = countriesAndCities[selectedCounty];

  function selectedCountyHandler(country) {
      setSelectedCountry(country);
      setSelectedCity(null);
  }

  return(
      <>
        <p> Your selected: {selectedCounty} / {selectedCity} </p>
        <SelectedOptions name="country" items = {countries} selectedItem ={selectedCounty} setSelectedItem = {selectedCountyHandler}/>
        {cities && 
        <SelectedOptions name="city" items = {cities}  selectedItem = {selectedCity} setSelectedItem = {setSelectedCity}/>}
      </>
  );
}

/*
import React from 'react';
import { useState } from 'react';

const SelectCountry = (props) => {
    const { countries , setCountrySelected , countrySelected} = props;
    
    return (
        <select value={countrySelected || "default"} onChange = {(e) => {setCountrySelected(e.target.value)}}>
            <option disabled value = "default">Please select a country</option>
            {countries.map(country =>           
                 <option key={country} value={country}>{country}</option>
            )}
        </select>
    );
}

const SelectCity = (props) => {
  const { cities , setCitySelected , citySelected} = props;
  
  return (
      <select value={citySelected || "default"} onChange={(e)=>{setCitySelected(e.target.value)}}>
          <option disabled value = "default"> Please select a city </option>
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

  const countries = Object.keys(countriesAndCities);
  const cities = countriesAndCities[countrySelected];

  function countrySelectedHandler(country) {
      setCountrySelected(country);
      setCitySelected(null);
  }

  return(
      <>
        <p> Your selected: {countrySelected} / {citySelected}</p>
        <SelectCountry countries = {countries} setCountrySelected = {countrySelectedHandler} countrySelected ={countrySelected}/>
        {cities && 
        <SelectCity cities = {cities} setCitySelected = {setCitySelected} citySelected = {citySelected}/>}
      </>
  );
}
*/
