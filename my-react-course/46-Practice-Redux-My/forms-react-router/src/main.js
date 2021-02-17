import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import FormsApp from './formsApp';
import '../style/main.scss';

function mapStateToProps(state) {
    return {
        currentFormName: state.router.currentFormName,
    };
}

const AppContainer = connect(mapStateToProps)(function AppContainer(props) {
    const { currentFormName } = props;

    return (
            <Router>
                <Switch>
                    <Route path="/forms/:id" component={FormsApp}/>
                    <Redirect from="/" to={`/forms/${currentFormName}`}/>
                </Switch>
            </Router> 
    );
});

const App = () =><Provider store = {store}> <AppContainer/> </Provider>;


ReactDOM.render(<App/> , document.querySelector('main'));