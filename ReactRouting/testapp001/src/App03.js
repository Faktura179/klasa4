import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App03.css"
import Students from "./Students"
import students from "./students.json"

class App03 extends Component {
    render() {
        return (
            <div>
                <div className="header">My application</div>
                <Router> 
                    <div className="menu">  
                        <Link to="/">All students</Link>
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                    </div> 
                    <Switch>
                        <Route exact path="/" render={(props)=> <Students {...props} scope="Wszyscy" students={students} /> } />
                        <Route path="/all" render={(props)=> <Students {...props} scope="Wszyscy" students={students} /> } />
                        <Route path="/men" render={(props)=><Students {...props} scope="Mezczyzni" students={students.map((el)=>{if(el.name.split(" ")[0].substr(-1)!="a")return el}).filter((el)=>el!=undefined)}/>} />
                        <Route path="/women" render={(props)=> <Students {...props} scope="Kobiety" students={students.map((el)=>{if(el.name.split(" ")[0].substr(-1)=="a")return el}).filter((el)=>el!=undefined)}/> } />
                    </Switch>         
                </Router>
            </div>
        );
    }
}

export default App03;