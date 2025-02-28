import PropTypes from "prop-types";

function ChildComponent(props) {
  return (
    <div>
      <h1>ChildComponent</h1>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default ChildComponent;
