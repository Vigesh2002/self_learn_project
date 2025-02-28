import { Component } from "react";
import PropTypes from "prop-types";

class ClassChildComponent extends Component{
    render(){
        return(
            <div>
                <h2>Class Child Component</h2>
                <p>Hello {this.props.name}</p>
                <p>I am {this.props.age} year old</p>
            </div>
        )
    }
}

ClassChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default ClassChildComponent;