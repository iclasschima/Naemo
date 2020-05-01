import React from "react"
import Error from "./styles/error"
import error404 from "../assets/pagenotfound.svg"

export default () => (
    <Error className="text-center">
        <h5>Page Not Found!</h5>
        <img src={error404}/>
    </Error>
)