import React from 'react';
import { connect } from 'react-redux';

import { updateDataByID } from './redux/actions';

function mapStateToProps(state) {
    return {
        country: state.formsData.country,
        city: state.formsData.city,
    }
}

const SelectedOptions = connect(mapStateToProps) (function SelectedOptions({name, items , selectedItem , dispatch}) {

  return (
    <div className="form-outline mb-4">
        <label className="form-label" htmlFor={name}>{name + ' '}: </label>
        <select className="custom-select" id={name} value={selectedItem||'default'} onChange={(e)=>dispatch(updateDataByID(e))} autoComplete="on">
            <option disabled value = "default"> Please select a {name} </option>
            {items.map(item => 
              <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
  );
});

export default connect(mapStateToProps)(function CountryAndCitySelection({country , city}) {
 const countries = (require ('countries-cities').getCountries()).sort();
 const cities = country && (require ('countries-cities').getCities(country)).sort();

  return (
    <form>
      <h1>Country and city selection</h1>
        <SelectedOptions name="country" items={countries} selectedItem={country}/>
        {cities &&
        <SelectedOptions name="city" items={cities} selectedItem={city}/>}
    </form>
  );
});