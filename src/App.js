import React, { useEffect, useState } from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./HomeComponents/index.component";
import Playground from "./HomeComponents/playground.component";
import docs from "./Docs/index";
import { AbstractMark } from "@abstractmark/abstractmark";
import axios from "axios";

const ReadDocs = params => {
    const [docRes, setDocRes] = useState('')

    useEffect(() => {
        docs.forEach(doc => {
            if(doc.url === params.match.params.doc){
                axios.get(doc.code).then(res => setDocRes(AbstractMark(res.data, {styled: true})))
            }
        })
    }, [params.match.params.doc])
    return(
        <div dangerouslySetInnerHTML={{__html: docRes}}></div>
    )
}

const App = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route path = "/playground" component = {Playground} />
            <Route path = "/:doc" component = {ReadDocs} />
        </Switch>
    </Router>
)

export default App;