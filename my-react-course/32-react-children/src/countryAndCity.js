import React from 'react';

const SelectedOptions = ({name, items , selectedItem , updateDataObjOfAllPages}) => {
  function handlerInputChange(e) {
    const dataObj = {[e.target.id] : e.target.value, }
    name === 'country' && (dataObj.city = null);
    updateDataObjOfAllPages(dataObj);
  }

  return (
    <div className="form-outline mb-4">
        <label className="form-label" htmlFor={name}>{name + ' '}: </label>
        <select className="custom-select" id={name} value={selectedItem||'default'} onChange={(e)=>handlerInputChange(e)}>
            <option disabled value = "default"> Please select a {name} </option>
            {items.map(item => 
              <option key={item} value={item}>{item}</option>)}
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
        <SelectedOptions name="country" items={countries} selectedItem={dataObjOfAllPages.country} updateDataObjOfAllPages={updateDataObjOfAllPages}/>
        {cities &&
        <SelectedOptions name="city" items={cities} selectedItem={dataObjOfAllPages.city} updateDataObjOfAllPages={updateDataObjOfAllPages}/>}
    </form>
  );
}