import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"

function NotFound(){
    return(
        <div className="notfound-container">
            <h1 className="notfound-title">404 Page Not Found</h1>
            <p className="notfound-text">The page you are looking for does not exist.</p>
           <Link to="/" className="notfound-link">Go to Homepage🏠</Link>
        </div>
    )
}


export default NotFound;

