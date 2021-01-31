import React, { useEffect } from "react";
import raw from "./index.am";
import Axios from "axios";

const HomePage = () => {
    useEffect(() => {
        Axios.get(raw).then(res => console.log(res))
    }, [])
    return(
        <></>
    )
}

export default HomePage;