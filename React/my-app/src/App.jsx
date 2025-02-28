import FunctionalComponents from "./Components/functionalComponents"
import ClassComponents from "./Components/ClassComponents"
import ParentComponent from "./Components/Props/Functional_Props/ParentComponent"
import ClassParentComponent from "./Components/Props/Class_Props/ClassParentComponent"
import IfExample from "./Components/Conditional_Rendering/IfExample"

function App() {
  return (
    <div>
      <h1>Welcome to programming world</h1>
      <FunctionalComponents />
      <ClassComponents />
      <ParentComponent />
      <ClassParentComponent />
      <IfExample />
    </div>
  )
}

export default App