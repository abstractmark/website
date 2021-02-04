import React, { useEffect, useState } from "react";
import raw from "./index.am";
import Axios from "axios";
import {AbstractMark} from "@abstractmark/abstractmark";

const HomePage = () => {
    const [homePage, setHomePage] = useState('');
    useEffect(() => {
        Axios.get(raw).then(res => setHomePage(AbstractMark(res.data, {styled: true})))
    }, [])
    return(
        <div dangerouslySetInnerHTML={{ __html: homePage }}></div>
    )
}

export default HomePage;