import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import 'antd/dist/antd.css';

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
// import ReactGA from "react-ga";

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Home/>}/>
                <Route path="/home" component={Home}/>
                <Route path="/beerList" component={BeerList}/>
            </Switch>
        </Router>
    );
};

export default Routes;
