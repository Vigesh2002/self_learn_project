import { Component } from "react";
import ClassChildComponent from "./ClassChildComponent";

class ClassParentComponent extends Component {
    render(){
        return(
            <div>
                <h2>Class Parent Component</h2>
                <ClassChildComponent name = "Vigesh" age = {23}/>
            </div>
        )
    }
}

export default ClassParentComponent;