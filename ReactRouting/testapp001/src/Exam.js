import React, { Component } from 'react';
import "./Exam.css"
import male from "./male.png"
import female from "./female.png"

class Exam extends Component {
    render() {
        var student = this.props.getStudent(this.props.match.params.id)[0]
        var avarge=0
        var scores = student.scores.map((el,i)=>{
            avarge+=el.score
            return(<div className="score" key={i}>{el.type}: {el.score}</div>)
        })
        avarge/=4
        var img
        if(student.name.split(" ")[0].substr(-1)!="a") {img=male} else {img=female} 
        return (
            <div className="exam">
                <div className="left">
                    <img src={img} alt="uczen" className="left"/>
                </div>
                <div className="right">
                    <div className="name">{student.name}</div>
                    {scores}
                    <div className="score" >avarge: {avarge}</div>
                </div>
            </div>
        );
    }
}

export default Exam;