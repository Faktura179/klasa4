import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Students.css"
import Exam from "./Exam"



class Students extends Component {
    constructor(props){
        super(props)
        this.getStudentById = this.getStudentById.bind(this)
    }
    getStudentById(id){
        return this.props.students.filter((el)=>{if(el._id==id)return el})
    }
    render() {
        var stud = this.props.students.map((el,i)=>{
            return(<Student key={i} name={el.name} id={el._id} match={this.props.match.path}/>)
        })
        return (
            <div className="main">
                <h1>{this.props.scope}</h1>
                <div className="left">{stud}</div><div className="right"> <Route path={`${this.props.match.path}/:id`} render={(props)=>{return (<Exam {...props} getStudent={this.getStudentById}/>)}}/> </div>
            </div>
        );
    }
}

const Student = ({name, id ,match}) => {
    if(match=="/")match="/all"
    return(
    <div>
        
        <span className="imiona"> {name} </span><Link to={`${match}/${id}`} className="oceny">Zobacz oceny {id}</Link>
    </div>
)}

export default Students;