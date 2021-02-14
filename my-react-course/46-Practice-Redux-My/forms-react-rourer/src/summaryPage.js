import React from 'react';

import { connect } from 'react-redux';

function mapStateToProps(state , ownProps) {
    return {
        username: state.formsData.username || ownProps.username ,
        password: state.formsData.password || ownProps.password,
        country: state.formsData.country || ownProps.country,
        city: state.formsData.city || ownProps.city,
        selectedHobbies: state.formsData.selectedHobbies,        
    }
}

const SummaryPage = connect(mapStateToProps)(function SummaryPage({username , password , country , city , selectedHobbies}) {

    return (
      <form>
        <h1>Summary page</h1>
        <div>
            <label id="username">Name: {username}</label>
        </div>
        <div>
            <label id="password">Password: {password}</label>
        </div>
        <div>
            <label id="country">Country: {country}</label>
        </div>
        <div>
            <label id="city">City: {city}</label>
        </div>
        <div>
            <label id="hobbies">
                Hobbies: 
                <ul style={{listStyle:"none"}}>
                     { Array.from(selectedHobbies).map((hobby , index)=> <li key={index}> {index+1}.) {hobby} </li>)}
                </ul>
            </label>
        </div>
      </form>
    );
});


SummaryPage.defaultProps = {
    username:'guest',
    password:'123456',
    country:'no',
    city:'no',
    selectedHobbies:[],
}


export default SummaryPage;