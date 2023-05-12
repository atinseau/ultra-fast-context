import { memo } from "react";
import StoreContext from "./StoreContext";

const Input = memo(({ fieldName }: { fieldName: "firstName" | "lastName" }) => {

  const [fieldValue, setStore] = StoreContext.useStore((store) => store[fieldName])

  return <div>
    <label htmlFor={fieldName}>{fieldName}</label>
    <input
      id={fieldName}
      value={fieldValue}
      onChange={(e) => setStore({ [fieldName]: e.target.value })}
    />
  </div>
})

export default Input;