import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Products01.css"
const Products02 = ({ match }) => (

    <div>
        {
            console.log(match)
        }

        <ul>
            <li><Link to={`${match.url}/a`}>link to page a</Link></li>
            <li><Link to={`${match.url}/abc`}>link to page abc</Link></li>
            <li><Link to={`${match.url}/jd`}>link to page jd</Link></li>
            <li><Link to={`${match.url}/xd`}>link to page xd</Link></li>
        </ul>

        <Route path={`${match.url}/:prodId`} component={MyComp} />

    </div>

)

const MyComp = ({ match }) => (
   <div className="link">
        {match.params.prodId}
   </div>
);

export default Products02;