import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../store';
import AppSelect from '../components/select-app';

const Root = () => {
    return (<Provider store={store}>
            <BrowserRouter>
            <Switch>
                <Route path="/show-repository-commits/" component={AppSelect} />
            </Switch>
            </ BrowserRouter>
            </Provider>)
}

export default Root;