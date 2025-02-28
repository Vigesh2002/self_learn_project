// Props (short for "properties") are used in React to pass data from one component to another, making components reusable and dynamic.

// Passed from parent to child as function arguments.

import ChildComponent from "./ChildComponent"

function ParentComponent() {
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildComponent name="Vigesh" age={25}/>
        <ChildComponent name="Bob" age={30}/>
    </div>
  )
}

export default ParentComponent