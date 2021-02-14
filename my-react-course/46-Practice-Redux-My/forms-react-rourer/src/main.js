import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';

import store from './redux/store';
import FormsApp from './formsApp';
import '../style/main.scss';

const App = () => {

    return (
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path="/loginPage" component = {()=><FormsApp currentFormIndex = {0}/>}/>
                    <Route path="/countryAndCitySelection"  component = {()=><FormsApp currentFormIndex = {1}/>}/>
                    <Route path="/hobbiesSelection"  component = {()=><FormsApp currentFormIndex = {2}/>}/>
                    <Route path="/summaryPage"  component = {()=><FormsApp currentFormIndex = {3}/>}/>
                    <Redirect from="/" to ="/loginPage"/>
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));