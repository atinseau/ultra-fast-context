import { useState } from "react"
import Clear from "./Clear"
import Input from "./Input"
import List from "./List"

function App() {

  const [count, setCount] = useState(0)

  return (
   <div>
    <p>App</p>
    <Input fieldName="firstName" />
    <Input fieldName="lastName" />
    <List/>
    <Clear/>

    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
   </div>
  )
}

export default App
