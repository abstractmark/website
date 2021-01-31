import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./HomeComponents/index.component";

const App = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {HomePage} />
        </Switch>
    </Router>
)

export default App;