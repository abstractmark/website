import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./HomeComponents/index.component";
import Playground from "./HomeComponents/playground.component";

const App = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route path = "/playground" component = {Playground} />
        </Switch>
    </Router>
)

export default App;